
import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import html2canvas from 'html2canvas';
import axios from "axios";
import styled from 'styled-components';
import { getSpeech } from '../../utils/getSpeech';
import { useLocation } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft, faArrowRight, faPager} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Container = styled.div`
    width: 350px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;


export default function PdfDetail(props) {


  const dispatch = useDispatch();

  let location = useLocation();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [translation,setTranslation] = useState([]);
  const [img,setImg] =useState("");
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    console.log(numPages);
  }

      useEffect(()=>{
        window.speechSynthesis.getVoices();
      },[])

       async function postData (data){
        try{          
          const res = await axios.post("/ocr",
          {data : data});
          console.log(res);
          setTranslation(res.data);
        }
        catch(error) {
          console.log(error);
        }
       }
        const onCapture = () =>{          
          console.log('onCapture');                         
          html2canvas(document.getElementById('pdf_main')).then(canvas=>{
          const imgBase64=canvas.toDataURL('image/png')
          const decodimg=imgBase64.split(',')[1];
          postData(decodimg); 
          dispatch({type:"SAVE",img:decodimg});           
          // setImg(decodimg);
          // console.log(decodimg);                 
          })
                    
        }

        useEffect(()=>{
          console.log(translation);
          getSpeech(translation);
        },[translation])

  
     
  return (
        <Container>
        <div id='pdf_main' className='pdf_main' style={{width: '350px', height: '400px', overflow: 'auto', display:"flex",
        justifyContent: "center"
      }} >
      <Document
        file={"pdf/test"+location.state+".pdf"}
        onLoadSuccess={onDocumentLoadSuccess}        
        >
        <Page 
        height={300}
        width={350}
        pageNumber={pageNumber} 
            renderTextLayer={false}
            onClick={onCapture}
        />
      </Document>
      </div>
      <p className='pageNumber' style={{display: "flex", justifyContent:"center"}}>      	
        <span onClick={()=> pageNumber > 1 ? 
            setPageNumber(pageNumber-1):null}
            style={{}}
            >
            <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <span
        style={{marginLeft:"20px"}}
        >
         {pageNumber} of {numPages}</span>
       	
        <span
        style={{marginLeft:"20px"}}
        onClick={()=> pageNumber < numPages ? setPageNumber(pageNumber+1):null}>
        <FontAwesomeIcon icon={faArrowRight}/>
        </span>
      </p>
    </Container>
  );
}