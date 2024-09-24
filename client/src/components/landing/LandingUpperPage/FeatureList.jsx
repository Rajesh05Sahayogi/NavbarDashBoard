import React from 'react';

const features = [
  "All-in-One Solution",
  "100% Data Security",
  "User-Friendly Interface",
  "Real-Time Insights",
  "Seamless Integration"
];

function FeatureList() {
  return (
    <div className="hidden lg:flex flex-col w-full text-center items-center ">
      <ul className=" list-disc text-lg font-semibold tracking-tight leading-10 text-blue-800 max-md:mt-10 xl:text-[20px]">
        {features.map((feature, index) => (
          <li key={index} className="mb-6">{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeatureList;