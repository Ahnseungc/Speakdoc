import React,{useEffect, useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import axios from "axios";

const Container =styled.a`
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    height: 300px;
    text-decoration: none;

    & .image{
        width: 300px;
    height: 260px;
    }
`
const ImageWrapper = styled.div`
    width: 280px;
    height: 260px;
    /* position: relative; */
`
// const Image = styled.img.attrs({
//     src: `${test1}`
// })`
    // width: 300px;
    // height: 260px;
    

const Content = styled.div`
    /* background-color: rgba(0,0,0,0.5); */
    color: black;
    width: 300px;
    font-size: 30px;
    /* height: 130px; */
    /* position: absolute; */
    border: none;
    cursor: pointer;
`
const PDFMAIN2 =({image,content,pdfname,id})=>{
    const [hover,setHover] = useState('off');
    const onMouseEnter =() => setHover('on');
    const onMouseLeave =()=> setHover('off');


    // useEffect(()=>{
    //     axios.get("/document/1/1").then(
    //         function(res){
    //             console.log(res.data)
    //         }
    //     ).catch(function(err){
    //         console.log(err);
    //     })

    // },[])
    
    


    console.log("id", id);
    return(
        <Container>
        <ImageWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Link to={'/pdfdetail'} state={id}>
        <img className="image"
        src={"image/image"+id+".png"}
        alt="/"
        ></img>
        </Link>            
            <Content>{content}</Content>
            <h1 style={{color:'black', fontWeight:"bold",margin:"0px"}}>
                {pdfname}
                
            </h1>
            
        </ImageWrapper>
        </Container>
    )
}

export default PDFMAIN2;