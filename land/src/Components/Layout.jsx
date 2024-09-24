import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

function Layout() {
  return (
    <div className="flex flex-col bg-violet-50 items-end  pt-20 p-3">
      <Header />
      <MainContent /> 
    </div>
  );
}

export default Layout;