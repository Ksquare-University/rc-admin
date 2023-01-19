import React,{useState} from "react";
import { Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useDispatch, useSelector } from 'react-redux';
import { StateI } from '../../../../store/slices';
import { formDisable } from '../../../../store/slices/RestaurantForm/index'

type Props = {
    isChanged?: number
  }

export const ViewDisable = ({isChanged=0}:Props) =>{
    //Redux
    const dispatch = useDispatch();

    // get Redux store values
    const formEnable = useSelector<StateI>(state => state.restaurantView.ViewDisable.enable) as boolean;
    const formOpen = useSelector<StateI>(state => state.restaurantView.ViewDisable.open) as boolean;

    const [formData, setFormData] = useState({
        enable: formEnable || false,
        open: formOpen || false
    })


    React.useEffect(() => {
        // update Redux Slice
        dispatch(
            formDisable(formData)
        );
  }, [formData, isChanged, dispatch])

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
      };
      const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target
        setFormData({
            ...formData, 
            [name]: checked
        })
      }


    return(
        <div className="disableContainer">
            <div className="restauranteAvility">
                <span>Enable/Disable </span>
                <Switch value="Enable" name= 'enable'  checked={formEnable} onChange={(e)=>{handleChange(e)}}></Switch>
            </div>
            <div className="restauranteState">
                <span>Open/Close</span>
                <Switch value="Open"  name= 'open' checked={formOpen} onChange={(e)=>{handleChange(e)}}></Switch>
            </div>

            <div className="buttons">
                <button className="cancelButton buttonDis"> Cancel </button>
                <button className="doneButton buttonDis"> Done </button>
            </div>
        </div>
    );
}