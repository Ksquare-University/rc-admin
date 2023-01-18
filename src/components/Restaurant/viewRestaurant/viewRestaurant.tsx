import './viewRestaurant.css'
import { StateI } from '../../../store/slices';
import { useSelector, useDispatch } from 'react-redux';
import { updateState } from "../../../store/slices/RestaurantView";
import { ViewInformation } from "./components/InformationView";
import { ViewSchedule } from "./components/ScheduleView";
import { ViewDisable } from "./components/DisableView";



type Props={
    title?: string
}

export function ViewRestaurant({title="viewRestaurant"}:Props){

    const dispatch = useDispatch();
    const pageStage = useSelector<StateI>(state => state.restaurantView.ViewStage) as number;

    const isActive = (value:number)=>{
        return 'btn '+((value===pageStage) ?'active':'default');
    }

    const updateStates = (n: number) =>{
        dispatch(updateState(n));
    }

    return (
    <>
        <div className="formRestaurant">
            <div className="menu">
                <a className={isActive(1)} onClick={()=>{ updateStates(1);}}>Information</a>
                <a className={isActive(2)} onClick={()=>{ updateStates(2);}}>Schedule</a>
                <a className={isActive(3)} onClick={()=>{ updateStates(3);}}>Disable Restaurant</a>
            </div>
            <div className="container-form">
                {/* {pageStage===1 && <InformationForm isChanged={pageStage}/>}
                {pageStage===2 && <ScheduleForm />}
                {pageStage===3 && <DisableForm/>} */}
            </div>
        </div>
    </>
    )
}