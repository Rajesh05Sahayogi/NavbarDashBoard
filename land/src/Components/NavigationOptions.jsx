import React, { useState } from 'react';

function NavigationOptions() {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8'];
  
  // State to track if the dropdown is open
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex flex-wrap justify-between items-center   w-full text-xs font-semibold leading-3 md:justify-betweeni p-2 text-center text-violet-950 max-md:max-w-full">
      {/* Show only the first 2 options on mobile */}
      {options.slice(0, 3).map((option, index) => (
        <div key={index} className="gap-1 self-stretch shadow-lg p-2 my-auto bg-blue-100 rounded-2xl ">
          {option}
        </div>
      ))}

      {/* Show burger menu on mobile */}
      <div className="md:hidden gap-2 self-stretch  p-1.5 my-auto bg-blue-100 rounded-2xl shadow-lg relative">
        <div className="flex flex-col justify-center items-center shadow-lg  w-5 h-4 cursor-pointer" onClick={toggleDropdown}>
          <div className="w-5 h-0.5 bg-black mb-1"></div>
          <div className="w-5 h-0.5 bg-black mb-1"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </div>

        {/* Dropdown for the remaining options */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-3  w-36 bg-white rounded-lg shadow-lg z-20">
            {options.slice(3).map((option, index) => (
              <div
                key={index}
                className="px-2 py-1  text-xs bg-blue-100 rounded-xl hover:bg-blue-200"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hide additional options on mobile, show them on larger screens */}
      {options.slice(3).map((option, index) => (
        <div key={index} className="hidden  shadow-lg md:block gap-1 self-stretch p-2  my-auto bg-blue-100 rounded-2xl ">
          {option}
        </div>
      ))}
    </nav>
  );
}

export default NavigationOptions;
