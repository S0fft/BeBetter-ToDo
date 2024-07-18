export type LoginBody = {
  username: string;
  password: string;
};

export type LoginResponse = {
  access: string;
  refresh: string;
};

export type SignUpBody = {
  username: string;
  email: string;
  password: string;
  password2: string;
};

export type SignUpResponse = {
  username: string;
  email: string;
  image: string;
};
