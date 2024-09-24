import React from 'react';
import ProductCard from './ProductCard';

function ProductsSection() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center p-1 sm:p-15 bg-white ">
      <div className="flex flex-col w-full  max-w-[1278px] max-md:max-w-full">
        <h1 className="self-center text-3xl font-bold tracking-tighter text-center text-blue-800 max-md:max-w-full max-md:text-4xl">
          Our Current Products
        </h1>
        
        <div className="flex flex-wrap w-full gap-16 items-center justify-center mt-10 ">
          {/* {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))} */}
          <ProductCard/>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;