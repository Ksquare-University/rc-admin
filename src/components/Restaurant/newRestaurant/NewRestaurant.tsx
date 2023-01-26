import "./NewRestaurant.css";
import { useSelector, useDispatch } from "react-redux";
import { InformationForm } from "./InformationForm";
import { ScheduleForm } from "./ScheduleForm";
import { DisableForm } from "./DisableForm";
import { StateI } from "../../../store/slices";
import { createRestaurant, createSchedule, updateState } from "../../../store/slices/RestaurantForm";
import { counterState, Information, Week } from "../../../store/slices/RestaurantForm/reducers";
import { useAppDispatch } from "../../../store";
import { useEffect, useState } from "react";

type Props = {
  title?: string;
};

export function NewRestaurantForm({ title = "NewRestaurantForm" }: Props) {
  const dispatch = useDispatch();
  const dispatchPromise = useAppDispatch();

  const pageStage = useSelector<StateI>(
    (state) => state.newRestaurantCount.FormStage
  ) as counterState;

  const isActive = (value: number) => {
    return "btn " + (value === pageStage ? "active" : "default");
  };

  const updateStates = (n: number) => {
    dispatch(updateState(n));
  };

  const informationForm = useSelector<StateI>((state)=>state.newRestaurantCount.FormInformation) as Information;
  const isDeletedForm = useSelector<StateI>((state)=>state.newRestaurantCount.FormDisable.enable) as boolean;
  const week = useSelector<StateI>((state)=>state.newRestaurantCount.FormSchedule.week) as Week;
  const restaurantId = useSelector<StateI>((state)=>state.newRestaurantCount.restaurant_id) as number;

  const donecancelParent = (arg: boolean) =>{

    if(arg){
      dispatchPromise(createRestaurant({
        information: informationForm ,
        is_deleted: isDeletedForm,
        owner_id: 1
      }));
    }
  }

  useEffect(()=>{
          //Week...
      if(restaurantId){  
            //Monday
          dispatchPromise(createSchedule({ 
            day: 'Monday',
            restaurant_id: restaurantId,
            opening_hour: week.monday.oppeningTime,
            closing_hour: week.monday.closeTime
          }));
          //Tuesday
          dispatchPromise(createSchedule({ 
            day: 'Tuesday',
            restaurant_id: restaurantId,
            opening_hour: week.Tuesday.oppeningTime,
            closing_hour: week.Tuesday.closeTime
          }));
          //Wednesday
          dispatchPromise(createSchedule({ 
            day: 'Wednesday',
            restaurant_id: restaurantId,
            opening_hour: week.Wednesday.oppeningTime,
            closing_hour: week.Wednesday.closeTime
          }));
          //Thursday
          dispatchPromise(createSchedule({ 
            day: 'Thrusday',
            restaurant_id: restaurantId,
            opening_hour: week.Thrusday.oppeningTime,
            closing_hour: week.Thrusday.closeTime
          }));
          //Friday
          dispatchPromise(createSchedule({ 
            day: 'Friday',
            restaurant_id: restaurantId,
            opening_hour: week.Friday.oppeningTime,
            closing_hour: week.Friday.closeTime
          }));
          //Saturday
          dispatchPromise(createSchedule({ 
            day: 'Saturday',
            restaurant_id: restaurantId,
            opening_hour: week.Saturday.oppeningTime,
            closing_hour: week.Saturday.closeTime
          }));
          //Sunday
          dispatchPromise(createSchedule({ 
            day: 'Sunday',
            restaurant_id: restaurantId,
            opening_hour: week.Sunday.oppeningTime,
            closing_hour: week.Sunday.closeTime
          }));

          (window as Window).location = "http://localhost:3000/restaurants";

      }
  }, [restaurantId])
  
  return (
    <div className="formRestaurant">
      <div className="menu">
        <a
          className={isActive(1)}
          onClick={() => {
            updateStates(1);
          }}
        >
          Information
        </a>
        <a
          className={isActive(2)}
          onClick={() => {
            updateStates(2);
          }}
        >
          Schedule
        </a>
        <a
          className={isActive(3)}
          onClick={() => {
            updateStates(3);
          }}
        >
          Disable Restaurant
        </a>
      </div>
      <div className="container-form">
        <div className="span-container">
          <span className="span-new-restaurant">New Restaurant Form</span>
        </div>
        {pageStage === 1 && <InformationForm isChanged={pageStage} />}
        {pageStage === 2 && <ScheduleForm isChanged={pageStage} />}
        {pageStage === 3 && <DisableForm isChanged={pageStage} parentCallBack={donecancelParent}/>}
      </div>
    </div>
  );
}
