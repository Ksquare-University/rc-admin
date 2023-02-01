  export type counterState = number;

  export interface Information {
    name:string,
    description: string,
    phone_number: number,
    category: string,
    address: string, 
    delivery_fee: number
  }

  interface Day {
    day: number
    oppeningTime: string,
    closeTime: string
  }

  export interface Week {
    monday: Day,
    Tuesday: Day,
    Wednesday:Day,
    Thrusday:Day,
    Friday:Day,
    Saturday:Day,
    Sunday:Day
  }
  export interface Schedule {
    stepDay: number,
    week: Week
  }
  export interface Disable {
    enable:boolean,
    open: boolean
}
export interface InitialState {
  ViewStage: number, // default page stage to show on page load
  ViewInformation: Information,
  ViewSchedule: Schedule,
  ViewDisable: Disable,
  loading: 'idle' | 'pending' | 'success' | 'failure'
}


export interface RestaurantOption {
  id: number;
  name: string;
  description: string;
  city_id: number;
  category: string;
  delivery_fee: number;
  phone_number: number;
  owner_id: number;
  is_deleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ScheduleOption {
  id: number;
  restaurant_id: number;
  day: string;
  opening_hour: string;
  closing_hour: string;
  is_deleted: number;
  createdAt: string;
  updatedAt: string;
}