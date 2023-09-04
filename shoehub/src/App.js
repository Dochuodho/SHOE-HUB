
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Rout from './components/Rout';
import { useState } from 'react';

import "./index.css";

function App() {
  const [show, setShow] = useState(true);
 


  return (

    <>
    <BrowserRouter>
  
    <Navbar setShow={setShow}/>
    <Rout />
    
    </BrowserRouter>
    
     
     
    </>
  );
}

export default App;
