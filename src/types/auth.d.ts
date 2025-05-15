export type RegisterPayload = {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: string;
  country: string;
  city: string;
  image?: string;
};

export type RegisterState = {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: string;
};

export type LoginState = {
  email: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type VerifyPayload = {
  code: string;
  email: string;
};
