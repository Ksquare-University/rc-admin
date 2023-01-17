import React,{FC} from "react";
import logo from "./logo.svg";
import { } from 'react-router-dom'
import Router from './Routes/index'
import "./App.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebase/firebaseConfig";
import { initializeApp } from "firebase/app";
import { Login } from "./components/Login/Login";
import { SeeYou } from "./components/SeeYou/SeeYou";
import { Stepform } from "./components/Restaurant/NewRestaurant";
import { UpNavBar } from "./components/UpNavBar/UpNavBar";
import InformationTemplate from "./components/Templates/InformationTemplate";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes } from 'react-router-dom';
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const App: FC = () => {
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
      <BrowserRouter>
        <Sidebar />
        {/* <Stepform></Stepform> */}
        <Routes>
        </Routes>
      </BrowserRouter>
    </>
  );
};

// const App: FC = () => {
//   return (
//       <BrowserRouter>
//           <Sidebar />
//           <Routes>
//           </Routes>
//       </BrowserRouter>
//   );
// };

export default App;
