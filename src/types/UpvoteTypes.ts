export type Vote = boolean;

export interface VoteRecord {
  id: number;
  votes: Vote[];
}

export type VoteRecords = VoteRecord[];
