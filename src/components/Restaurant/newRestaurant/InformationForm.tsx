import './NewRestaurant.css'
import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import './InformationForm.css'



type UserSubmitForm = {
    email: string;
    password: string;
  };

export const InformationForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState(null);

    const validationSchema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(40, "Password must not exceed 40 characters"),
    });
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<UserSubmitForm>({
      resolver: yupResolver(validationSchema),
    });
  
    const onSubmit = (data: UserSubmitForm) => {
      console.log(JSON.stringify(data, null, 2));
    };


    return(
        <div className='RestaurantInfo'>
          
          <input
            placeholder="Restaurant Name"
            type="file"
             />

          <input
            placeholder="Restaurant Name"
            type="text"
             />

            <input
            placeholder="Food Type:"
            type="text"
             />

              <input
            placeholder="Cell:"
            type="text"
             />

            <input
            placeholder="Adress:"
            type="text"
             />

            <input
             placeholder="More Info:"
            type="text"
             />
            </div>
    );
  };