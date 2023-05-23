import React,{useRef,useState, useEffect, useCallback} from "react";
import "./styles.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight,faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { getSpeech } from "../../utils/getSpeech";
import { useTypewriter} from "react-simple-typewriter";
import { Link } from "react-router-dom";


export default function StartPage(){
    const [time,setTime] =useState(false);
  useEffect(()=>{
    let timer = setTimeout(()=>{setTime(true)},16000);
  })


    const [text] =useTypewriter({
        words : ["안녕하세요.","지금부터 여러분을 안내할", "저는 스픽독입니다.","안내를 원하시면 저를 눌러주세요.","저는 항상 오른쪽 하단에 있습니다."]                    
    })
    
    useEffect(()=>{
        getSpeech(["안녕하세요.","지금부터 여러분을 안내할","저는 스픽독입니다.","안내를 원하시면 저를 눌러주세요.","저는 항상 오른쪽 하단에 있습니다."])
    },[])        
    
    return(
        <div className="main-img-section">
            <h1>
                {text}
            </h1>            
            <div className={!time ? "speech":"active1"} >
                <Link to={"/pdf"}>
                    개사진         
                </Link>
            </div>
            
        </div>
    )

}
