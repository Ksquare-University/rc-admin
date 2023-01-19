import React, {useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { StateI } from '../../../../store/slices';
import { formInformation } from '../../../../store/slices/RestaurantForm/index'
import { Information } from '../../../../store/slices/RestaurantForm/reducers';
import { InformationContainer } from './InformationContainer'


type UserSubmitForm = {
    name: string;
    description: string;
  };

  type Props = {
    isChanged?: number
  }
export function ViewInformation({isChanged = 0 }:Props) {

  //Redux
  const dispatch = useDispatch();

  // get Redux store values
  const formstageName = useSelector<StateI>(state => state.restaurantView.ViewInformation.name) as string;
  const formstageDescription = useSelector<StateI>(state => state.restaurantView.ViewInformation.description) as string;
  const formstagePhone = useSelector<StateI>(state => state.restaurantView.ViewInformation.phone_number) as string;
  const formstageFoodType = useSelector<StateI>(state => state.restaurantView.ViewInformation.food_type) as string;
  const formstageAddress = useSelector<StateI>(state => state.restaurantView.ViewInformation.address) as string;
  const formdeliveryfee = useSelector<StateI>(state => state.restaurantView.ViewInformation.delivery_fee) as number;


  // form values initial state
  const [formData, setFormData] = useState<Information>({
    name: formstageName || "",
    description: formstageDescription || "",
    phone_number: formstagePhone || "",  
    food_type: formstageFoodType || "",
    address: formstageAddress || "",
    delivery_fee: formdeliveryfee || 0,
  })

  // form values onchange
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData({
        ...formData, 
        [name]: value
    })
  }

  useEffect(() => {
        // update Redux Slice
        dispatch(
          formInformation(formData)
        );
    

  }, [formData, isChanged, dispatch])

    const validationSchema = Yup.object().shape({
      name: Yup.string().required("Name is required").min(3,"Name must be at least 6 characters").max(20, "Name must not exceed 40 characters"),
      food_type: Yup.string(),
      phone: Yup.number(),
      delivery_fee: Yup.number(),
      address: Yup.string(),
    });
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<UserSubmitForm>({
      resolver: yupResolver(validationSchema),
    });

    return(

        <div className='RestaurantInfo'>
          <InformationContainer/>
        </div>
    );
  };