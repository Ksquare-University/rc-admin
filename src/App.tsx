
import { } from 'react-router-dom'
import React, { useState, FC } from "react";
import { Provider } from "react-redux";
import Router from './Routes/index'
import store from "./store";
import { UserInfo } from "./components/UserInfo/UserInfo";
import "./App.css";
import { firebaseConfig } from "./firebase/firebaseConfig";
import { initializeApp } from "firebase/app";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { NewRestaurantForm} from './components/Restaurant/newRestaurant/NewRestaurant'
import InformationTemplate from './components/Templates/InformationTemplate/index';



const firebaseApp = initializeApp(firebaseConfig); 

const App: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleCallback = (childData: boolean) => {
    setOpen(childData);
  };
  const email = "YumilwcTest2@gmail.com";
  const passwd = "yumil22";

  // Set true if you want to see navBar and others routers componets
  // Set false if you want to go to login by default
  const [isLogin, setLogin] = React.useState(true);

  const parentLogin = (log:boolean) =>{
    setLogin(log);
  }

  return (
    <>
      <BrowserRouter>

          {/* Blocking routers if a user is not loggin */}
          {isLogin ?  <InformationTemplate children={<Router></Router>}/> : <Login parentLogin = {parentLogin}></Login>}
          {/* <NewRestaurantForm/> */}

      </BrowserRouter>
    </>
  );
};
export default App;
