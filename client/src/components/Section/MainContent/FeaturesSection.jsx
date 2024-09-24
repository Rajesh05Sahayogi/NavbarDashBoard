import * as React from "react";
import FeatureCard from "./FeatureCard.jsx";

const features = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/116cc6215def10a7224a183950de1db19d3742b370544fbbf82e51eb8d024401?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae",
    title: "Sales",
    description: "Lorem ipsum dolor sit amet consectetur. Mi egestas ut sit nulla molestie a sem integer erat. Sed sed amet arcu eget aliquet. Read More",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/09d6501788ef4d6c8e1a244cfdf5fe2761b80f6588ee3da0962e3c71b022a407?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae",
    title: "Marketing",
    description: "Lorem ipsum dolor sit amet consectetur. Mi egestas ut sit nulla molestie a sem integer erat. Sed sed amet arcu eget aliquet. Read More",
  },
  {
    image: "http://b.io/ext_7-",
    title: "Finance",
    description: "Lorem ipsum dolor sit amet consectetur. Mi egestas ut sit nulla molestie a sem integer erat. Sed sed amet arcu eget aliquet. Read More",
  },
];

function FeaturesSection() {
  return (
    <section className="flex overflow-hidden flex-col -mt-10 text-center bg-white rounded-none max-md:max-w-full">
      <div className="flex flex-col justify-center px-20 py-28 bg-blue-800 rounded-none fill-blue-800 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <header className="flex flex-col -mb-6 max-md:mb-2.5 max-md:max-w-full">
          <h2 className="self-center text-6xl font-bold tracking-tighter text-white max-md:max-w-full max-md:text-4xl">
            Functional Areas
          </h2>
        </header>
        <div className="flex overflow-hidden flex-wrap gap-10 items-center mt-20 max-md:mt-10 max-md:max-w-full">
          {features.map(({ image, title, description }) => (
            <FeatureCard key={title} image={image} title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;