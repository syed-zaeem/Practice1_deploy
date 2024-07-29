import React from "react";
import styles from "@/styles/fifth_section.module.css"

const FifthSection = () => {
  return (
    <>
    <h1 className="ml-[5%] text-2xl font-bold w-[40%] md:text-3xl md:w-[60%] mb-12 lg:text-5xl lg:font-semibold lg:w-[30%] md:mb-20">FEATURED ENGAGEMENTS</h1>
      <div className={`relative w-[90%] mx-auto flex justify-between space-x-6 sm:space-x-5 lg:space-x-[84px] pb-20 overflow-x-scroll scroll-smooth ${styles.custom_scrollbar}`}>
        <div className="w-[75%] sm:w-[45%] md:w-[50%] lg:w-[25%]">
          <img
            className="w-full"
            src="/Assets/five.JPG"
            alt="Google"
          />
          <h2 className="w-80 text-xl font-semibold lg:text-[22px] lg:font-bold lg:mt-8">GOOGLE</h2>
          <p className="w-full text-sm mt-4 text-gray-800 lg:text-lg lg:font-semibold lg:mt-6">
            Our embedded partnership with Google is as deep as it gets. Were
            the lead creative agency for Google Store and provide strategy,
            design and prototyping to other divisions. Learn more about our
            partnership here.
          </p>
        </div>

        <div className="w-[75%] sm:w-[45%] md:w-[50%] lg:w-[25%]">
          <img
            className="w-full"
            src="/Assets/six.JPG"
            alt="KFC"
          />
          <h2 className="w-80 text-xl font-semibold lg:text-[22px] lg:font-bold lg:mt-8">KFC</h2>
          <p className="w-full text-sm mt-4 text-gray-800 lg:text-lg lg:font-semibold lg:mt-6">
            An award-winning global, digital transformation engagement spanning
            eCommerce, mobile app, and new drive thru experiences. Bringing
            KFCs brand story to life while making it easier for customers to
            buy chicken. Learn more about our partnership here.
          </p>
        </div>

        <div className="w-[75%] sm:w-[45%] md:w-[50%] lg:w-[25%]">
          <img
            className="w-full"
            src="/Assets/seven.JPG"
            alt="WILSON"
          />
          <h2 className="w-80 text-xl font-semibold lg:text-[22px] lg:font-bold lg:mt-8">WILSON</h2>
          <p className="w-full text-sm mt-4 text-gray-800 lg:text-lg lg:font-semibold lg:mt-6">
            A reimagining of Wilsons brand visual identity, and brand campaign,
            to support a new product drop and the launch of the first brick and
            mortar retail location in the brands 108-year history. Read our
            full case study here.
          </p>
        </div>

        <div className="w-[75%] sm:w-[45%] md:w-[50%] lg:w-[25%]">
          <img
            className="w-full"
            src="/Assets/eigth.JPG"
            alt="AT&T"
          />
          <h2 className="w-80 text-xl font-semibold lg:text-[22px] lg:font-bold lg:mt-8">AT&T</h2>
          <p className="w-full text-sm mt-4 text-gray-800 lg:text-lg lg:font-semibold lg:mt-6">
            Redesigning the digital flagship for the largest telecommunications
            company in the world. Creating frictionless paths to purchase for a
            wide range of consumers over a vast portfolio of products and
            services.
          </p>
        </div>

        <div className="w-[75%] sm:w-[45%] md:w-[50%] lg:w-[25%]">
          <img
            className="w-full"
            src="/Assets/nine.JPG"
            alt="PATAGONIAL"
          />
          <h2 className="w-80 text-xl font-semibold lg:text-[22px] lg:font-bold lg:mt-8">PATAGONIA</h2>
          <p className="w-full text-sm mt-4 text-gray-800 lg:text-lg lg:font-semibold lg:mt-6">
            Ongoing partnership providing strategy, branding, experience design,
            and development focused on bringing their mission and offerings to
            consumers through brand-led programs and platforms. Read our full
            case study here.
          </p>
        </div>
      </div>
    </>
  );
};

export default FifthSection;
