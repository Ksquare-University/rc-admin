import './InformationForm.css'
import React, {useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import './InformationForm.css'
import { useDispatch, useSelector } from 'react-redux';
import { StateI } from '../../../store/slices';
import default_img from '../../../assets/default-restaurant.png'

import { formInformation } from '../../../store/slices/RestaurantForm/index'
import ImageUploading, { ImageListType} from 'react-images-uploading';


type UserSubmitForm = {
    email: string;
    password: string;
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
  const formstagePhone = useSelector<StateI>(state => state.newRestaurantCount.FormInformation.phone_number) as string;
  const formstageFoodType = useSelector<StateI>(state => state.newRestaurantCount.FormInformation.food_type) as string;
  const formstageAddress = useSelector<StateI>(state => state.newRestaurantCount.FormInformation.address) as string;
  const formstageImage = useSelector<StateI>(state => state.newRestaurantCount.FormInformation.image) as File;


  // form values initial state
  const [formData, setFormData] = useState({
    name: formstageName || "",
    description: formstageDescription || "",
    phone: formstagePhone || "",  
    food_type: formstageFoodType || "",
    address: formstageAddress || "",
    image: formstageImage,
  })

  // form values onchange
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData({
        ...formData, 
        [name]: value
    })
  }

  // form validation checks
  // const [errors, setErrors] = useState({})
  // const validate = (formData:information) => {

  //   let formErrors = {
  //     name: "",
  //     description: "",
  //     phone: "",  
  //     food_type: "",
  //     address: "",
  //     image: "",
  //   } // set form errors to none at start

  //   // name
  //   if(!formData.name){
  //     formErrors.name = "Name required";
  //   }
    
  //   // description
  //   //const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  //   if(!formData.description){
  //     formErrors.description = "Description required";
  //   }

  //   //phone
  //   if(!formData.phone_number){
  //     formErrors.phone = "Description required";
  //   }

  //   //food type
  //   if(!formData.food_type){
  //     formErrors.food_type = "Description required";
  //   }

  //   return formErrors
  // }

  useEffect(() => {
    if (isChanged) { // check if any form errors

        // update Redux Slice
        dispatch(
          formInformation({ // update formSignup
            name: formData.name,
            description: formData.description,
            phone_number: formData.phone,  
            food_type: formData.food_type,
            address: formData.address,
            image: formData.image,
          })
        );
    }

  }, [formData, isChanged, dispatch])



  const [selectedFile, setSelectedFile] = useState<any>(URL.createObjectURL(formstageImage)||null);

    const validationSchema = Yup.object().shape({
      name: Yup.string().required("Name is required").min(3,"Name must be at least 6 characters").max(20, "Name must not exceed 40 characters"),
    });
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<UserSubmitForm>({
      resolver: yupResolver(validationSchema),
    });


    const onChangeImage = (e:React.ChangeEvent<HTMLInputElement>) => {
      if(e.target.files && e.target.files[0] ){
        let value = URL.createObjectURL(e.target.files[0]);
        setSelectedFile(value);
        //console.log(e.target.files[0]);
        setFormData({
          ...formData, 
          ['image']: e.target.files[0]
      })
      }
    }

    const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };
  
    return(
        <div className='RestaurantInfo'>
          
          <input
            placeholder="Restaurant Name"
            type="file"
            accept='image/png, image/jpeg'
            onChange={(e)=>{onChangeImage(e)}}
             />
            <br/>
            { selectedFile && <img src={selectedFile||default_img}></img>}
            <img src={default_img} ></img>
   
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
              value={formData.food_type}
              onChange={handleChange}
             />

              <input
              placeholder="Cell:"
              type="text"
              id="phone"
              name="phone" 
              value={formData.phone}
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

            </div>
    );
  };