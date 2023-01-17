import React,{useState} from "react";
import './ScheduleForm.css'
import ResponsiveTimePickers from './TimePicker'

type Props = {
    timeOp?: string,
    timeCl?: string,
    parentCallbackOppening:(arg:string) =>void,
    parentCallbackClose:(arg:string) =>void

}

export const FormTime = ({timeOp="00:00", timeCl="23:00", parentCallbackOppening, parentCallbackClose}:Props)=>{


    return(
        <>
        <div className="restaurantSchedule">
                <div className="openDays">
                    <span> Opening days </span>
                    <ResponsiveTimePickers time={timeOp} parentCallback={parentCallbackOppening} />
                </div>

                <div className = "closeDays">
                    <span>  Close Days </span>
                    <ResponsiveTimePickers time={timeCl} parentCallback={parentCallbackClose}/>                    
                </div>
        
            </div>
        </>
    );
}