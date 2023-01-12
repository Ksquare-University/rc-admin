export type counterState = number;

  const formInformation = (state: counterState, action: { payload: number }) => {
    return state = action.payload
  }

  const formSchedule = (state: counterState, action: { payload: number }) => {
    return state = action.payload
  }

  const formDisable = (state: counterState, action: { payload: number }) => {
    return state = action.payload
  }


  export default {
    formInformation,
    formSchedule,
    formDisable
  }


