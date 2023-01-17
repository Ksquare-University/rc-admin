import './NewRestaurant.css'
import { useSelector, useDispatch } from 'react-redux';
import { InformationForm } from "../../components/Restaurant/newRestaurant/InformationForm";
import { ScheduleForm } from "../../components/Restaurant/newRestaurant/ScheduleForm";
import { DisableForm } from "../../components/Restaurant/newRestaurant/DisableForm";

import { StateI } from '../../store/slices';
import { updateState } from "../../store/slices/RestaurantForm";
import { counterState } from '../../store/slices/RestaurantForm/reducers';

type Props = {
    title?: string
  }

export function NewRestaurantForm ({ title = 'NewRestaurantForm' }: Props){

    const dispatch = useDispatch();
    const pageStage = useSelector<StateI>(state => state.newRestaurantCount.FormStage) as counterState;

    const isActive = (value:number)=>{
        return 'btn '+((value===pageStage) ?'active':'default');
    }

    const updateStates = (n: number) =>{
        dispatch(updateState(n));
    
    
    return(
        <div className="formRestaurant">
            <div className="menu">
                <a className={isActive(1)} onClick={()=>{ updateStates(1);}}>Information</a>
                <a className={isActive(2)} onClick={()=>{ updateStates(2);}}>Schedule</a>
                <a className={isActive(3)} onClick={()=>{ updateStates(3);}}>Disable Restaurant</a>
            </div>
            <h1> Satate:{pageStage}</h1>
            <div className="container-form">
                {pageStage===1 && <InformationForm isChanged={pageStage}/>}
                {pageStage===2 && <ScheduleForm/>}
                {pageStage===3 && <DisableForm/>}
            </div>
      </div>
    )
}
}