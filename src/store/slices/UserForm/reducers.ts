export interface User {
  email: string;
  phone: string;
  user_name: string;
  role: "customer" | "admin" | "manager" | "superadmin" | "courier";
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

export interface UserCustomer {
  full_name: string;
  user_id: string;
  phone: string;
}

export interface CustomerAddress {
  customer_id: number;
  address: string;
  reference: string;
  zip_code: number;
  city_id: number;
}

export interface Customer{
  user: UserCustomer;
  address: CustomerAddress;
}

export interface UserCourrier {
  fullname:string;
  user_id: string;
  phone: string;
}

export interface UserAdmin{
  fullname:string;
  user_id: string;
  phone: string;
}

export interface City{
  id: number;
  name: string;
}

export interface RestaurantFetchOptions { 
  id:number; 
  name:string;
 }


export interface UserForm {
  user: User;
  manager: UserManager;
  admin: UserAdmin;
  customer: Customer;
  courrier: UserCourrier;
  loading: 'idle' | 'pending' | 'success' | 'failure';
  city: City[];
  restaurants: RestaurantFetchOptions[];
}