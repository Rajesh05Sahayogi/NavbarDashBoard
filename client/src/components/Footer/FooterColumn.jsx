import React from 'react';

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col  text-xs   w-[130px] justify-evenly">
      <h3 className="text-sm md:text-[1px] lg:font-bold tracking-tight">{title}</h3>
      {links.map((link, index) => (
        <a key={index} href="#" className="mt-1.5 leading-none hover:text-amber-200">
          {link}
        </a>
      ))}
    </div>
  );
}

export default FooterColumn;