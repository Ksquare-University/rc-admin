import "./UpNavBar.css";
import Rappi_logo from "../../assets/Rappi_logo.png";
import * as React from 'react'
import { Menu, MenuItem } from "@mui/material";
import Button from '@mui/material/Button';
import { fontSize } from "@mui/system";

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

      <Button
      sx={{
        color: '#ff3c15',
        fontSize: 'x-large',
        fontWeight: 'bold'
      }}
        className="Menu-Box"
        // aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        MENU
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}> 
        <MenuItem
          sx={{
            width: 290,
            color: '#ff3c15'
            
          }}
          onClick={handleClose}>Orders</MenuItem>
        <MenuItem 
          sx={{
            width: 290,
            color: '#ff3c15'
          }}onClick={handleClose}>Sales
        </MenuItem>
        <MenuItem 
          sx={{
            width: 290,
            color: '#ff3c15'
          }}
        onClick={handleClose}>Clients</MenuItem>
        <MenuItem 
          sx={{
            width: 290,
            color: '#ff3c15'
          }}
        onClick={handleClose}>Restaurant</MenuItem>
      </Menu>

      <div className="Logo-container">
        <img src={Rappi_logo} alt="logo" className="logo" />
      </div>

      <div className="Icons-Containers">
        <button>
          <i className="fa-solid fa-user"></i>
        </button>
      </div>

      <div className="Icons-Containers">
        <button>
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
  </div>
    
  );
};
