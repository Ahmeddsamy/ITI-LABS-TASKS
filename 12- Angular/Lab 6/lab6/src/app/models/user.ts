export interface IUser {
  fullName: string;
  email: string;
  mobileNumbers: string[];
  address: {
    city: string;
    street: string;
    postalCode: string;
  };
  password: string;
}
