import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import rappilogoBN from "../../assets/rappilogoBN.png";
import "./Login.css";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { updateUserState } from "../../store/slices/User";
import { useDispatch, useSelector } from "react-redux";
import { StateI } from "../../store/slices";
import {setAuthorizationHeader, auth, client, } from "../../client"
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
  let logged = false;
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
      // Verificar token en la primera bes //
      client.post("users/admin/signin", {token}).then((data: Partial<User> | any) =>{
        console.log("a user: ", data);
                
        if (data.role !== "admin") {
          console.log("No Admin Credentials")
          localStorage.removeItem("token");
          // window.location.reload();
          // (window as Window).location = "http://localhost:3000/";
          if(parentLogin) return parentLogin(false)
        }
        dispatch(
          updateUserState({
            displayName: data.name|| "Yumil Flores",
            email: data.email || "DONT",
            phone: "809-751-5482"
          })
        );
        logged = true;
        setTimeout(() => {
          setAuthorizationHeader(token);
          localStorage.setItem("token", token);
          console.log(data.role);
          if(parentLogin) parentLogin(true)
        }, 3000);

      })

    } catch (error) {
      setStatusLogin("wrong");
      return statusLogin;
      console.error(error);
      /*       if(parentLogin){
        parentLogin(false);
      } */
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
    email: "",
    password: "",
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
        {statusLogin === "succes" && (
          <>
            <span className="span-login2">{currentEmail}</span>
            <Alert className="alert-succes" severity="success">
              Succes Login!
            </Alert>
            <CircularProgress className="circular-progress" color="error" />
          </>
        )}
        {statusLogin !== "succes" && (
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
        <>
          {statusLogin == "wrong"   && (
            <Alert variant="filled" severity="error" className="alert-wrong">
              <AlertTitle className="alert-title-wrong">Error</AlertTitle>
              Somenthing went wrong —{" "}
              <strong>the email or password are not corrects</strong>
            </Alert>
          )}
        </>
      </div>
    </>
  );
}
