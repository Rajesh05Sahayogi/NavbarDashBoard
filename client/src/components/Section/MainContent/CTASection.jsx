import * as React from "react";
import './CTASection.css'; // Import the CSS file
import HeroSection from "./HeroSection";

function CTASection() {
  return (
    <section className="cta-background relative z-10 mt-0 w-full">
      <HeroSection /> {/* Hero section at the top */}
      <div className="background-image"></div> {/* Background Image */}
      <div className="content-container flex gap-5 max-md:flex-col relative z-20">
        <div className="flex flex-col w-[33%] max-md:w-full">
          <div className="flex flex-col mt-14 text-2xl tracking-tight max-md:mt-10">
            <p className="font-medium leading-10 text-blue-800">
              Empower your team with Office Sahayogi - your partner in innovative business automation. Collaborate smarter,
              work faster, and achieve more in a seamless digital workspace designed for modern success.
            </p>
            <button className="cta-button mt-10 max-md:mt-4">
              GET STARTED
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[44%] max-md:w-full">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1ed85d27162498c99ab56fe8675d236d448ef738f04824d74e050e842ab1054?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae" 
            alt="Office Sahayogi" 
            className="content-image object-contain grow w-full max-md:max-w-full" 
          />
        </div>
        <div className="flex flex-col w-[23%] max-md:w-full">
          <div className="text-2xl font-medium tracking-tight leading-10 text-blue-800 max-md:mt-4">
            All-in-One Solution <br /> <br /> 100% Data Security <br /> <br /> User-Friendly Interface <br /> <br /> Real-Time Insights <br />
            <br /> Seamless Integration
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
