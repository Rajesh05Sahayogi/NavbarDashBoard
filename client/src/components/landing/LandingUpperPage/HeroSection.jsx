import React from "react";
import FeatureList from "./FeatureList";

function HeroSection() {
  return (
    <section className="flex flex-col items-center md:pt-4  w-full bg-blue-100 max-md:px-2 xl:px-10">
      <div className="flex flex-col w-full">
        <div className="flex justify-center item-center">
          <h1 className="self-end text-5xl font-bold tracking-tighter text-center text-blue-800 max-md:max-w-full max-md:text-2xl max-md:font-bold lg:font-extrabold">
            Streamline Your Success: Effortless Automation, Flawless Results
          </h1>
        </div>
        <div className="flex justify-around mt-4 lg:mt-4 flex-col-reverse items-center lg:flex-row ">
          <div  className="flex justify-around mt-4 lg:mt-4 flex-col-reverse items-center lg:flex-row">
          <div className="lg:w-1/4">
            <div>
              <p className="font-extrabold leading-2 md:leading-8 md:text-center text-blue-800 text-center lg:text-left">
                Empower your team with Office Sahayogi - your partner in
                innovative business automation. Collaborate smarter, work
                faster, and achieve more in a seamless digital workspace
                designed for modern success.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="gap-2.5 self-start py-1.5 pr-3 pl-4 mt-10 mb-10 font-bold leading-loose text-center text-white bg-blue-600 rounded-xl min-h-[49px] max-md:mt-10">
                GET STARTED
              </button>
            </div>
          </div>
          <div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/843c1a6537f4c6cb99a1860165d0b496ed55d0b76f14918e3ad16250cdaf78ce?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae"
              alt="Office automation illustration"
              className="object-contain md:h-[24rem] lg:h-[27rem] w-[60vw] sm:w-[50vw] max-md:mt-4 max-md:max-w-full"
            />
          </div>
          <div className="lg:w-1/4">
            <FeatureList />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
{
  /* <div className="md:mt-2 w-full flex md:mx-4 ">
          <div className="flex w-full items-start justify-around flex-col-reverse lg:flex-row gap-5">
            <div className="mt-4 lg:mt-20 flex flex-col justify-center lg:justify-start items-center lg:items-start w-full lg:w-[33%] max-md:ml-0 max-md:w-full max-lg:p-4">
              <p className="font-semibold leading-2 md:leading-8 md:text-center text-blue-800 text-center lg:text-left">
                Empower your team with Office Sahayogi - your partner in
                innovative business automation. Collaborate smarter, work
                faster, and achieve more in a seamless digital workspace
                designed for modern success.
              </p>
              <div className="flex items-center w-full justify-center lg:justify-start">
                <button className="gap-2.5 self-start py-1.5 pr-3 pl-4 mt-10 mb-10 font-bold leading-loose text-center text-white bg-blue-600 rounded-xl min-h-[49px] max-md:mt-10">
                  GET STARTED
                </button>
              </div>
            </div>

            {/* Content that should be hidden in medium screens and visible in small and large screens */
}
// <div className="flex md:mt-10 lg:mt-10 items-center justify-center w-full md:h-96 lg:w-[25vw] max-lg:justify-around">
//   {/* Left List (Visible only on medium screens) */}
//   <ul className="hidden md:flex lg:hidden flex-col text-xl text-blue-800 font-bold self-end list-disc list-inside">
//     <li>All-in-One Solution</li>
//     <li>100% Data Security</li>
//     <li>User-Friendly Interface</li>
//   </ul>

//   {/* Image (Visible on all screens) */}
//   <img
//     loading="lazy"
//     src="https://cdn.builder.io/api/v1/image/assets/TEMP/843c1a6537f4c6cb99a1860165d0b496ed55d0b76f14918e3ad16250cdaf78ce?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae"
//     alt="Office automation illustration"
//     className="object-contain md:h-[24rem] w-[60vw] sm:w-[50vw] max-md:mt-4 max-md:max-w-full"
//   />

//   {/* Right List (Visible only on medium screens) */}
//   <ul className="hidden md:flex lg:hidden flex-col text-xl text-blue-800 font-bold self-end list-disc list-inside">
//     <li>Real-Time Insights</li>
//     <li>Seamless Integration</li>
//   </ul>
// </div>

// <FeatureList />
// </div> */}
