  export type counterState = number;

  export interface information {
    name:string,
    description: string,
    phone_number: string,
    food_type: string,
    address:string, 
    image: File
  }
  interface schedule {
    name:string
  }
  interface disable {
    name:string
}
export interface initialState {
  FormStage: number, // default page stage to show on page load
  FormInformation: information,
  FormSchedule: schedule,
  FormDisable: disable
}

  const updateState =  (state: initialState, action: { payload: number }) => {
    state.FormStage = action.payload
  }

  const formInformation = (state: initialState, action: { payload: information }) => {
    state.FormInformation = action.payload
  }

  export default {
    updateState,
    formInformation
  }


