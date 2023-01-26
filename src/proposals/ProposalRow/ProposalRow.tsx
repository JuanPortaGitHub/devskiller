import React, { MouseEventHandler, FC } from "react";
import classNames from "classnames";

import { ConferenceTalkProposal, ProposalStatus } from "../../api";

import "./ProposalRow.css";

const withoutEventDefault =
  (callback: () => void): MouseEventHandler<any> =>
  (event) => {
    event.preventDefault();
    callback();
  };

type ProposalRowProps = Readonly<{
  proposal: ConferenceTalkProposal;
  onStatusUpdate: (
    id: ConferenceTalkProposal["id"],
    status: ProposalStatus
  ) => void;
}>;

const ProposalRow: FC<ProposalRowProps> = ({ proposal, onStatusUpdate }) => {
  const { id, title, status, category, speaker } = proposal;
  return (
    <div
      data-testid={`proposal-id-${id}`}
      className={classNames(
        "ProposalRow",
        status === "accepted" && "ProposalRow--accepted",
        status === "rejected" && "ProposalRow--rejected"
      )}
    >
      <div className="ProposalsRow__status_indicator" />
      <div className="ProposalsRow__title">{title}</div>
      <div className="ProposalsRow__speaker">{speaker}</div>
      <div className="ProposalsRow__category">category: {category}</div>
      <div className="ProposalsRow__status">status: {status}</div>
      <button
        disabled={status === "accepted"}
        className="ProposalsRow__accept_button"
        onClick={withoutEventDefault(() => onStatusUpdate(id, "accepted"))}
      >
        Accept
      </button>
      <button
        disabled={status === "rejected"}
        className="ProposalsRow__reject_button"
        onClick={withoutEventDefault(() => onStatusUpdate(id, "rejected"))}
      >
        Reject
      </button>
    </div>
  );
};

export default ProposalRow;
