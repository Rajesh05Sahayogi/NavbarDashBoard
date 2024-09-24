import React from "react";
import TestimonialCard from "./TestimonialCard";
import HeroSection from "./HeroSection";
import TestimonialsSection from "./TestimonialsSection";

function MyComponent() {
  return (
    // <div className="flex flex-col items-end px-20 max-md:pl-5">
    //   <div className="flex overflow-hidden flex-col max-w-full bg-white w-[1512px]">
     
     <div className="flex flex-col items-center sm:px-1 ">
      <div className="flex flex-col bg-white w-full "> 
        <HeroSection />
        <TestimonialsSection />
      </div>
    </div>
  );
}

export default MyComponent;