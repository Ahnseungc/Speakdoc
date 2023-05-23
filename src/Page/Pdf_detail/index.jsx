import Homebtn from '../../components/Homebtn';
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
import Sidebar from '../../components/sidebar2';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Container = styled.div`
    width: 1024px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-family: "SUITE-Regular";

    & .active1{    
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 250px;
        position: relative;
        top:5px;
        left: 730px; 
        float: right;
        background-color: rgba(0, 0, 0, 0.124);
        opacity: 1;
        transition: 0.5s ease-in-out;
        z-index: 99;
      }     

    
`;


export default function PdfDetail(props) {


  const dispatch = useDispatch();
  let location = useLocation();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [translation,setTranslation] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    console.log(numPages);
  }
      useEffect(()=>{
        window.speechSynthesis.getVoices();
      },[])
        
       async function postData (data){         
        try{          
          const res = await axios.post("/process_image",
          {"image" : data,
           "pageIndex" : pageNumber,
           "documentId" : 1
          });
          console.log(res.text);
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
            
        <div id='pdf_main' className='pdf_main' style={{width: '1024px', height: '400px', overflow: 'auto', display:"flex",
        justifyContent: "center"
      }} >
        <Document
        file={"Pdf/test"+location.state+".pdf"}
        onLoadSuccess={onDocumentLoadSuccess}                
        >

        <Page 
          height={400}
          width={800}
          pageNumber={pageNumber} 
          renderTextLayer={false}
            onClick={onCapture}
        />
      </Document>
      </div>
      
      <div className="active1">                
                    개사진                 
            </div>
      <p className='pageNumber' style={{display: "flex", justifyContent:"center", color:"rgb(173, 141, 214)"}}>      	
        <span onClick={()=> pageNumber > 1 ? 
            setPageNumber(pageNumber-1):null}
            style={{fontSize:"30px"}}
            >
            <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <span
        style={{ marginLeft:"20px",color:"rgb(173, 141, 214)",fontSize:"30px"
        }}
        >
         {pageNumber} of {numPages}</span>
       	
        <span
        style={{marginLeft:"20px",color:"rgb(173, 141, 214)",fontSize:"30px"}}
        onClick={()=> pageNumber < numPages ? setPageNumber(pageNumber+1):null}>
        <FontAwesomeIcon icon={faArrowRight}/>
        </span>
      </p>
      
      

    </Container>
    
  );
}