import React from 'react';

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="flex overflow-hidden mb-3 flex-col gap-4 mt-4 w-full rounded-lg border-1  border-solid  shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
      <div
        className="flex  gap-5 justify-between items-center px-10 py-1 w-full bg-blue-100  min-w-[400px] max-md:px-5 max-md:max-w-full cursor-pointer"
        onClick={onClick}
      >
        <h2 className=" z-10  text-xl font-semibold tracking-tighter text-blue-800 min-w-[240px] w-[807px] max-md:max-w-full">
          {question}
        </h2>
        <button
          className="hidden sm:flex w-10 h-10 text-3xl font-black  items-center justify-center text-center text-white bg-violet-950 rounded-full"
          aria-label="Toggle answer"
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && (
        <div className="flex  gap-1.5 px-10 py-0.5 mb-2  text-xl font-normal  bg-white w-[900px] text-violet-950  max-md:max-w-full">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FAQItem;
