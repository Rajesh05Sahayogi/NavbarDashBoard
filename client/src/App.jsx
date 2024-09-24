  import React, { useState } from 'react';
  import {BrowserRouter , Routes,Route } from 'react-router-dom';
  import ContactPage from './components/ContactUs/ContactPage';
  import LoginPage from './components/pages/LoginPage';
  import LandingPage from './components/pages/LandingPage';
  import Home2 from './components/pages/Home2';
  function App() {

    return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home2 />}>
      <Route index element={<LandingPage/>}/>
      <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
    );
  }

  export default App;
