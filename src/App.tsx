import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login/Login";
import { SeeYou } from "./components/SeeYou/SeeYou";
import { ScheduleForm } from "./components/Restaurant/newRestaurant/ScheduleForm";

import { Provider } from 'react-redux'
import store from './store';
import { NewRestaurantForm } from "./views/RestaurantForm"
import { UserInfo } from "./components/UserInfo/UserInfo";
import { UserInfoSideBar } from "./components/UserInfoSideBar/UserInfoSideBar";
import { UpNavBar } from "./components/UpNavBar/UpNavBar";

function App() {
  return (
    <>
    <UpNavBar/>
    </>
  );
}

export default App;
