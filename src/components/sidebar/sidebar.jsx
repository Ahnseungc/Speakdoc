import React,{useEffect} from "react";
import './sidebar.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebaritem from "../sidebarItem";

export default function sidebar() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathName = useLocation().pathname;
    console.log(pathName);

    const menus = [
        {name: "HOME", path: "/home"},
        {name: "CAPTION", path: "/caption"},
        {name: "PDF", path: "/pdf"}
    ];

    return ( 
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                Dashboard
                </h3>
                <ul className="sidebarList">
                    {
                    menus.map((menu,index)=>{
                        return(
                        <Link to={menu.path} key={index}
                        style={{textDecoration:'none'}}
                        >
                            <Sidebaritem 
                            menu={menu}
                            isActive={pathName===menu.path ? true : false}
                            />
                        </Link>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    </div>
    )

}