import React from 'react';
import ContactFom from './ContactForm';
import InfoContact from './InfoContact';

const ContactMain = () => {
  return (
    <div className='flex flex-grow h-full'>
      {/* Left Section */}
      <div className='w-full lg:flex-1 bg-[#D3E8FD] flex items-center justify-center lg:justify-end  lg-[1024]:py-5'>
        <div className='bg-white h-full flex  lg:h-[450px] lg:rounded-l-[50px] shadow-lg w-full mx-4 lg:ml-8 lg:mr-0 '>
        <ContactFom />
        </div>
      </div>
      {/* Right Section */}
      <div className='hidden lg:flex flex-1 bg-background items-center justify-start lg-[1024]:py-5'>
        <div className='bg-[#D3E8FD] h-[450px] rounded-r-[50px] shadow-lg w-full mr-8'>
          <InfoContact />
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
