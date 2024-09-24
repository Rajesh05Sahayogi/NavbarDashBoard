import React from "react";
import { Check } from "../icons/Check";
import logo from "./static/img/logo.png"
import lineImg from "./static/img/line-4.svg"
import googlepng from "./static/img/google.png"
import applePng from "./static/img/apple.png"
import MircoSoftPng from "./static/img/microsoft.png"
import vectorSvg from "./static/img/vector.svg"
import lineImg3 from "./static/img/line-3.svg"
import layer7 from "./static/img/layer-7.png"
import loginimg from "./static/img/login-vector.png"
import { Link } from "react-router-dom";


export const LoginFinal = () => {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row w-full  text-white h-full">
        {/* left part of  the page */}
        <div className="w-full lg:w-1/2 bg-blue-500 flex items-center  justify-center lg:justify-end ">
          <div className="w-full h-full  sm:h-screen bg-blue-100 flex items-center justify-center lg:justify-end">
            <div className="w-[100vw]  sm:w-[591px] h-[100vh] sm:h-[85vh] sm:py-10 bg-variable-collection-white rounded-2xl lg:rounded-[100px_0px_0px_100px] ">
             
              <div className="flex flex-col items-center justify-center h-full p-4">
                <Link to="/">
                <img
                  className="w-[160.22px] h-[120.83px] sm:w-[120.22px] sm:h-[90.83px] mb-3"
                  alt="Logo"
                  src={logo}
                />
                </Link>
                <div className="text-dark font-bold text-4xl text-center tracking-[-1.00px] leading-[normal] ">
                  Welcome Back
                </div>
                <div className="text-bright-blue font-bold text-lg text-center tracking-[-0.70px] leading-[normal] mb-2">
                  Sign In
                </div>
                <div className="flex items-center mb-3">
                <img
                    className="w-[100px] h-px"
                    alt="Line"
                    src={lineImg}
                  />

                  <p className="text-variable-collection-grey text-xs text-nowrap font-semibold text-center tracking-[0] leading-[normal] ">
                    OR SIGN IN WITH EMAIL
                  </p>
                  <img
                    className="w-[100px] h-px "
                    alt="Line"
                    src={lineImg}
                  />
                </div>
                <div className="flex  w-full sm:w-[195px] h-[57px] items-center justify-center gap-3 mb-2">
                  <img
                      className="w-16 h-full sm:w-[60.91px] sm:h-[60.91px]"
                    alt="Google"
                    src={googlepng}
                  />
                  <img
                      className="w-16 h-full sm:w-[60.91px] sm:h-[60.91px]"
                    alt="Apple"
                    src={applePng}
                  />
                  <img
                        className="w-16 h-full sm:w-[60.91px] sm:h-[60.91px]"
                    alt="Microsoft"
                    src={MircoSoftPng}
                  />
                </div>
              
                <div className="flex flex-col w-full sm:px-20">
                <div className="flex items-center gap-[11px] px-4 py-2 w-full bg-boxes rounded-xl mb-4">
                  <img
                    className="sm:w-5 sm:h-[15px]"
                    alt="Vector"
                    src={vectorSvg}
                  />
                  <img
                    className="sm:w-px sm:h-[20px] object-cover"
                    alt="Line"
                    src={lineImg3}
                  />
                  <input type="text" className="text-dark text-md font-normal tracking-[-0.48px] leading-[normal] whitespace-nowrap bg-transparent border-none focus:outline-none" placeholder="email"/>
                </div>

                <div className="flex items-center gap-[11px] px-4 py-2 w-full bg-boxes rounded-xl mb-6 sm:mb-4">
                  <img
                    className="h-6 sm:w-4 sm:h-[15px]"
                    alt="Layer"
                    src={layer7}
                  />
                 <img
                    className="sm:w-px sm:h-[20px] object-cover"
                    alt="Line"
                    src={lineImg3}
                  />
                  <input type="password" className="text-dark text-md font-normal tracking-[-0.48px] leading-[normal] whitespace-nowrap bg-transparent border-none focus:outline-none" placeholder="password"/>
                </div>

                </div>
               

                <div className="flex gap-2 sm:flex-row  justify-between items-center w-full  sm:px-24">

                  <div className="flex gap-2 items-center" >
                  <Check className="h-5 w-5 sm:w-4 sm:h-4" />
                  <div className="text-bright-blue  text-xs sm:text-md font-normal tracking-[-0.40px] leading-[normal]">
                    Keep me logged in
                  </div>
                  </div>
                
                  <div className="text-bright-blue  text-xs sm:text-md font-normal tracking-[-0.40px] leading-[normal]">
                    Forgot Password?
                  </div>
                </div>

                <div className="flex items-center justify-center w-[148px] h-[54px] bg-dark rounded-[10px] mt-6">
                  <div className="text-variable-collection-white text-lg font-bold text-center tracking-[-0.64px] leading-[23px] p-1 sm:p-2">
                    Sign In
                  </div>
                </div>
                <div className="border-2"></div>
                
                <div className="flex justify-between items-center w-full sm:px-20 mb-6 mt-7 sm:mt-4">
                  <p className="text-variable-collection-grey text-base font-bold tracking-[0] leading-[normal]">
                    Don’t have an account yet?
                  </p>

                  <Link to="/contact">
                  <div className="text-dark text-base font-bold tracking-[0] leading-[normal]">
                    Contact Us
                  </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>  
        </div>
          {/* rigth part of the page */}
        <div  className="hidden  lg:flex w-full lg:w-1/2 bg-blue-900  items-center justify-start">
          <div className="w-full  sm:w-[591px] h-full sm:h-[85vh]  bg-boxes flex items-start justify-start p-8 rounded-none sm:rounded-[0px_100px_100px_0px]">
            <div className="w-full sm:w-[591px] md:w-[691px] h-full bg-boxes rounded-none sm:rounded-[0px_100px_100px_0px] flex flex-col items-center justify-center">
              <img
                className="w-full h-full sm:h-[561px] object-contain"
                alt="Login vector"
                src={loginimg}
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
