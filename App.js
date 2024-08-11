import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Profile from './Screen/Profile';
import Skills from './Screen/Skills';
import Education from './Screen/Education';

function App() {
  return (
    <body>
      <div>
        <BrowserRouter>
         <div className='App'>
          <div className='Header'>
            <div className='Title'>
              Mrudav Mehta
            </div>
            <div className='First_Header'>
              <div><Link to="/">Personal Profile</Link></div>
              <div><Link to="/Education">Education</Link></div>
              <div><Link to="/Skills">Skills</Link></div>
            </div>
          </div>
        <div className='Links'>
        <p><a href='https://www.linkedin.com/in/mrudav/'>LinkedIn</a> | <a href='https://github.com/mrudavmehta'>GitHub</a> | <a href='https://instagram.com/mrudavmehta'>Instagram</a> | <a href='mailto:mrudav.bs21don042@spjain.org'>Email</a></p>
        </div>
          <Routes>
            <Route path='/' exact={true} element={<Profile/>}/>
            <Route path='/Skills' element={<Skills/>}/>
            <Route path='/Education' element={<Education/>}/>
          </Routes>
        </div>
        </BrowserRouter>
        
        </div>
    </body>
  );
}

export default App;
