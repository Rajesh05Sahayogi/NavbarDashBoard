import React from "react";

function TestimonialCard({ text }) {
  return (
    <article className="flex flex-col  self-stretch px-0 py-0 my-auto shadow-md  bg-blue-200  min-w-[250px] lg:min-w-[370px] rounded-[60px] w-[391px]">
      <div className="flex flex-col justify-center items-center self-center px-2 bg-blue-900 h-[190px] rounded-[190px] w-[190px]">
       
        <div className="flex shrink-0 w-full h-44 bg-blue-300 rounded-full" />
      </div>

      <p className="mt-2 text-lg font-medium tracking-tight leading-6 text-center text-blue-900">
        {text}
      </p>
      <h4 className="mt-2 text-2xl font-semibold tracking-tight text-center text-violet-950">
        <span className="text-3xl">ABC</span> OS USER
      </h4>
    </article>
  );
}

export default TestimonialCard;