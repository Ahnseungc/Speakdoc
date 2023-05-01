import React from "react";
import "./styles.css"
import Item from "../../components/sidebarItem"
import { Link, useLocation, useNavigate } from "react-router-dom";



export default function Select_page(){   

const pathname = useLocation().pathname;
console.log(pathname);

const select =[
    // {name: "HOME", path: "/home"},
    {name: "CAPTION", path: "/caption"},
    {name: "PDF", path: "/pdf"}
]


return(
    <>
    <div className="main-box">
        {
            select.map((select, index)=>{
                return(
                <Link to={select.path} key={index}
                style={{textDecoration:'none'}}
                >
                    <Item 
                    menu={select}
                    isActive={pathname===select.path ? true : false}                    
                    />
                </Link>        
                )
            })
        }
    </div>
    </>
)


}