import React from "react";
import logo from "./logo.svg";
//import "./App.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebase/firebaseConfig";
import { initializeApp } from "firebase/app";
import { Login } from "./components/Login/Login";
import { SideNavBar } from "./components/SideNavBar";
import { SeeYou } from "./components/SeeYou/SeeYou";
import { ScheduleForm } from "./components/Restaurant/ScheduleForm";
import { Stepform } from "./components/Restaurant/NewRestaurant";

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
      <Stepform/>
    </>
  );
}

export default App;
