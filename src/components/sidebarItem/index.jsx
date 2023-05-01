import React from "react";
import "./style.css"


export default function sidebaritem({menu}) {
    return  (
        <li className="sidebarListItem">
            {menu.name}
        </li>
    )
    
}