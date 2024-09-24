import React from 'react';
import FavoriteOptions from './FavoriteOptions';
import AppSection from './AppSection';

function MainContent() {
  return (
    
    <main className="flex flex-col  bg-violet-50 items-start w-full mt-[35px] p-3 lg:w-full max-md:max-w-full">
      <div className="flex flex-col w-full p-3 bg-blue-100  rounded-3xl shadow ">
        <FavoriteOptions />
      </div >
      <AppSection title="Apps" height="131px" />
      <AppSection title="Apps"  height="325px" />
      <AppSection title="Apps" height="131px" />
      <AppSection title="Apps"  height="325px" />
    </main>
  );
}

export default MainContent;
