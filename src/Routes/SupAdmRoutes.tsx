
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Stepform } from "../components/Restaurant/newRestaurant/NewRestaurant";
import { Overview } from "../components/Pages/Overview";
import Clients from "../components/Pages/SA_Clients";
import Views from "../components/Pages/SA_View";
import Update from "../components/Pages/SA_Update";
import AddRoles from "../components/Pages/SA_AddRoles";
function SupAdmRouter (){
  return(
    <Routes>
      <Route path = "/login" element = { <Login/>}/>
                    {/* Admin pages */}
      <Route path="/overview" element={<Overview/>}></Route>
      <Route path="/clients" element={<Clients/>}></Route>
      <Route path="/restaurants/new" element={<Stepform/>}></Route>
      <Route path="/view" element={<Views/>}></Route>
      <Route path="/update" element={<Update/>}></Route>
      <Route path="/addroles" element={<AddRoles/>}></Route>
    </Routes>
  )
}

export default SupAdmRouter;
