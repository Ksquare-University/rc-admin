import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import rappilogoBN from "../../assets/rappilogoBN.png";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateUserState } from "../../store/slices/User";
import { useDispatch, useSelector } from "react-redux";
import { StateI } from "../../store/slices";
import {setAuthorizationHeader, auth, } from "../../client"
import { Alert, CircularProgress } from "@mui/material";

type UserSubmitForm = {
  email: string;
  password: string;
};

type Props ={
  parentLogin?: Function,
}

export function Login (props: Props) {
  const currentName = useSelector<StateI>(
    (state) => state.currentUserState.displayName
  ) as string;
  const currentEmail = useSelector<StateI>(
    (state) => state.currentUserState.email
  ) as string;

  const { parentLogin } = props;

  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const token = await user.user.getIdToken();
      console.log(token);
      if (user) {
        dispatch(
          updateUserState({
            displayName: user.user.displayName || 'Error',
            email: user.user.email || "Error",
            phone: "809-751-5482",
            // accessToken: (await user.user.getIdToken()).toString()|| '',
          })
        );
        setAuthorizationHeader(token);
        localStorage.setItem('token', token)
        if(parentLogin) {
          parentLogin(true);
        }
      }

    } catch (error) {
      console.error(error);
      if(parentLogin)
      parentLogin(false);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });


  //** Unsupported until a refactor dont delete!! */
  const onSubmit = (data: UserSubmitForm) => {
    // console.log(JSON.stringify(data, null, 2));
    //   axios.post('http://localhost:3010/users/admin/signin', data, config)
    //     .then(function (response) {
    //       if(parentLogin) parentLogin(true);
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //   });
  };

  // form values initial state
  const [formData, setFormData] = useState({
    email: "argenis@admin.com",
    password: "test123",
  });

  // form values onchange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="LoginContainer">
        <div>
          <img src={rappilogoBN} alt="log" className="logo-login" />
        </div>
        <span className="span-login">Welcome!</span>
        {currentEmail && 
        <>
                <span className="span-login2">{currentEmail}</span>
                <Alert className="alert-succes" severity="success">Succes Login!</Alert>
                <CircularProgress className="circular-progress" color="error" />
        </>
        }
       
        {!currentEmail && (
          <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputLabel">
              <input
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                placeholder="Email"
                /* {...register("email")} */
                className={`form-control`}
              />
            </div>
            <div className="inputLabel">
              <input
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="password"
                placeholder="Password"
                /* {...register("password")} */
                className={`form-control`}
              />
            </div>

            <div className="form-group">
              <button
                onClick={() => login()}
                type="submit"
                className="btn-btn-primary"
              >
                Sing in
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
