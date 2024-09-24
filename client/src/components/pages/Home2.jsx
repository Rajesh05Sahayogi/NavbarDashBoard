import React from 'react';
import Navbar from '../Navbar2/Navbar';
import ContactMain from '../UpdatedContact/ContactMain';
import { Outlet } from 'react-router-dom';
// import FunctionalSec from '../FuctionalCOM/FunctionalSec';

const Home2 = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="h-16 shadow-sm shadow-blue-200 z-10 w-full">
        <Navbar />
      </div>
      {/* Main Content */}
      <div className="flex flex-col flex-grow bg-background w-full">
        {/* Uncomment and use Outlet or FunctionalSec if needed */}
        {/* <Outlet /> */}
        <ContactMain/>
        {/* <FunctionalSec /> */}
      </div>
    </div>
  );
};

export default Home2;
