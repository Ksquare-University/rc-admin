import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login/Login";

import { Provider } from "react-redux";
import store from "./store";
import { NewRestaurantForm } from "./views/RestaurantForm";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { UserInfoSideBar } from "./components/UserInfoSideBar/UserInfoSideBar";
import { UpNavBar } from "./components/UpNavBar/UpNavBar";

import ModalUnstyledDemo from "./components/Restaurant/newRestaurant/ModalForm";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const handleCallback = (childData: boolean) => {
    setOpen(childData);
  };

  return (
    <>
      <Login/>
    </>
  );
}

export default App;
