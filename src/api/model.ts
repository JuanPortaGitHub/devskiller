export type ProposalStatus = "accepted" | "rejected" | "pending" | "unknown"

export interface ConferenceTalk {
  readonly id: string;
  readonly title: string;
  readonly speaker: string;
  readonly category: string;
}

export interface ConferenceTalkDetails extends ConferenceTalk {
  readonly description: string;
}

export interface ConferenceTalkProposal extends ConferenceTalk {
  readonly status: ProposalStatus;
}

export interface CallForPapers {
  readonly byTalkId: {
    readonly [talkId: string]: {
      readonly status: ProposalStatus;
    }
  };
}
