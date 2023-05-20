import './App.css';
import React,{useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Caption from './Page/caption';
import PdfMain from './Page/Pdf_main';
import PdfDetail from "./Page/Pdf_detail";
import Homebtn from './components/Homebtn';
import Sidebar2 from './components/sidebar2';
import { useSelector } from 'react-redux';

function App() {
  
    
  return (
    <div className="App">
      <div className='Header'>
        <Homebtn />        
      </div>     
      <div className='container'>
      <Sidebar2>최근 목록</Sidebar2>
          <Routes>
            <Route path='/' 
            element={<PdfMain/>}/>
            <Route path='/caption'
            element={<Caption/>}/>
            <Route path='/pdf'
            element={<PdfMain/>}
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
