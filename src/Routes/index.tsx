
import { Route, Routes } from "react-router-dom";
import { Order} from "../components/Pages/Orders";
import { Sales } from "../components/Pages/Sales";
import {Clients} from "../components/Pages/Clients"
//import {Clients} from "../components/Pages/SA_Clients"
//import { Overview } from "../components/Pages/Overview";
import { Login } from "../components/Login/Login";
import { DisableForm } from "../components/Restaurant/newRestaurant/DisableForm";
import { InformationForm } from "../components/Restaurant/newRestaurant/InformationForm";
import { ScheduleForm } from "../components/Restaurant/newRestaurant/ScheduleForm";
import { SeeYou } from "../components/SeeYou/SeeYou";
import { UpNavBar } from "../components/UpNavBar/UpNavBar";
import { UserInfo } from "../components/UserInfo/UserInfo";
import { UserInfoSideBar } from "../components/UserInfoSideBar/UserInfoSideBar";
import { NewRestaurantForm } from "../components/Restaurant/newRestaurant/NewRestaurant";
import { ViewRestaurant } from "../components/Restaurant/viewRestaurant/viewRestaurant";
import { ViewUser } from "../components/users/viewUser/viewUser"
import { OrdersTable } from "../components/Tables/OrdersTable/OrdersTable";
import { SalesTable } from "../components/Tables/SalesTable/SalesTable";
import { CustomersTable } from "../components/Tables/CustomersTable/CustomersTable";
import { Overview } from "../components/Overview/Overview";

function Router (){
  return(
    <Routes>
      <Route path = "/login" element = { <Login/>}/>
                    {/* Admin pages */}
      <Route path="/overview" element={<Overview/>}></Route>
      <Route path="/clients" element={<CustomersTable/>}></Route>
      {/* <Route path="/clientes" element={<Login parentLogin={function (arg: boolean): void {
        throw new Error("Function not implemented.");
      } }/>}></Route> */}
      <Route path="/restaurants/new" element={<NewRestaurantForm/>}></Route>
      <Route path="/restaurants" element={<ViewRestaurant/>}></Route>
      <Route path="/order" element={<Order/>}></Route>
      {/* <Route path="/overview/revenue" element={<Revenue/>}></Route> */}
      <Route path="/user" element={ <ViewUser/>}></Route>
      {/* <Route path="/user/new" element={ <newUser/>}></Route> */}

      <Route path="/orders" element={<OrdersTable/>}></Route>
      <Route path="/sales" element={<SalesTable/>}></Route>
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
