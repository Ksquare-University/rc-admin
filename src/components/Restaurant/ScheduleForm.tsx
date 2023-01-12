import React,{useState} from "react";
import { InformationForm } from "./InformationForm";
import { DisableForm } from "./DisableForm";
import './ScheduleForm.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const ScheduleForm = () =>{
    const [day, setday] = useState("");
    const [step, setstep] = useState(1);
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
    
      const onSubmit = (data: daysSubmitForm) => {
        const payload = {day, ...data}
        console.log(JSON.stringify(payload , null, 2));
        //Pseudo code to Send Post info into Back schedule service //
        // axios.post('/restaurant-schedule', payload)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        // });
      };

    const working = (value:number)=>{
        return 'btn '+((value===step) ?'active':'default');
    }
    return(
        <form className='scheduleContainer' onSubmit={handleSubmit(onSubmit)}>
            <div className="navbar">
                <a className={working(1)} onClick={()=>{setday("Monday");setstep(1);}}>Monday</a>
                <a className={working(2)} onClick={()=>{setday("Tuesday"); setstep(2);}}>Tuesday</a>
                <a className={working(3)} onClick={()=>{setday("Wednesday"); setstep(3);}}>Wednesday</a>
                <a className={working(4)} onClick={()=>{setday("Thrusday"); setstep(4);}}>Thrusday</a>
                <a className={working(5)} onClick={()=>{setday("Friday"); setstep(5);}}>Friday</a>
                <a className={working(6)} onClick={()=>{setday("Saturday"); setstep(6);}}>Saturday</a>
                <a className={working(7)} onClick={()=>{setday("Sunday"); setstep(7);}}>Sunday</a>
            </div>

            <div className="restaurantSchedule">
                <div className="openDays">
                    Opening days
                    <select className="OpenInfo" id="oDays" {...register("openingDays")}>
                        <option value=""></option>
                        <option value="9:30 am">9:30 am</option>
                        <option value="10:30 am">10:30 am</option>
                        <option value="11:30 am">9:30 am</option>
                    </select>
                </div>

                <div className = "closeDays">
                    Close Days
                    <select className="CloseInfo" id="cDays" {...register("closeDays")}>
                        <option value=""></option>
                        <option value="7:00 pm">7:00 pm</option>
                        <option value="10:00 pm">10:00 pm</option>
                        <option value="12:00 am">12:00 am</option>
                    </select>
                </div>
          
                <div className="buttons">
                    <button className="cancelButton"> Cancel </button>
                    <button className="doneButton" type="submit"> Done </button>
                </div>
            </div>
        </form>
    );
}
