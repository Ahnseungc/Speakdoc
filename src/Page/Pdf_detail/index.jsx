import Homebtn from '../../components/Homebtn';
import React, { useEffect, useState, useRef } from 'react';
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
import dog from '../../speekdoc.png';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Container = styled.div`
    width: 100%;
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
        width: 150px;
        top: 530px;
        left: 900px;
        position: fixed;                
        float: right;
        background-color: white;
        opacity: 1;
        transition: 0.5s ease-in-out;
        z-index: 99;        
      }
      & .active1 img{
        width: 150px;
        height: 150px;
      }     
      & .active1 img:hover{
        transition: 0.5s ease-in-out;        
        width: 170px;
        height: 170px;
      }
      

    
`;


export default function PdfDetail(props) {

  const [clickcount, setClickcount] = useState(0);
  const dispatch = useDispatch();
  let location = useLocation();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [translation,setTranslation] = useState([]);
  const [image,setImage]= useState([]);
  
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
           "pageIndex" : pageNumber-1,
           "documentId" : 1
          });
          console.log(res.data.text);
          setTranslation(res.data.text);
          setImage(res.data.picture);
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
          setClickcount(clickcount+1);          
          })
                    
        }
        useEffect(()=>{
          console.log(translation);
          console.log(clickcount)
          if(clickcount===1){
            getSpeech(translation);
          }
          else{
            setClickcount(0);
            if(image.length!==0){
              getSpeech(`이미지는 ${image.length}개 있습니다`);
              getSpeech(image);
            }
            else{
              getSpeech("이미지가 없습니다.")
            }
          }
          
        },[translation])
        

  return (
    
        <Container>
            
        <div id='pdf_main' className='pdf_main' style={{width: '100%', height: '600px', overflow: 'auto', display:"flex",
        justifyContent: "center"
      }} >
        <Document
        file={"Pdf/test"+12+".pdf"}
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
      
      <div className="footer">
      <div className="active1">                
        <img src={dog} alt="" />               
      </div>
      <p className='pageNumber' style={{display: "flex", justifyContent:"center", color:"rgb(173, 141, 214)", marginBottom:"100px"}}>      	
        <span onClick={()=> pageNumber > 1 ? 
            setPageNumber(pageNumber-1):null}
            style={{fontSize:"50px"}}
            >
            <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <span
        style={{ marginLeft:"20px",color:"rgb(173, 141, 214)",fontSize:"50px"
        }}
        >
         {pageNumber} of {numPages}</span>
       	
        <span
        style={{marginLeft:"20px",color:"rgb(173, 141, 214)",fontSize:"50px"}}
        onClick={()=> pageNumber < numPages ? setPageNumber(pageNumber+1):null}>
        <FontAwesomeIcon icon={faArrowRight}/>
        </span>
      </p>
      </div>
      
      

    </Container>
    
  );
}