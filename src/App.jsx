import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Caption from './Page/caption';
import PdfMain from './Page/Pdf_main';
import PdfDetail from "./Page/Pdf_detail";
import Loginbtn from './components/Loginbtn';
import Selectpage from './Page/Select_page';
import Homebtn from './components/Homebtn';

function App() {
  return (
    <div className="App">
       
      <div className='Header'>
        <Homebtn />
        <Loginbtn/>
      </div>     
      <div className='container'>
          <Routes>
            <Route path='/' 
            element={<Selectpage/>}/>
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
