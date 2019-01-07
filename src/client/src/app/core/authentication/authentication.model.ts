export interface AuthenticationModel {
  token?:string;
  id:number,
  firstName:string;
  lastName:string;
  email: string;
  role:string;
  accountStatus:string;
  mobile?:number;
  lastLoginDate:string;
}


