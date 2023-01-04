import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import rappilogoBN from "../../assets/rappilogoBN.png";
import './Login.css'
//import "bootstrap/dist/css/bootstrap.min.css";

type UserSubmitForm = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
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
      <div>
        <img src={rappilogoBN} alt="log" className="logo" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>Welcome!</span>
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
          <button type="submit" className="btn btn-primary">
            Sing in
          </button>
        </div>
      </form>
    </div>
  );
};
