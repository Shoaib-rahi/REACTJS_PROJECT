import React from "react";

function Header() {
  return (
   <>
   <div className="w-full fixed h-screen z-[2]"> 
     <h4 className="w-full h-20 absolute top-10 items-center font-semibold text-zinc-700 flex justify-center text-[1.6rem]">
          Documents
        </h4>
        <h1 className="text-[12rem] font-semibold text-zinc-900 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Docs.
        </h1>
        </div>
  
   </>
  );
}

export default Header;
