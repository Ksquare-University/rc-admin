import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import rappilogoBN from "../../assets/rappilogoBN.png";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../firebase/firebaseConfig";
import { initializeApp } from "firebase/app";
import { updateUserState } from "../../store/slices/User";
import { useDispatch, useSelector } from "react-redux";
import { UserInfoSideBar } from "../UserInfoSideBar/UserInfoSideBar";
import { current } from "immer";
import { StateI } from "../../store/slices";
import { UserInfo } from "../UserInfo/UserInfo";
import axios from "axios"
//import "bootstrap/dist/css/bootstrap.min.css";

type UserSubmitForm = {
  email: string;
  password: string;
};
interface LoginProp {
  callback?: Function;
}

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

<<<<<<< HEAD
export const Login: React.FC<LoginProp> = (props: LoginProp ) => {
=======
type Props ={
  parentLogin:(arg:boolean) =>void,
}

export function Login ({parentLogin}:Props) {
>>>>>>> Initialization
  const currentEmail = useSelector<StateI>(
    (state) => state.currentUserState.email
  ) as string;
  const {callback } = props;
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };



  

  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const email = "YumilwcTest2@gmail.com";
  const passwd = "yumil22";   

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, passwd);
      console.log(user);

      if (user) {
        dispatch(
          updateUserState({
            displayName: "Yumil Flores",
            email: user.user.email || "DONT",
            phone: "809-751-5482",
          })
        );

        parentLogin(true);
      }
    } catch (error) {
      console.error(error);
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

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
      axios.post('http://localhost:3010/users/admin/signin', data, config)
        .then(function (response) {
          if(callback) callback(true);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
      });
  };

  // form values initial state

  const [formData, setFormData] = useState({
    email: "YumilwcTest2@gmail.com",
    password: "yumil22",
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
          <img src={rappilogoBN} alt="log" className="logo" />
        </div>
        <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
          <span className="span-login">Welcome! {currentEmail}</span>
          <div className="inputLabel">
            <input
              {...register("email",{
                onChange: (e) => {
                  handleChange(e);
                }
              })}
              type="text"
              placeholder="Email"
              className={`form-control`}
            />
          </div>
          <div className="inputLabel">
            <input
              // name="password"

              type="password"
              placeholder="Password"
              {...register("password",{
                onChange: (e) => {
                  handleChange(e);
                }
              })}
              className={`form-control`}
            />
          </div>

          <div className="form-group">
            <button
              // onClick={() => login()}
              type="submit"
              className="btn-btn-primary"
            >
              Sing in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
