import React from "react";
import "./style.css"


export default function sidebaritem({img}) {
    
    return  (

        <li className="sidebarListItem">
            <img src={`data:image/jpeg;base64,${img}`} alt="/" />
        </li>
                
    )
    
}