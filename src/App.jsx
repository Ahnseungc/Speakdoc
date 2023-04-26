import './App.css';
import Sidebar from './components/sidebar/sidebar';
import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Caption from './Page/caption';
import PdfMain from './Page/Pdf_main';
import PdfDetail from "./Page/Pdf_detail";
import Loginbtn from './components/Loginbtn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Loginbtn/>
      <div className='container'>
      <Sidebar />
          <Switch>
            <Route path='/home' component={PdfMain}/>
            <Route path='/caption' component={Caption}/>
            <Route path='/pdf' component={PdfDetail} />
          </Switch>        
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
