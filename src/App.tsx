import { } from 'react-router-dom'
import React, { FC } from "react";
import Router from './Routes/index'
import "./App.css";
import { firebaseConfig } from "./firebase/firebaseConfig";
import { initializeApp } from "firebase/app";
import { BrowserRouter } from 'react-router-dom';
import { Login } from './components/Login/Login';
import InformationTemplate from './components/Templates/InformationTemplate/index';
import { client, setAuthorizationHeader } from './client';
import { useDispatch } from "react-redux";
import { updateUserState } from './store/slices/User';
import { User } from 'firebase/auth';

const App: FC = () => {

  const dispatch = useDispatch();
  //Read if a token props is stored
  const token = localStorage.getItem("token");
  // Set true if you want to see navBar and others routers componets
  // Set false if you want to go to login by default
  const [isLogin, setLogin] = React.useState(false);

  React.useEffect(() => {
    
  // Check if the page store token otherwhise token is null
    if (token){
      // const data = admin.verifyIdToken(token)
      // console.log("hi; ", data);
      client.post("users/admin/signin", {token}).then((data: Partial<User> | any) =>{
        console.log("a user: ", data);
                
        if (data.role !== "admin") {
          console.log("No Admin Credentials")
          localStorage.removeItem("token");
          window.location.reload();
          (window as Window).location = "http://localhost:3000/";
          return setLogin(false);
        }
        dispatch(
          updateUserState({
            displayName: data.name|| "Yumil Flores",
            email: data.email || "DONT",
            phone: "809-751-5482"
          })
        );
        setAuthorizationHeader(token);
        console.log(data.role);
        setLogin(true);
      }).catch((error) => {
        console.log(error);
        setLogin(false);
      })
    }
  }, [])

  
  const parentLogin = (log:boolean) =>{
    setLogin(log);
  }
  
  return (
    <>
      <BrowserRouter>
          {/* Blocking routers if a user is not loggin */}
          {token && !isLogin ?
            <> 
            </> : isLogin ? <InformationTemplate children={<Router></Router>}/> : <Login parentLogin = {parentLogin}></Login>}
          {/* <NewRestaurantForm/> */}
      </BrowserRouter>
    </>
  );
};
export default App;