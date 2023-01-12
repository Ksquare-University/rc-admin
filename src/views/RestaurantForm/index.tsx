import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InformationForm } from "../../components/Restaurant/newRestaurant/InformationForm";
import { ScheduleForm } from "../../components/Restaurant/newRestaurant/ScheduleForm";
import { DisableForm } from "../../components/Restaurant/newRestaurant/DisableForm";

import { StateI } from '../../store/slices';
import  {formInformation, formSchedule, formDisable} from "../../store/slices/RestaurantForm";
import { counterState } from '../../store/slices/RestaurantForm/reducers';

type Props = {
    title?: string
  }

export function NewRestaurantForm ({ title = 'NewRestaurantForm' }: Props){

    const dispatch = useDispatch();
    const pageStage = useSelector<StateI>(state => state.newRestaurantCount) as counterState;

    const isActive = (value:number)=>{
        return 'btn '+((value===pageStage) ?'active':'default');
    }

    const information = (n: number) => {
        dispatch(formInformation(n));
    }
    const schedule = (n: number) => {
        dispatch(formSchedule(n));
    }
    const disable = (n: number) => {
        dispatch(formInformation(n));
    }
    
    return(
        <div className="formRestaurant">
            <div className="menu">
                <a className={isActive(0)} onClick={()=>{ information(0);}}>Information</a>
                <a className={isActive(1)} onClick={()=>{ schedule(1);}}>Schedule</a>
                <a className={isActive(2)} onClick={()=>{ disable(2);}}>Disable Restaurant</a>
            </div>
            <h1> Satate:{pageStage}</h1>
            <div className="container-form">
                {pageStage===1 && <InformationForm/>}
                {pageStage===2 && <ScheduleForm/>}
                {pageStage===3 && <DisableForm/>}
            </div>
      </div>
    )
}