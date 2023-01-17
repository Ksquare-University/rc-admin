
import { BrowserRouter,Route, Routes } from "react-router-dom";
import{Users} from "../components/Pages/Users"
import { Revenue } from "../components/Pages/Revenue";
import { Order} from "../components/Pages/Orders";
import { Sales } from "../components/Pages/Sales";
import { Overview } from "../components/Pages/Overview";
import { PaymentMethod } from "../components/Pages/Payment";
import { Login } from "../components/Login/Login";
import { DisableForm } from "../components/Restaurant/DisableForm";
import { InformationForm } from "../components/Restaurant/InformationForm";
import { ScheduleForm } from "../components/Restaurant/ScheduleForm";
import { SeeYou } from "../components/SeeYou/SeeYou";
import { UpNavBar } from "../components/UpNavBar/UpNavBar";
import { UserInfo } from "../components/UserInfo/UserInfo";
import { UserInfoSideBar } from "../components/UserInfoSideBar/UserInfoSideBar";
import { Configurations } from "../components/Pages/Configurations";
import { Stepform } from "../components/Restaurant/NewRestaurant";
function Router (){
    <BrowserRouter>
          <Routes>
            <Route path = "/login" element = { <Login/>}/>

                           {/* Admin pages */}
            <Route path="/overview" element={<Overview/>}></Route>
            <Route path="/overview/users" element={<Stepform/>}></Route>
            <Route path="/overview/revenue" element={<Revenue/>}></Route>
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
      </BrowserRouter>
}

export default Router;
