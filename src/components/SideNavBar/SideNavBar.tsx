import React from "react";
import "./SideNavBar.css"
import {
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
        <div>
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