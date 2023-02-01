import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "./CustomersTable.css";
import { useSelector } from "react-redux";
import { StateI } from "../../../store/slices";



const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "customer", headerName: "Full Name", width: 400 },
  { field: "phone_number", headerName: "Phone Number", width: 400 },
  { field: "status", headerName: "Status", width: 330 },
];
 




export const CustomersTable = () => {
  const [clients, SetClients] = React.useState<any[]>([]);
  const [finalClient, setFinalClient] = React.useState<any[]>([]);

  
  const currentName = useSelector<StateI>(
    (state) => state.currentUserState.displayName
  ) as string;
  const currentEmail = useSelector<StateI>(
    (state) => state.currentUserState.email
  ) as string;
  const currentPhone = useSelector<StateI>(
    (state) => state.currentUserState.phone
  ) as string;
  const currentUid = useSelector<StateI>(
    (state) => state.currentUserState.uid
  ) as string;



  // form values initial state
  const [userData, setUserData] = React.useState({
    displayName: currentName || "",
    email: currentEmail || "",
    phone: currentPhone || "",
    uid: currentUid || "",
    accessToken: "",
  });
  

  React.useEffect(() => {
    const fetchClients = async () => {
      const req = await fetch(
        //`https://gist.githubusercontent.com/ArgenisGonzalez-Ksquare/53f964c7fb7f73b317e5eb9cba659301/raw/a114c12124dab94bd932878c6017c0c3a841ca1a/gistfile1.json`
        `http://localhost:3001/orders/owner/${userData.uid}`
        );
      const clientsData = await req.json();
      SetClients(clientsData);
      console.log(clientsData);
      

    };
    fetchClients();
  }, [SetClients, ]);

  React.useEffect(() => {

    if(clients){
      setFinalClient(clients.map(
        function(item){
            return{
              "id": item.Customer.id,
              "customer": item.Customer.full_name,
              "phone_number":  item.Customer.phone_number,
              "status": ((item.Customer.status || 'Active'))
            }}
          ))
    }

  }, [clients, setFinalClient])
  



  return (
    <div className="table-container" style={{ height: 650, width: "70%" }}>
      <h1 className="title-list"><i className="fa-regular fa-face-smile"></i>Clients</h1>
      <DataGrid
        rows={finalClient}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        //checkboxSelection
      />
    </div>
  );
};

/* [
  
  { "id": 1, "Client": "#254884", "client":"Fulanito deTal", "restaurant":"Tacos ITK", "status": "Complete" },
  { "id": 2, "Client": "#254471", "client":"Juana Maria", "restaurant":"Tortas ITK", "status": "Complete" },
  { "id": 3, "Client": "#145792", "client":"Francisca", "restaurant":"Tacos ITK", "status": "Complete" },
  { "id": 4, "Client": "#254823", "client":"Fulanito deTal", "restaurant":"Tacos ITK", "status": "Complete" },
  { "id": 5, "Client": "#254821", "client":"Perla Mendez", "restaurant":"Pizza ITK", "status": "Cancel" },
  { "id": 6, "Client": "#211284", "client":"Yumil Flores", "restaurant":"Tacos ITK", "status": "Cancel" },
  { "id": 7, "Client": "#25432s", "client":"Fulanito deTal", "restaurant":"Chilaquiles ITK", "status": "Rejected" },
  { "id": 8, "Client": "#254589", "client":"Pancacia", "restaurant":"Tacos ITK", "status": "Complete" },
  { "id": 9, "Client": "#254102", "client":"Fulanito deTal", "restaurant":"Tacos ITK", "status": "Complete" },
  
 ] */
