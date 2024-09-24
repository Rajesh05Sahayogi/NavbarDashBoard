import React from "react";
import TestimonialCard from "./TestimonialCard";

function TestimonialsSection() {
  const testimonials = [
    { id: 1, text: "Lorem ipsum dolor sit amet consectetur. Etiam tristique dapibus ut orci in in sagittis tortor libero. Viverra et non nulla ultricies arcu dui turpis. Mi massa vitae cras odio. Lectus aliquam ultricies praesent sed eleifend laoreet dignissim." },
    { id: 2, text: "Lorem ipsum dolor sit amet consectetur. Etiam tristique dapibus ut orci in in sagittis tortor libero. Viverra et non nulla ultricies arcu dui turpis. Mi massa vitae cras odio. Lectus aliquam ultricies praesent sed eleifend laoreet dignissim." },
    { id: 3, text: "Lorem ipsum dolor sit amet consectetur. Etiam tristique dapibus ut orci in in sagittis tortor libero. Viverra et non nulla ultricies arcu dui turpis. Mi massa vitae cras odio. Lectus aliquam ultricies praesent sed eleifend laoreet dignissim." },
    { id: 4, text: "Lorem ipsum dolor sit amet consectetur. Etiam tristique dapibus ut orci in in sagittis tortor libero. Viverra et non nulla ultricies arcu dui turpis. Mi massa vitae cras odio. Lectus aliquam ultricies praesent sed eleifend laoreet dignissim." },
    { id: 5, text: "Lorem ipsum dolor sit amet consectetur. Etiam tristique dapibus ut orci in in sagittis tortor libero. Viverra et non nulla ultricies arcu dui turpis. Mi massa vitae cras odio. Lectus aliquam ultricies praesent sed eleifend laoreet dignissim." },
    { id: 6, text: "Lorem ipsum dolor sit amet consectetur. Etiam tristique dapibus ut orci in in sagittis tortor libero. Viverra et non nulla ultricies arcu dui turpis. Mi massa vitae cras odio. Lectus aliquam ultricies praesent sed eleifend laoreet dignissim." },
    { id: 7, text: "Lorem ipsum dolor sit amet consectetur. Etiam tristique dapibus ut orci in in sagittis tortor libero. Viverra et non nulla ultricies arcu dui turpis. Mi massa vitae cras odio. Lectus aliquam ultricies praesent sed eleifend laoreet dignissim." }
  ];

  return (

    <section className="flex flex-col items-center p-10 bg-blue-800 rounded-none fill-blue-800 w-full max-md:px-5 sm:h-full max-md:max-w-full">
  <h2 className="text-3xl font-bold tracking-tighter text-center text-white">
    Testimonials
  </h2>
  <h3 className="mt-2 text-5xl font-bold tracking-tighter text-center text-white max-md:max-w-full max-md:text-4xl">
    Customers Review
  </h3>
  
  <div className="flex overflow-x-auto gap-7 justify-start items-center self-stretch mt-5 min-h-[610px] max-md:mt-5 max-md:max-w-full no-scrollbar snap-x snap-mandatory">
    {testimonials.map((testimonial) => (
      <TestimonialCard key={testimonial.id} text={testimonial.text} />
    ))}
  </div>
</section>

  );
}

export default TestimonialsSection;
