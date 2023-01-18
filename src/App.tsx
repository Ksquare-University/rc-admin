
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
const firebaseApp = initializeApp(firebaseConfig);



const App: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleCallback = (childData: boolean) => {
    setOpen(childData);
  };
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Provider store={store}>
          <UserInfo/>
        </Provider>
        <Router></Router>
      </BrowserRouter>

    </>
  );
};
export default App;
