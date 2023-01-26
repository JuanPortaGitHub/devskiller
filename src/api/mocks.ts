import { ConferenceTalkProposal, CallForPapers, ConferenceTalk, ConferenceTalkDetails } from "./model";

export const mockConferenceTalk = (overrides: Partial<ConferenceTalk> = {}): ConferenceTalk => ({
  id: "any-id",
  title: "Any Title",
  speaker: "Any Speaker",
  category: "any category",
  ...overrides,
});

export const mockConferenceTalkProposal = (overrides: Partial<ConferenceTalkProposal> = {}): ConferenceTalkProposal => ({
  id: "any-id",
  title: "Any Title",
  speaker: "Any Speaker",
  category: "any category",
  status: "accepted",
  ...overrides,
});

export const mockConferenceTalkDetails = (overrides: Partial<ConferenceTalkDetails> = {}): ConferenceTalkDetails => ({
  id: "any-id",
  title: "Any Title",
  speaker: "Any Speaker",
  category: "any category",
  description: "any description",
  ...overrides,
});

export const mockCallForPapers = (overrides: CallForPapers = { byTalkId: {} }): CallForPapers => overrides;
