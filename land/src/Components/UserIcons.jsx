import React from 'react';

function UserIcons() {
  return (
    <div className="flex flex-wrap md:ml-10 items-center justify-center gap-5 ">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f77842ee0f288243e66f741f4296e3e2d74de860f1e07b7e5da2a8e94c15ac43?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae" className="object-contain shrink-0 self-stretch my-auto aspect-[1.13] w-[2rem]" alt="User icon 1" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c304e775ba208186b07246994392e1e404d750969286b9d8c054c5fe1860fa7?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae" className="object-contain shrink-0 self-stretch my-auto w-[1rem] aspect-[0.93]" alt="User icon 2" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c49d7923e2a2a415540cb29de40eb1d2ae262e1341133cb698474fb4546f827?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae" className="object-contain shrink-0 self-stretch my-auto aspect-[0.87] w-[1rem]" alt="User icon 3" />
      <div className="self-stretch  my-auto bg-blue-300 rounded-full w-6 h-6 text-xs p-2 flex items-center justify-center">
        DS
      </div>
    </div>
  );
}

export default UserIcons;