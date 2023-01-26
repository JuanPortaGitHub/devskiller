import React, { FC } from "react";

import DetailsSection from "../DetailsSection";

import "./ProposalDetails.css";

type ProposalDetailsProps = Readonly<{
  talk: {
    speaker?: string;
    description?: string;
    category?: string;
  };
}>;

const ProposalDetails: FC<ProposalDetailsProps> = ({ talk }) => {
  const { speaker, description, category } = talk;
  const paragraphs = description?.split(/\r?\n/);
  return (
    <div data-testid="proposal-details" className="ProposalDetails">
      <DetailsSection className="ProposalDetails__speaker" name="speaker">
        <span className="ProposalDetails__speaker__value">{speaker}</span>
      </DetailsSection>
      <DetailsSection className="ProposalDetails__category" name="category">
        <span className="ProposalDetails__speaker__value">{category}</span>
      </DetailsSection>
      <DetailsSection
        className="ProposalDetails__description"
        name="description"
      >
        <div className="ProposalDetails__description__value">
          {paragraphs?.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </DetailsSection>
    </div>
  );
};

export default ProposalDetails;
