import React from "react";
import "./styles.css"
import { Link } from "react-router-dom";



export default function Homebtn () {


    return(
        <Link to={"/"} style={
            {textDecoration:'none'}
        }>
        <div className="Home">
            Home
        </div>
        </Link>
    )
}