import React,{useEffect} from "react";
import "./style.css"
import { getSpeech } from '../../utils/getSpeech';


export default function Sidebaritem({img,text}) {


        // useEffect(()=>{
        //     console.log(text);
        //     getSpeech(text);
        // },[text])

    return  (
            <li className="sidebarListItem" onClick={()=>getSpeech(text)}>            
            <img src={`data:image/jpeg;base64,${img}`} alt="/" />
            </li>                                  
    )
    
}


