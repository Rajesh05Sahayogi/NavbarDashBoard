import React from "react";

function NavItem({ label, hasDropdown }) {
  return (
    <div className="flex gap-1 items-center">
      <div className=" my-auto text-white font-bold md:text-[0.70rem] lg:text-lg ">{label}</div>
      {hasDropdown && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/65ae8b96c06175163303dd02d0e96c417ac82f668d4715ad53d1f5e635afdfb3?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae"
          alt=""
          className="object-contain shrink-0 my-auto w-3 aspect-[1.72]"
        />
      )}
    </div>
  );
}

export default NavItem;
