import React from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[460px] py-2 pb:xl w-[500px] bg-blue-100 rounded-none sm:rounded-[0px_100px_100px_0px]">
      
      * <div className="flex flex-col justify-between items-center ">
          <img loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/da58bdfab67d41919c53616c45c08aad33ec415dbe3d16ad63adf9e9ddf2546d?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae" alt="Contact illustration" className="object-contain max-w-full aspect-[1.15] w-[250px]" />
       </div>
        <div className="flex flex-col mt-3 max-w-full">
            <div className='flex gap-6 self-start text-sm font-bold tracking-tighter whitespace-nowrap'>
              <IoLocationSharp className='text-violet-950 text-xl'/>
              <address className="not-italic ex gap-6 self-start mt-1 text-sm font-semibold tracking-tight whitespace-nowrap text-violet-950">Noida, Sector - 3 , 201301, India</address>
            </div>
            <div className='flex gap-6 self-start text-sm font-semibold tracking-tighter whitespace-nowrap'>
              <FaPhoneAlt className='text-violet-950 text-xl'/>
              <a href="tel:+919910860018" className="ex gap-6 mt-1 text-sm font-semibold tracking-tight whitespace-nowrap text-violet-950 self-start">+ 91 99108 60018</a>
            </div>
      
            <div className="flex gap-6 self-start mt-1 text-xl font-bold tracking-tight      whitespace-nowrap text-violet-950">
              <IoIosMail className='text-violet-950 text-xl'/>
              <a href="mailto:info@officesahayogi.com" className="basis-auto font-semibold text-sm">info@officesahayogi.com</a>
           </div>
       </div>
       <div className=" flex gap-3 justify-center mt-2 max-md:mt-10">
          <a href="#" aria-label="Facebook">
          <RiFacebookBoxFill color='blue' className='text-4xl shadow-xl'/>
          </a>
          <a href="#" aria-label="Twitter" className=' h-9 w-9' >
            <FaSquareTwitter color="blue" className='text-4xl shadow-xl'/>
          </a>
          <a href="#" aria-label="Instagram" className=' h-9 w-9'>
          <FaSquareInstagram color="red" className='text-4xl shadow-xl' />
          </a>

          <a href="#" aria-label="LinkedIn">
           <FaLinkedin color="blue" className='text-4xl shadow-xl'/>
            </a>
        </div>
    </div>
  );
};

export default ContactInfo;