
import React from 'react';

function FavoriteOptions() {
  const categories = ['Favorites', 'Recently Used', 'Frequently Used'];
  const options = Array(9).fill('Option 1');

  return (
     <div className="flex  overflow- flex-wrap   bg-blue-100  p-1 md:pl-2 rounded-xl flex-col mt-0 w-full text-center max-md:max-w-full">
        {/* Categories */}


        <div className="flex  gap-2 lg:gap-4 items-center mt-0 self-start  text-xs md:text-sm font-semibold leading-4 text-violet-950 max-md:max-w-full">
          {categories.map((category, index) => (
            <div key={index} className="gap-2.5 self-stretch px-2.5 shadow-lg py-1.5 my-auto whitespace-nowrap bg-blue-100 rounded-xl">
            {category}
          </div>
        ))}
       </div>


      {/* Horizontal Scrollable Options */}
      <div className="flex  gap-2 md:gap-5 overflow-x-auto flex-nowrap items-start mt-3 w-full text-sm leading-6 hide-scrollbar">
        {options.map((option, index) => (
          <div key={index} className="flex gap-1.5 items-center min-w-[87px] md:min-w-[120px] my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba9f44ed3341c65d6f2e7dee3fdbac3ec2ac640dc2e64d801e996d2c915030d4?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae"
              className="object-contain shrink-0 aspect-square w-[18px]"
              alt=""
            />
            <div>{option}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteOptions;
