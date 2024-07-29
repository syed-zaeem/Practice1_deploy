import React from "react";
import Image from "next/image";

const SecondSection = () => {
  return (
    <div className="">
      <div className="cursor-pointer flex w-[90%] mx-auto lg:px-[10%] justify-between my-20 md:my-28 lg:my-32">
        <div className="group w-[30%] sm:w-[26%] md:w-[22%] lg:w-[22%]">
          <img src="/Assets/one.JPG" alt="AdAge" className="w-full h-28 group-hover:scale-110 transition duration-300" />
          <p className="group-hover:underline text-[10px] md:text-[13px] lg:text-[14px] text-slate-900 text-center my-2">DESING AND BRANDING AGENCY OF THE YEAR</p>
        </div>
        <div className="group w-[30%] sm:w-[26%] md:w-[22%] lg:w-[22%]">
          <img src="/Assets/two.JPG" alt="AdAge" className="w-full h-28 group-hover:scale-110 transition duration-300" />
          <p className="group-hover:underline text-[10px] md:text-[13px] lg:text-[14px] text-slate-900 text-center my-2">AGENCY OF THE YEAR</p>
        </div>
        <div className="group w-[30%] sm:w-[26%] md:w-[22%] lg:w-[22%]">
          <img src="/Assets/three.JPG" alt="AdAge" className="w-full h-28 group-hover:scale-110 transition duration-300" />
          <p className="group-hover:underline text-[10px] md:text-[13px] lg:text-[14px] text-slate-900 text-center my-2">DIGITAL INNOVATION AGENCY OF THE YEAR FINALIST</p>
        </div>
      </div>
      <hr className="border-sm border-black w-[90%] md:w-[90%] mx-auto" />
    </div>
  );
};

export default SecondSection;
