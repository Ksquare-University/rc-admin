import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "./SalesTable.css";
import { useSelector } from "react-redux";
import { StateI } from "../../../store/slices";



const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "order_id", headerName: "Order ID", width: 200 },
  { field: "total_items", headerName: "Total Items", width: 200 },
  { field: "date", headerName: "Date", width: 430 },
  { field: "total_price", headerName: "Price", width: 300 }
];
 




export const SalesTable = () => {
  const [orders, SetOrders] = React.useState<any[]>([]);
  const [finalOrder, setFinalOrder] = React.useState<any[]>([]);

  
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
    const fetchOrders = async () => {
      const req = await fetch(
        //`https://gist.githubusercontent.com/ArgenisGonzalez-Ksquare/57949b90952c9fdf305965fb0b4effb5/raw/60716f29dc63ef21bd29079bd2c219c72693e7c1/gistfile1.json`
        `http://localhost:3001/sales/owner/${userData.uid}`
        );
      const ordersData = await req.json();
      SetOrders(ordersData);
      console.log('dsdssdsd',ordersData);
      

    };
    fetchOrders();
  }, [SetOrders, ]);

  React.useEffect(() => {

    if(orders){
      setFinalOrder(orders.map(
        function(item){
            return{
              "id": item.id,
              "order_id": `#${item.order_id}`,
              "total_items": item.total_items,
              "date": item.date,
              "total_price": `$${item.total_price}.00`,
            }}
          ))
    }

  }, [orders, setFinalOrder])
  



  return (
    <div className="table-container" style={{ height: 650, width: "70%" }}>
      <h1 className="title-list">  <i className="fa-solid fa-sack-dollar"></i> Sales</h1>
      <DataGrid
        rows={finalOrder}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        //checkboxSelection
      />
    </div>
  );
};

/* [
  
  { "id": 1, "order": "#254884", "client":"Fulanito deTal", "restaurant":"Tacos ITK", "status": "Complete" },
  { "id": 2, "order": "#254471", "client":"Juana Maria", "restaurant":"Tortas ITK", "status": "Complete" },
  { "id": 3, "order": "#145792", "client":"Francisca", "restaurant":"Tacos ITK", "status": "Complete" },
  { "id": 4, "order": "#254823", "client":"Fulanito deTal", "restaurant":"Tacos ITK", "status": "Complete" },
  { "id": 5, "order": "#254821", "client":"Perla Mendez", "restaurant":"Pizza ITK", "status": "Cancel" },
  { "id": 6, "order": "#211284", "client":"Yumil Flores", "restaurant":"Tacos ITK", "status": "Cancel" },
  { "id": 7, "order": "#25432s", "client":"Fulanito deTal", "restaurant":"Chilaquiles ITK", "status": "Rejected" },
  { "id": 8, "order": "#254589", "client":"Pancacia", "restaurant":"Tacos ITK", "status": "Complete" },
  { "id": 9, "order": "#254102", "client":"Fulanito deTal", "restaurant":"Tacos ITK", "status": "Complete" },
  
 ] */
