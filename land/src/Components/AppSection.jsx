import React from 'react';

function AppSection({ title, height }) {
  const apps = Array(11).fill(null); // This creates 11 placeholder apps

  return (
    <section className="w-full max-md:max-w-full">
      <h2 className="self-stretch mt-1 text-lg font-semibold leading-9 text-black">{title}</h2>

      {/* Make this container horizontally scrollable */}
      <div className="flex overflow-x-auto flex-nowrap gap-9 items-start mt-2 max-w-full hide-scrollbar">
        {apps.map((_, index) => (
          <div
            key={index}
            className="flex self-stretch my-auto bg-white rounded-2xl shadow-xl min-w-[120px] w-[128px] md:min-w-[240px] md:w-[248px]"
            style={{ height }}
          />
        ))}
      </div>
    </section>
  );
}

export default AppSection;


