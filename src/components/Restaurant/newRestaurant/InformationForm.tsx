import './InformationForm.css'
import React, {useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { StateI } from '../../../store/slices';
import { formInformation } from '../../../store/slices/RestaurantForm/index'
import { Information } from '../../../store/slices/RestaurantForm/reducers';



type UserSubmitForm = {
    name: string;
    description: string;
  };

  type Props = {
    isChanged?: number
  }
export function InformationForm({isChanged = 0 }:Props) {

  //Redux
  const dispatch = useDispatch();

  // get Redux store values
  const formstageName = useSelector<StateI>(state => state.newRestaurantCount.FormInformation.name) as string;
  const formstageDescription = useSelector<StateI>(state => state.newRestaurantCount.FormInformation.description) as string;
  const formstagePhone = useSelector<StateI>(state => state.newRestaurantCount.FormInformation.phone_number) as number;
  const formstageFoodType = useSelector<StateI>(state => state.newRestaurantCount.FormInformation.category) as string;
  const formstageAddress = useSelector<StateI>(state => state.newRestaurantCount.FormInformation.address) as string;
  const formdeliveryfee = useSelector<StateI>(state => state.newRestaurantCount.FormInformation.delivery_fee) as number;


  // form values initial state
  const [formData, setFormData] = useState<Information>({
    name: formstageName || "",
    description: formstageDescription || "",
    phone_number: formstagePhone || 0,  
    category: formstageFoodType || "",
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
          <input
              placeholder="Restaurant Name"
              type="text"
              id="name"
              name="name" 
              value={formData.name}
              onChange={handleChange}
             />

            <input
              placeholder="Food Type:"
              type="text"
              id="food_type"
              name="food_type" 
              value={formData.category}
              onChange={handleChange}
             />

              <input
              placeholder="Cell:"
              type="text"
              id="phone_number"
              name="phone_number" 
              value={formData.phone_number}
              onChange={handleChange}
             />

             <input
              placeholder=" Delivery fee:"
              type="number"
              id="delivery_fee"
              name="delivery_fee" 
              value={formData.delivery_fee}
              onChange={handleChange}
             />

            <input
              placeholder="Adress:"
              type="text"
              id="address"
              name="address" 
              value={formData.address}
              onChange={handleChange}
             />

             <input
              placeholder="Description:"
              type="text"
              id="description"
              name="description" 
              value={formData.description}
              onChange={handleChange}
             />

            </div>
    );
  };