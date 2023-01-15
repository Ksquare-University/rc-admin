import React from "react";
import logo from "./logo.svg";
import { } from 'react-router-dom'
import Router from './routes'
//import "./App.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebase/firebaseConfig";
import { initializeApp } from "firebase/app";
import { Login } from "./components/Login/Login";
import { SeeYou } from "./components/SeeYou/SeeYou";
import { Stepform } from "./components/Restaurant/NewRestaurant";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Clients from "./components/Pages/Clients";
import Restaurants from "./components/Pages/Restaurants";
import Views from "./components/Pages/Views";
import Orders from "./components/Pages/Orders";
import Sales from "./components/Pages/Sales";
import { UpNavBar } from "./components/UpNavBar/UpNavBar";
import InformationTemplate from "./components/Templates/InformationTemplate";
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
      {/* <UpNavBar/>
       */}
    </>
  );
}



export default App;
