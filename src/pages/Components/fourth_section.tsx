import React from "react";
import styles from "@/styles/fourth_section.module.css";

const FourthSection = () => {
  return (
    <>
      <div
        className={`relative w-[90%] mx-auto flex justify-between space-x-5 overflow-x-scroll scroll-smooth ${styles.hide_scroll_bar}`}
      >
        <div className="w-[70vw] cursor-pointer group">
          <div className="w-[70vw] overflow-hidden h-[90vw] sm:w-[40vw] sm:h-[50vw] xl:w-[28vw] xl:h-[36vw]">
            <img
              src="/Assets/eleven.JPG"
              alt="Image"
              className="scale-105 group-hover:scale-100 h-full w-full transition duration-300"
            />
          </div>
          <h1 className="text-lg font-semibold mt-4 mb-2 group-hover:underline lg:text-[22px] lg:font-bold">
            PATAGONIA
          </h1>
          <p className="text-xs w-32 text-gray-800 md:w-64 lg:w-52 lg:text-sm lg:font-semibold">
            AN ECOMMERCE EXPERIENCE DRIVEN BY PATAGONIA’S BRAND MISSION
          </p>
        </div>
        <div className="w-[70vw] cursor-pointer group">
          <div className="w-[70vw] overflow-hidden h-[90vw] sm:w-[40vw] sm:h-[50vw] xl:w-[28vw] xl:h-[36vw]">
            <img
              src="/Assets/ten.JPG"
              alt="Image"
              className="scale-105 group-hover:scale-100 h-full w-full transition duration-300"
            />
          </div>
          <h1 className="text-lg font-semibold mt-4 mb-2 group-hover:underline lg:text-[22px] lg:font-bold">
            WILSON
          </h1>
          <p className="text-xs w-32 text-gray-800 md:w-64 lg:w-52 lg:text-sm lg:font-semibold">
            A CENTURY-OLD SPORTS BRAND FINDING ITS PLACE IN CULTURE
          </p>
        </div>
        <div className="w-[70vw] cursor-pointer group">
          <div className="w-[70vw] overflow-hidden h-[90vw] sm:w-[40vw] sm:h-[50vw] xl:w-[28vw] xl:h-[36vw]">
            <img
              src="/Assets/twelve.JPG"
              alt="Image"
              className="scale-105 group-hover:scale-100 h-full w-full transition duration-300"
            />
          </div>
          <h1 className="text-lg font-semibold mt-4 mb-2 group-hover:underline lg:text-[22px] lg:font-bold">
            GOOGLE STORE
          </h1>
          <p className="text-xs w-32 text-gray-800 md:w-64 lg:w-52 lg:text-sm lg:font-semibold">
            AN ECOMMERCE EXPERIENCE HELPING GOOGLE BRING ITS HARDWARE TO PEOPLE
            ACROSS THE GLOBE
          </p>
        </div>
      </div>

      <hr className="border-sm border-black w-[90%] md:w-[90%] mx-auto my-32" />
    </>
  );
};

export default FourthSection;
