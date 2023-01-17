import React,{useState} from "react";
import { InformationForm } from "./InformationForm";
import './DisableForm.css'
import { Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const DisableForm = () =>{
    type disabledOptions = {
        isRestaurantEnable: boolean | string;
        isRestaurantOpen: boolean | string;
    };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<disabledOptions>();
    
      const onSubmit = (data: disabledOptions) => {
        const payload = {...data}
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
    return(
        <form className="disableContainer"  onSubmit={handleSubmit(onSubmit)}>
            <div className="restauranteAvility">
                Enable/Disable
                <Switch value="Enabled" id="switch" {...register("isRestaurantEnable")}></Switch>
            </div>
            <div className="restauranteState">
                Open/Close
                <Switch value="Open" id="switch" {...register("isRestaurantOpen")}></Switch>
            </div>

            <div className="disableButtons">
                <button className="cancelButton"> Cancel </button>
                <button className="doneButton"> Done </button>
            </div>
        </form>
    );
}