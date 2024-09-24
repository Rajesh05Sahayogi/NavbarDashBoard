import * as React from "react";

function FeatureCard({ image, title, description }) {
  return (
    <article className="rounded-[60px] shadow-[var(--sds-size-depth-0_var(--sds-size-depth-025)_var(--sds-size-depth-100)_var(--sds-size-depth-0)_var(--sds-color-black-100);background-color:#FFF;align-self:stretch;display:flex;min-width:240px;margin-top:auto;margin-bottom:auto;padding-top:13px;padding-bottom:30px;flex-direction:column;align-items:stretch;flex-grow:1;flex-shrink:1;width:313px;]">
      <div className="flex flex-col px-7 text-2xl font-semibold tracking-tight whitespace-nowrap text-violet-950 max-md:px-5">
        <img loading="lazy" src={image} alt={title} className="object-contain w-full aspect-[1.44]" />
        <h2 className="self-center mt-3">{title}</h2>
      </div>
      <p className="self-center mt-1.5 text-lg font-medium tracking-tight leading-6 text-blue-800">
        {description}
      </p>
    </article>
  );
}

export default FeatureCard;