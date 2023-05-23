import React,{useEffect, useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../../image/image1.png"
import axios from "axios";

const Container =styled.a`
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 150px;
    text-decoration: none;
`
const ImageWrapper = styled.div`
    width: 160px;
    height: 130px;
    /* position: relative; */
`
const Image = styled.img`
    width: 160px;
    height: 130px;
    /* position: absolute; */
`

const Content = styled.div`
    /* background-color: rgba(0,0,0,0.5); */
    color: black;
    width: 160px;
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
    



    const imgsrc= image;
    return(
        <Container>
        <ImageWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Link to={'/pdfdetail'} state={id}>
        <Image src={img}></Image>
        </Link>            
            <Content>{content}</Content>
            <h3 style={{color:'black', fontWeight:"bold",margin:"0px"}}>
                {pdfname}
                
            </h3>
            
        </ImageWrapper>
        </Container>
    )
}

export default PDFMAIN2;