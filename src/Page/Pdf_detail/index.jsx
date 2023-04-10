
import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import html2canvas from 'html2canvas';
import axios from "axios";
import styled from 'styled-components';



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Container = styled.div`
    width: 300px;
    height: 200px;
`;


export default function PdfDetail() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
      
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    console.log(numPages);
  }

       async function postData (data){
        try{
          const res = await axios.post("url",{
            img : data
          });
          console.log(res)
        }
        catch(error) {
          console.log(error);
        }
       }
        const onCapture = () =>{
          console.log('onCapture');
          html2canvas(document.getElementById('pdf_main')).then(canvas=>{
          onSaveAs(canvas.toDataURL('image/png'), 'image-download.png')
          postData(canvas.toDataURL('image/png'))
            })
        
        }

        const onSaveAs =(uri, filename)=>{
          console.log('onSaveAs');
          console.log('uri', uri);
          var link = document.createElement('a');          
          document.body.appendChild(link);
          link.href =uri;
          link.download = filename;
          link.click();
          document.body.removeChild(link);
        }

  return (
        <Container>
        <div id='pdf_main' className='pdf_main' style={{width: '300px', height: '200px', overflow: 'auto', display:"flex",
        justifyContent: "center"
      }} >
      <Document
        file="test.pdf"
        onLoadSuccess={onDocumentLoadSuccess}        
        >
        <Page 
        height={300}
        width={200}
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
        before
        </span>
        <span
        style={{marginLeft:"20px"}}
        >Page {pageNumber} of {numPages}</span>
       	
        <span 
        style={{marginLeft:"20px"}}
        onClick={()=> pageNumber < numPages ? setPageNumber(pageNumber+1):null}>
        next
        </span>
      </p>
    </Container>
  );
}