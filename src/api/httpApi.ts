import axios from "axios";
import { CallForPapers, ConferenceTalk, ConferenceTalkDetails, ProposalStatus } from "./model";

export const getTalks = () =>
    axios.get<ConferenceTalk[]>("/talks")
        .then(res => res.data);

export const getTalk = (talkId: ConferenceTalkDetails["id"]) =>
    axios.get<ConferenceTalkDetails>(`/talks/${talkId}`)
        .then(res => res.data);

export const getCallForPapers = () =>
    axios.get<CallForPapers>("/callForPapers")
        .then(res => res.data);

export const putCallForPapersEntry = (talkId: ConferenceTalkDetails["id"], status: ProposalStatus) =>
    axios.put<void>(`/callForPapers/${talkId}`, { status })
        .then(res => res.data);
