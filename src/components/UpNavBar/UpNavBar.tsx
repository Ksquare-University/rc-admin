import "./UpNavBar.css";
import Rappi_logo from "../../assets/Rappi_logo.png";
import * as React from 'react'
import { Menu, MenuItem } from "@mui/material";
import Button from '@mui/material/Button';
import { fontSize } from "@mui/system";
import Sidebar from "../Sidebar/Sidebar";

export const UpNavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (

  <div className="NavBar-container">

      <Sidebar/>

      <div className="Logo-container">
        <img src={Rappi_logo} alt="logo" className="logo" />
      </div>

      <div className="Icons-Containers">
        <button className="icon icon-button">
          <i className="fa-solid fa-user"></i>
        </button>

        <button className="icon icon-button">
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
  </div>
    
  );
};
