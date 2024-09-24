import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Form from "./Form";

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full  text-white h-[92vh] ">
        {/* left part of  the page */}
        <div className="w-full lg:w-1/2 bg-blue-200 flex items-center  justify-center lg:justify-end ">
         
            {/* <ContactForm /> */}
            <Form/>
          </div>
      
        {/* rigth part of the page */}
        <div className="hidden  lg:flex w-full lg:w-1/2 bg-blue-900  items-center justify-start">
          <div className="w-full   h-full sm:h-[85vh]   flex items-center justify-start  rounded-none sm:rounded-[0px_100px_100px_0px]">
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
