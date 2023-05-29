import './App.css';
import React,{useState,useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
// import StartPage from './Page/StartPage';

import PdfDetail from "./Page/Pdf_detail";
import Homebtn from './components/Homebtn';
import Sidebar from './components/sidebar2';
import PDFMAIN2 from './Page/PDF_MAIN_Page';
import Inputbtn from './components/Inputbtn';
// import { useSelector } from 'react-redux';
import StartPage from './Page/StartPage';
import { Link } from 'react-router-dom';

function App() {
      
  return (
    <div className="App">
      <div className='Header'>
      <Inputbtn/>
      <Homebtn />
      </div> 
       <hr/>      
      <div className='container'>                 
      <Sidebar><h1>최근 목록</h1></Sidebar>
      
          <Routes>
            <Route
            path='/'
            element={<StartPage/>}
            >
              
            </Route>
            <Route path='/pdf'
            element={<PDFMAIN2/>}
            > 
            </Route>
            <Route path='/pdfdetail'
            element={<PdfDetail/>}
            > 
            </Route>

          </Routes>   

           
      </div>
     
    </div>
  );
}

export default App;
