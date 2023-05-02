import React from "react";
import "./style.css"


export default function sidebaritem({menu}) {
    return  (
        <li className="sidebarListItem">
            <p>{menu.name}</p>
        </li>
    )
    
}