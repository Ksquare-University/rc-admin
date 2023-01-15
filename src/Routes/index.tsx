
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Clients from "../components/Pages/Clients";
import Views from "../components/Pages/Views";
import Orders from "../components/Pages/Orders";
import Restaurants from "../components/Pages/Restaurants";
import Sales from "../components/Pages/Sales";
import { Login } from "../components/Login/Login";
import { DisableForm } from "../components/Restaurant/DisableForm";
import { InformationForm } from "../components/Restaurant/InformationForm";
import { ScheduleForm } from "../components/Restaurant/ScheduleForm";
import { SeeYou } from "../components/SeeYou/SeeYou";
import { UpNavBar } from "../components/UpNavBar/UpNavBar";
import { UserInfo } from "../components/UserInfo/UserInfo";
import { UserInfoSideBar } from "../components/UserInfoSideBar/UserInfoSideBar";
function Router (){
    <BrowserRouter>
          <Routes>
            <Route path = "/Login" element = { <Login/>}/>
            <Route path = "/Views" element = { <Views/>}/>
            <Route path = "/Orders" element = { <Orders/>}/>
            <Route path = "/Restaurants" element = { <Restaurants/>}/>
            <Route path = "/Sales" element = { <Sales/>}/>
            <Route path = "/Clients" element = { <Clients/>}/>
            <Route path = "/DisableForm" element = { <DisableForm/>}/>
            <Route path = "/InformationForm" element = { <InformationForm/>}/>
            <Route path = "/ScheduleForm" element = { <ScheduleForm/>}/>
            <Route path = "/SeeYou" element = { <SeeYou/>}/>
            <Route path = "/UpNavBar" element = { <UpNavBar/>}/>
            <Route path = "/UserInfo" element = { <UserInfo/>}/>
            <Route path = "/UserInfoSideBar" element = { <UserInfoSideBar/>}/>
            
          </Routes>
      </BrowserRouter>
}

export default Router;
