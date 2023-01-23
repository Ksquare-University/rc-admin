
import { BrowserRouter,Route, Routes } from "react-router-dom";
import{Users} from "../components/Pages/Users"
import { Revenue } from "../components/Pages/Revenue";
import { Order} from "../components/Pages/Orders";
import { Sales } from "../components/Pages/Sales";
import { Overview } from "../components/Pages/Overview";
import { PaymentMethod } from "../components/Pages/Payment";
import { Login } from "../components/Login/Login";
import { DisableForm } from "../components/Restaurant/newRestaurant/DisableForm";
import { InformationForm } from "../components/Restaurant/newRestaurant/InformationForm";
import { ScheduleForm } from "../components/Restaurant/newRestaurant/ScheduleForm";
import { SeeYou } from "../components/SeeYou/SeeYou";
import { UpNavBar } from "../components/UpNavBar/UpNavBar";
import { UserInfo } from "../components/UserInfo/UserInfo";
import { UserInfoSideBar } from "../components/UserInfoSideBar/UserInfoSideBar";
import { Configurations } from "../components/Pages/Configurations";
import { Stepform } from "../components/Restaurant/newRestaurant/NewRestaurant";
function Router (){
  return(
    <Routes>
      <Route path = "/login" element = { <Login/>}/>
                    {/* Admin pages */}
      <Route path="/overview" element={<Overview/>}></Route>
      <Route path="/clients" element={<Users/>}></Route>
      <Route path="/restaurants/new" element={<Stepform/>}></Route>
      <Route path="/order" element={<Order/>}></Route>
      <Route path="/sales" element={<Sales/>}></Route>
      <Route path="/PaymentMethod" element={<PaymentMethod/>}></Route>
      <Route path="/configurations" element={<Configurations/>}></Route>
      <Route path = "/disableForm" element = { <DisableForm/>}/>
      <Route path = "/informationForm" element = { <InformationForm/>}/>
      <Route path = "/scheduleForm" element = { <ScheduleForm/>}/>
      <Route path = "/seeYou" element = { <SeeYou/>}/>
      <Route path = "/upNavBar" element = { <UpNavBar/>}/>
      <Route path = "/userInfo" element = { <UserInfo/>}/>
      <Route path = "/userInfoSideBar" element = { <UserInfoSideBar/>}/>
    </Routes>
  )
}

export default Router;
