import React from "react";
import "./styles.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";



export default function Homebtn () {


    return(
        <Link to={"/pdf"} style={
            {textDecoration:'none'}
        }>
        <div className="Home">
            <p>
                <FontAwesomeIcon icon={faHouse} />
            </p>
        </div>
        </Link>
    )
}