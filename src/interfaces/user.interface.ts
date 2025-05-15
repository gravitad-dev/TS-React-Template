export interface User {
  id: string;
  role: string;
  name: string;
  email: string;
  phone: null;
  createdAt: Date;
  updatedAt: Date;
  total_coins: number;
  address: null;
  average_difficulty: number;
  challenges_completed: number;
  city: string;
  country: string;
  image: string;
  knrt: number;
  lastName: string;
  postalCode: null;
  punkoins: number;
  times_played: number;
  username: string;
  verificationCode: null;
  status: string;
  seconds_played: number;
  dateOfBirth: Date | string;
  token: string;
}
