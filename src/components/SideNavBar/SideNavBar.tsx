import React, {useState} from "react";
import "./SideNavBar.css"
import {
    FaBarcode,
    FaBars,
    FaCommentAlt,
    FaRegChartBar,
    FaShoppingBag,
    FaTh, FaUserAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

type Props = {
    children: React.ReactNode
  }

  function SideNavBar({ children }: Props) {
    const [isOpen, setIsOpen] =useState (false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem =[
        {
            path: "/",
            name:"Views",
            icon:<FaTh/>
        },
        {
            path: "/",
            name:"Clients",
            icon:<FaUserAlt/>
        },
        {
            path: "/",
            name:"Orders",
            icon:<FaRegChartBar/>
        },
        {
            path: "/",
            name:"Restaurants",
            icon:<FaCommentAlt/>
        },
        {
            path: "/",
            name:"Sales",
            icon:<FaShoppingBag/>
        },
    ]
    return (

        <div className="container">
            <div style={{width:isOpen ? "300px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 className="logo">Logo</h1>
                    <div className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div> 
            </div>
             {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link">
                        <div className="icon"> {item.icon}</div>
                        <div className="link_text">{item.name}</div>
                    </NavLink>
                ))
             }
             <main>{children}</main>
        </div>
    );
};

export default SideNavBar;