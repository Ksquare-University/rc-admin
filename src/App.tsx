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

  return (
    <>
      <UpNavBar />
    </>
  );
}

export default App;
