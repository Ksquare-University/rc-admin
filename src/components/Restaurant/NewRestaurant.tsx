import React,{useState} from "react";
import { InformationForm } from "./InformationForm";
import { ScheduleForm } from "./ScheduleForm";
import { DisableForm } from "./DisableForm";

import './NewRestaurant.css'



export const Stepform = () =>{
    const [step, setstep] = useState(1);

    const isActive = (value:number)=>{
        return 'btn '+((value===step) ?'active':'default');
    }
    return (
      <div className="formRestaurant">
        <div className="menu">
            <a className={isActive(1)} onClick={()=>{setstep(1);}}>Information</a>
            <a className={isActive(2)} onClick={()=>{setstep(2);}}>Schedule</a>
            <a className={isActive(3)} onClick={()=>{setstep(3);}}>Disable Restaurant</a>
        </div>

        <div className="container-form">
            {step===1 && <InformationForm/>}
            {step===2 && <ScheduleForm/>}
            {step===3 && <DisableForm/>}
        </div>
      </div>

    );

}