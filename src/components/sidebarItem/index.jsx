import React from "react";
import "./style.css"


export default function sidebaritem({menu,isActive}) {
    return isActive === true ? (
        <li className="sidebarListItem active">
            {menu.name}
        </li>
    ):
    (
        <li className="sidebarListItem">
            {menu.name}
        </li>
    )
}