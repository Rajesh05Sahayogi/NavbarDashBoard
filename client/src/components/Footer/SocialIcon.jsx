import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";
function SocialIcons() {
  // const socialIcons = [
  //   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/41f31ba625c995f3919bbce568a42f827ca6ffe1551a0e46591f26879912f9d6?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae", alt: "Social media icon 1" },
  //   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a682de0974c1aeeb11f4f75fbed364ac9dc946d116924df4ba422dc9adbc4ce?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae", alt: "Social media icon 2" },
  //   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1eb1635e67b66ae620dec7104f7c960b0adf55827500591ff6ec11b386d34134?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae", alt: "Social media icon 3" },
  //   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b52e17635230f31db67a13ff56062a1eb4311b1e0d5e9d66af7de8eb35b2318?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae", alt: "Social media icon 4" }
  // ];

  return (
    <div className="flex gap-2 items-center text-white">
      {/* {socialIcons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className="object-contain  self-stretch my-auto w-6 shadow-lg aspect-square"
        />
      ))} */}
      <FaLinkedin/>
      <FaSquareFacebook/>
      <GrInstagram/>
      <FaSquareXTwitter/>
    </div>
  );
}

export default SocialIcons;