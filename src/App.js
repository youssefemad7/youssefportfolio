import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Sidenav from './Sidenav';
import Navbar from './Navbar';








function App() {
  

  return (
    <>

        <BrowserRouter>
        <Navbar />
        {/* <Sidenav /> */}


        
          <Routes>

           
            <Route  path="/" element={<Home />} />
            <Route  path="/about" element={<About />} />
            <Route path ="/portfolio" element={<Portfolio />}  />
            <Route path ="/contact" element={<Contact />}  />

            
          </Routes>
          
    </BrowserRouter>
    </>
    
   
   
  );
}

export default App;
