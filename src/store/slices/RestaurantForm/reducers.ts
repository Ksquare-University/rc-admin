  export type counterState = number;

  export interface Information {
    name:string,
    description: string,
    phone_number: number,
    category: string,
    address:string, 
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
  FormStage: number, // default page stage to show on page load
  FormInformation: Information,
  FormSchedule: Schedule,
  FormDisable: Disable
}


