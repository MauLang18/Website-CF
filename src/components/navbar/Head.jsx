import React from "react";

const Head = () => {
  return (
    <div className="flex lg:flex-row items-center w-auto h-[121px] bg-white">
      <img
        src="img/logo.png"
        alt="Logo"
        className="md:w-[200px] md:h-[150px] w-[200px] h-[150px] mr-[-30px] ml-[-25px] md:ml-0 md:mr-[500px] mb-4 md:mb-0 flex-shrink-0"
      />
      <div
        className="text-stone-800 ml-[-220px] text-[22px] md:text-lg lg:text-[28px] lg:ml-0 font-black italic text-right flex-shrink-0"
        style={{ fontFamily: "'fuente', sans-serif" }}
      ></div>
    </div>
  );
};

export default Head;
