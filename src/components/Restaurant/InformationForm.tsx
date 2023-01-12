import './NewRestaurant.css'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import './InformationForm.css'



type UserSubmitForm = {
    email: string;
    password: string;
  };

export const InformationForm: React.FC = () => {
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
  
    return (
      <div className="LoginContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputLabel">
            <input
              type="text"
              placeholder="Email"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
          </div>
          <div className="inputLabel">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
          </div>
  
          <div className="form-group">

          </div>
        </form>
      </div>
    )
    return(
        <div className='RestaurantInfo'>
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