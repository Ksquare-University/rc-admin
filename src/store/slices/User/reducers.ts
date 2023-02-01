export interface User {
  displayName: string;
  email: string;
  phone: string;
  uid: string;
  // accessToken: string; //AccessToken is stored in axios client Header by the localStorage: Delete this
}
