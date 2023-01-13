import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import rappilogoBN from "../../assets/rappilogoBN.png";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../firebase/firebaseConfig";
import { initializeApp } from "firebase/app";
//import "bootstrap/dist/css/bootstrap.min.css";

type UserSubmitForm = {
  email: string;
  password: string;
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export const Login: React.FC = () => {
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
    } catch (error) {
      console.error(error);
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
  };


  // form values initial state

  const [formData, setFormData] = useState({

    email: "YumilwcTest2@gmail.com",
    password: "yumil22"

  })



  // form values onchange

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
        ...formData,
        [name]: value
    })

  }

  return (
    <div className="LoginContainer">
      <div>
        <img src={rappilogoBN} alt="log" className="logo" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>Welcome!</span>
        <div className="inputLabel">
          <input
          name="email"
          onChange={(e) => {handleChange(e)}}
            type="text"
            placeholder="Email"
            /* {...register("email")} */
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
        </div>
        <div className="inputLabel">
          <input
          name="password"
          onChange={(e) => {handleChange(e)}}
            type="password"
            placeholder="Password"
            /* {...register("password")} */
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
        </div>

        <div className="form-group">
          <button onClick={() => login()}  type="submit" className="btn btn-primary">
            Sing in
          </button>
        </div>
      </form>
    </div>
  );
};
