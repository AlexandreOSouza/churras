export type Participant = {
  name: string;
  amount: number;
  paid: boolean;
};

export type Churras = {
  id?: string;
  user?: string;
  date: string;
  description: string;
  totalParticipants: number;
  totalAmount: number;
  participants?: Array<Participant>;
};
