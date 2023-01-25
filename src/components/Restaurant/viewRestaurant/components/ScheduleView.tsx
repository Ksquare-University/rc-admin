import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useDispatch, useSelector } from 'react-redux';
import { StateI } from '../../../../store/slices';
import { Week } from '../../../../store/slices/RestaurantForm/reducers'
import { FormTime } from './FormTime'
import { updateSchedule, viewInformation, viewSchedule } from "../../../../store/slices/RestaurantView";
import { useAppDispatch } from "../../../../store";

type Props = {
    isChanged?: number
  }

export const ViewSchedule = ({isChanged = 0 }:Props) =>{

    //Redux
    const dispatch = useDispatch();
    const dispatchPromise = useAppDispatch();


    // get Redux store values
    const formstep = useSelector<StateI>(state => state.restaurantView.ViewSchedule.stepDay) as number;
    const formWeek = useSelector<StateI>(state => state.restaurantView.ViewSchedule.week) as Week; 

    // form values initial state
    const [formData, setFormData] = useState({
        stepDay: formstep || 1,
        week: formWeek || {
            monday: { day: 1, oppeningTime: "07:00", closeTime: "22:00" },
            Tuesday: { day: 2, oppeningTime: "07:00", closeTime: "22:00" },
            Wednesday: { day: 3, oppeningTime: "07:00", closeTime: "22:00" },
            Thrusday: { day: 4, oppeningTime: "07:00", closeTime: "22:00" },
            Friday: { day: 5, oppeningTime: "07:00", closeTime: "22:00" },
            Saturday: { day: 6, oppeningTime: "07:00", closeTime: "22:00" },
            Sunday: { day: 7, oppeningTime: "07:00", closeTime: "22:00" },
        },

    })

    type daysSubmitForm = {
        openingDays?: string;
        closeDays?: string;
        switch?: string;
    };
    const validationSchema = Yup.object().shape({
        openingDays: Yup.string(),
        closeDays: Yup.string()
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<daysSubmitForm>({
        resolver: yupResolver(validationSchema),
      });   

    const working = (value:number)=>{
        return 'btn '+((value===formstep) ?'active':'default');
    }

    const updateDb = ()=>{
        let day = { day:0, oppeningTime: "00:00", closeTime: "10:00"};
        
        if(formstep=== 1)day = formData.week.monday;
        if(formstep=== 2)day = formData.week.Tuesday;
        if(formstep=== 3)day = formData.week.Wednesday;
        if(formstep=== 4)day = formData.week.Thrusday;
        if(formstep=== 5)day = formData.week.Friday;
        if(formstep=== 6)day = formData.week.Saturday;
        if(formstep=== 7)day = formData.week.Sunday;
        
        dispatchPromise(updateSchedule({
            id: day.day,
            opening: day.oppeningTime,
            closing: day.closeTime
        }));
        console.log('updateSchedule', day)
    }
    

    React.useEffect(() => {
            // update Redux Slice
            dispatch(viewSchedule(formData));
            updateDb();
      }, [formData, isChanged, dispatch, updateDb])

    const onClickHandler = (n:number)=>{
        setFormData({
            ...formData, 
            ["stepDay"]: n
        });
 
    }

    
    const updateClTime = (time: string) =>{
        setFormData({
            ...formData, 
            ["week"]: {
                monday: { day: 1, closeTime: formstep===1?time:formData.week.monday.closeTime, oppeningTime: formData.week.monday.oppeningTime },
                Tuesday: { day: 2, closeTime: formstep===2?time:formData.week.Tuesday.closeTime, oppeningTime: formData.week.Tuesday.oppeningTime },
                Wednesday: { day: 3, closeTime: formstep===3?time:formData.week.Wednesday.closeTime, oppeningTime: formData.week.Wednesday.oppeningTime },
                Thrusday: { day: 4, closeTime: formstep===4?time:formData.week.Thrusday.closeTime, oppeningTime: formData.week.Thrusday.oppeningTime },
                Friday: { day: 5, closeTime: formstep===5?time:formData.week.Friday.closeTime, oppeningTime:formData.week.Friday.oppeningTime },
                Saturday: { day: 6, closeTime: formstep===6?time:formData.week.Saturday.closeTime, oppeningTime: formData.week.Saturday.oppeningTime },
                Sunday: { day: 7, closeTime: formstep===7?time:formData.week.Sunday.closeTime, oppeningTime: formData.week.Sunday.oppeningTime },
            }
        });
        //updateDb();
    }

    const updateOpTime = (time: string) =>{
        setFormData({
            ...formData, 
            ["week"]: {
                monday: { day: 1, oppeningTime: formstep===1?time:formData.week.monday.oppeningTime, closeTime: formData.week.monday.closeTime },
                Tuesday: { day: 2, oppeningTime: formstep===2?time:formData.week.Tuesday.oppeningTime, closeTime: formData.week.Tuesday.closeTime },
                Wednesday: { day: 3, oppeningTime: formstep===3?time:formData.week.Wednesday.oppeningTime, closeTime: formData.week.Wednesday.closeTime },
                Thrusday: { day: 4, oppeningTime: formstep===4?time:formData.week.Thrusday.oppeningTime, closeTime: formData.week.Thrusday.closeTime},
                Friday: { day: 5, oppeningTime: formstep===5?time:formData.week.Friday.oppeningTime, closeTime: formData.week.Friday.closeTime },
                Saturday: { day: 6, oppeningTime: formstep===6?time:formData.week.Saturday.oppeningTime, closeTime: formData.week.Saturday.closeTime },
                Sunday: { day: 7, oppeningTime: formstep===7?time:formData.week.Sunday.oppeningTime, closeTime: formData.week.Sunday.closeTime},
            }
        });
        //updateDb();

    }
    

    return(
        <>
            <div className="navbar">
                <a className={working(1)} onClick={()=>{onClickHandler(1);}}>Monday</a>
                <a className={working(2)} onClick={()=>{onClickHandler(2);}}>Tuesday</a>
                <a className={working(3)} onClick={()=>{onClickHandler(3);}}>Wednesday</a>
                <a className={working(4)} onClick={()=>{onClickHandler(4);}}>Thrusday</a>
                <a className={working(5)} onClick={()=>{onClickHandler(5);}}>Friday</a>
                <a className={working(6)} onClick={()=>{onClickHandler(6);}}>Saturday</a>
                <a className={working(7)} onClick={()=>{onClickHandler(7);}}>Sunday</a>

            </div>
            
            {formstep===1 && <FormTime timeOp={formWeek.monday.oppeningTime} timeCl={formWeek.monday.closeTime} parentCallbackOppening={updateOpTime} parentCallbackClose={updateClTime} />}
            {formstep===2 && <FormTime timeOp={formWeek.Tuesday.oppeningTime} timeCl={formWeek.Tuesday.closeTime} parentCallbackOppening={updateOpTime} parentCallbackClose={updateClTime} />}
            {formstep===3 && <FormTime timeOp={formWeek.Wednesday.oppeningTime} timeCl={formWeek.Wednesday.closeTime} parentCallbackOppening={updateOpTime} parentCallbackClose={updateClTime} />}
            {formstep===4 && <FormTime timeOp={formWeek.Thrusday.oppeningTime} timeCl={formWeek.Thrusday.closeTime} parentCallbackOppening={updateOpTime} parentCallbackClose={updateClTime} />}
            {formstep===5 && <FormTime timeOp={formWeek.Friday.oppeningTime} timeCl={formWeek.Friday.closeTime} parentCallbackOppening={updateOpTime} parentCallbackClose={updateClTime} />}
            {formstep===6 && <FormTime timeOp={formWeek.Saturday.oppeningTime} timeCl={formWeek.Saturday.closeTime} parentCallbackOppening={updateOpTime} parentCallbackClose={updateClTime} />}
            {formstep===7 && <FormTime timeOp={formWeek.Sunday.oppeningTime} timeCl={formWeek.Sunday.closeTime} parentCallbackOppening={updateOpTime} parentCallbackClose={updateClTime} />}
            
        </>
    );
}
