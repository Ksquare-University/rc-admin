export interface User {
  email: string;
  phone: string;
  role: "customer" | "admin" | "manager" | "superadmin";
}

export interface UserManager {
  restaurant_id: number;
  user_id: string;
}

export interface UserOwner {
  full_name: string;
  user_id: string;
  phone: string;
}

interface UserCustomer {
  full_name: string;
  user_id: string;
  phone: string;
}

interface CustomerAddress {
  customer_id: number;
  adress: string;
  reference: string;
  zip_code: number;
  city_id: number;
}

export interface Customer{
  user: UserCustomer;
  adress: CustomerAddress;
}

export interface UserCourrier {
  user_id: string;
  phone: string;
}

export interface UserForm {
  user: User;
  manager: UserManager;
  customer: Customer;
  courrier: UserCourrier;
}