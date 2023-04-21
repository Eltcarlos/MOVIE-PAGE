export interface state {
  authState: authState;
  movieState: movieState;
}

export interface authState {
  status: string;
  uid: string;
  email: string;
  isAdmin: boolean;
  errorMessage: string;
}

export interface movieState {
  movies?: [];
}
