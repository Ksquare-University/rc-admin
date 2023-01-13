import React from "react";
import logo from "./logo.svg";
//import "./App.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebase/firebaseConfig";
import { initializeApp } from "firebase/app";
import { Login } from "./components/Login/Login";
import { SeeYou } from "./components/SeeYou/SeeYou";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { UserInfoSideBar } from "./components/UserInfoSideBar/UserInfoSideBar";
import { UpNavBar } from "./components/UpNavBar/UpNavBar";
import { ScheduleForm } from "./components/Restaurant/ScheduleForm";
import { Stepform } from "./components/Restaurant/NewRestaurant";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Clients from "./components/Pages/Clients";
import Restaurants from "./components/Pages/Restaurants";
import Views from "./components/Pages/Views";
import Orders from "./components/Pages/Orders";
import Sales from "./components/Pages/Sales";
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

function App() {
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
  return(
    <> 
      {/* <Login/> */}
      {/* <SeeYou/> */}
      {/* <Stepform/> */}
      <BrowserRouter>
        <SideNavBar>
          <Routes>
            <Route path = "/" element = { <Views/>}/>
            <Route path = "/Orders" element = { <Orders/>}/>
            <Route path = "/Restaurants" element = { <Restaurants/>}/>
            <Route path = "/Sales" element = { <Sales/>}/>
            <Route path = "/Clients" element = { <Clients/>}/>
          </Routes>
        </SideNavBar> 
      </BrowserRouter>
    </>
  );
}



export default App;
