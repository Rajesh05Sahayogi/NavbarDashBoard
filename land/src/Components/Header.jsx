import React from "react";
import SearchBar from "./SearchBar";
import UserIcons from "./UserIcons";
import NavigationOptions from "./NavigationOptions";
import logo from "../assets/Robotb.png";

function Header() {
  return (
    <header className="flex flex-col gap-10  lg:gap-60  p-2  z-10 bg-violet-50 w-full fixed top-0 left-0 right-0 m-0 ">
      <div className="flex gap-3  bg-violet-50 items-center justify-center w-full  ">
        <div className="w-20 h-20 flex items-center justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d38250992c8084e19ebcefb5b622a484b0f2fa0be22b2f8f9cf0a562a8b77e04?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae"
            className="w-16"
            alt="Logo"
          />
        </div>
        <div className="flex flex-col md:p-2 md:w-full">
          <div className="flex flex-col md:w-full">

            <div className="flex  justify-center items-end md:w-full">
              <div className="flex  gap-1 h-full pr-3  lg:justify-end md:w-full    min-w-20    text-xl font-medium leading-9 text-white ">
                <SearchBar />
              </div>

              <div className="flex flex-wrap gap-2  justify-end md:pl-15 md:ml-10 items-center sm:items - w-full  max-w-full text-sm font-medium leading-5 text-white whitespace-nowrap">
                <UserIcons />
              </div>
            </div>

            <NavigationOptions />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
