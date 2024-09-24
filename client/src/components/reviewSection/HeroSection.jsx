import React from "react";

function HeroSection() {
  return (
    <section className="flex relative flex-col items-center px-5 pt-10  w-full font-semibold text-center text-white  min-h-[320px]  max-md:px-5 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/12c5aa866197cba5a814f1eabbe67eeabdc55dbc20fb33d6861380686ee1ec96?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col max-w-full w-[1244px]">
        <h1 className="self-center text-5xl tracking-tighter max-md:max-w-full max-md:text-3xl">
          OUR MOTO
        </h1>
        <h2 className="mt-7 text-5xl tracking-tighter max-md:max-w-full max-md:text-4xl">
          Streamline, Simplify, Succeed – Your Complete Business Management Solution
        </h2>
      </div>
    </section>
  );
}

export default HeroSection;