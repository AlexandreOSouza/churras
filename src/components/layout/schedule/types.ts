export type Participant = {
  name: string;
  amount: number;
  paid: boolean;
};

export type Churras = {
  date: string;
  description: string;
  totalParticipants: number;
  totalAmount: number;
  participants?: Array<Participant>;
};
