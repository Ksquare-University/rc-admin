
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { NewRestaurantForm } from "../components/Restaurant/newRestaurant/NewRestaurant";
import { Overview } from "../components/Pages/Overview";
import Clients from "../components/Pages/SA_Clients";
import Views from "../components/Pages/SA_View";
import Update from "../components/Pages/SA_Update";
import AddRoles from "../components/Pages/SA_AddRoles";
import {RestaurantsOwners} from "../components/Pages/SA_Restaurants_Owners";

function SupAdmRouter (){
  return(
    <Routes>
      {/* <Route path="/overview/users" element={<Login parentLogin={function (arg: boolean): void {
        throw new Error("Function not implemented.");
      } }/>}></Route> */}
                    {/* Admin pages */}
      <Route path="/overview" element={<Overview/>}></Route>
      <Route path="/restaurants/owners" element={<RestaurantsOwners/>}></Route>
      <Route path="/clients" element={<Clients/>}></Route>
      <Route path="/restaurants/new" element={<NewRestaurantForm/>}></Route>
      <Route path="/view" element={<Views/>}></Route>
      <Route path="/update" element={<Update/>}></Route>
      <Route path="/addroles" element={<AddRoles/>}></Route>
    </Routes>
  )
}

export default SupAdmRouter;
