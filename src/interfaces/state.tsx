export interface state {
  authState: authState;
}

export interface authState {
  status: string;
  uid: string;
  email: string;
  isAdmin: boolean;
  errorMessage: string;
}
