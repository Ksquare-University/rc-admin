import "./NewRestaurant.css";
import { useSelector, useDispatch } from "react-redux";
import { InformationForm } from "./InformationForm";
import { ScheduleForm } from "./ScheduleForm";
import { DisableForm } from "./DisableForm";
import { StateI } from "../../../store/slices";
import { updateState } from "../../../store/slices/RestaurantForm";
import { counterState } from "../../../store/slices/RestaurantForm/reducers";

type Props = {
  title?: string;
};

export function NewRestaurantForm({ title = "NewRestaurantForm" }: Props) {
  const dispatch = useDispatch();
  const pageStage = useSelector<StateI>(
    (state) => state.newRestaurantCount.FormStage
  ) as counterState;

  const isActive = (value: number) => {
    return "btn " + (value === pageStage ? "active" : "default");
  };

  const updateStates = (n: number) => {
    dispatch(updateState(n));
  };
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
        {pageStage === 3 && <DisableForm />}
      </div>
    </div>
  );
}
