import React from 'react';

function SearchBar() {
  return (
    <div className="flex  text-lg justify-center gap-2 items-center h-full px-10 py-1 w-[40vw]  mt-1 bg-blue-500  rounded-[100px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/662e8bb4b9116824a1bc61959dadde0c295ce1953c5a48dc474599734cdef213?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae" className="object-contain shrink-0 my-auto w-5 " alt="" />
     
     <div>
      <input type="search " placeholder='Search' className='bg-transparent shrink-0 w-full placeholder:text-white' />
     </div>
    </div>
  );
}

export default SearchBar;

