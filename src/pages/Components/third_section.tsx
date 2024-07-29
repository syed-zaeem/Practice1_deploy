import React from "react";
import styles from "../../styles/third_section.module.css";

const ThirdSectioin = () => {
  return (
    <div className="w-[90%] mx-auto my-16 xl:flex md:my-20">
      <div className="w-full xl:w-[55%]">
        <p className="w-[80%] text-lg md:text-xl lg:text-[22px] font-semibold text-gray-800 sm:w-[70%] md:w-[60%] xl:w-[73%] xl:text-3xl">
          <span className="text-xl lg:text-2xl xl:text-[40px]">
            BASIC/DEPT®
          </span>{" "}
          is a global branding and digital design agency building products,
          services, and eCommerce experiences that turn cultural values into
          company value.
        </p>
          <button
            className={`mt-12 border border-black rounded-full px-8 py-[6px] text-sm font-semibold ${styles.required_button}`}
          >
            SEE THE WORK
          </button>
      </div>
      <div className="w-full xl:w-[45%]">
        <img
          src="/Assets/four.JPG"
          alt="B/D"
          className="w-[62%] ml-[38%] md:w-[65%] md:ml-[35%] xl:w-[100%] xl:h-52 xl:ml-[0px] mt-8 md:mt-12 xl:mt-[-20px]"
        />
      </div>
    </div>
  );
};

export default ThirdSectioin;
