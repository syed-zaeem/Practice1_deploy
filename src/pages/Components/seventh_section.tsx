import React from "react";
import styles from "@/styles/third_section.module.css";
import { IoMdArrowForward } from "react-icons/io";

const SeventhSection = () => {
  return (
    <div className="mt-20 mb-64 w-[90%] mx-auto">
      <div className="flex w-full justify-between items-end">
        <h1 className="text-2xl font-bold w-[40%] md:text-3xl md:w-[60%] lg:text-5xl lg:font-semibold lg:w-[30%]">
          FEATURED NEWS
        </h1>
        <button
          className={`border border-black rounded-full px-8 py-[6px] h-9 text-sm font-semibold ${styles.required_button}`}
        >
          VIEW ALL
        </button>
      </div>
      <hr className="border-sm border-black mt-6 sm:mt-13 md:mt-16" />
      <div className="mt-5 group cursor-pointer sm:flex">
        <div className="w-full overflow-hidden sm:w-[44%] lg:w-[48%] min-h-36">
          <img
            src="/Assets/fourteen.JPG"
            alt="Image for News"
            className="scale-105 transition duration-300 group-hover:scale-100 sm:h-full"
          />
        </div>
        <div className="sm:ml-[3%] md:ml-[2%] sm:flex sm:flex-col sm:justify-between sm:w-full">
          <div className="sm:flex sm:justify-between">
            <p className="mt-6 text-[22px] font-semibold group-hover:underline sm:mt-0 sm:w-[85%] lg:text-4xl lg:w-[70%]">
              NO LONGER THE AFFORDABLE OPTION, QSRS LOOK TO CONNECT WITH CULTURE
            </p>
              <IoMdArrowForward className="hidden sm:block sm:text-4xl lg:text-5xl" />
          </div>
          <div className="mt-12 flex justify-between items-center sm:items-end">
            <p className="text-xs font-bold text-gray-800 lg:text-base">
              PRESS <span className="text-gray-700">7.17.24</span>
            </p>
            <IoMdArrowForward className="text-2xl sm:hidden" />
          </div>
        </div>
      </div>

      <hr className="border-sm border-black mt-6 sm:mt-13 md:mt-16" />
      <div className="mt-5 group cursor-pointer sm:flex">
        <div className="w-full overflow-hidden sm:w-[44%] lg:w-[48%] min-h-36">
          <img
            src="/Assets/fifteen.JPG"
            alt="Image for News"
            className="scale-105 transition duration-300 group-hover:scale-100 sm:h-full"
          />
        </div>
        <div className="sm:ml-[3%] md:ml-[2%] sm:flex sm:flex-col sm:justify-between sm:w-full">
          <div className="sm:flex sm:justify-between">
            <p className="mt-6 text-[22px] font-semibold group-hover:underline sm:mt-0 sm:w-[85%] lg:text-4xl lg:w-[70%]">
              THE FUTURE OF FASHION AND AI AT GLOSSYS ECOMMERCE SUMMIT
            </p>
              <IoMdArrowForward className="hidden sm:block sm:text-4xl lg:text-5xl" />
          </div>
          <div className="mt-12 flex justify-between items-center sm:items-end">
            <p className="text-xs font-bold text-gray-800 lg:text-base">
              PRESS <span className="text-gray-700">6.13.24</span>
            </p>
            <IoMdArrowForward className="text-2xl sm:hidden" />
          </div>
        </div>
      </div>

      <hr className="border-sm border-black mt-6 sm:mt-13 md:mt-16" />
      <div className="mt-5 group cursor-pointer sm:flex">
        <div className="w-full overflow-hidden sm:w-[44%] lg:w-[48%] min-h-36">
          <img
            src="/Assets/sixteen.JPG"
            alt="Image for News"
            className="scale-105 transition duration-300 group-hover:scale-100 sm:h-full"
          />
        </div>
        <div className="sm:ml-[3%] md:ml-[2%] sm:flex sm:flex-col sm:justify-between sm:w-full">
          <div className="sm:flex sm:justify-between">
            <p className="mt-6 text-[22px] font-semibold group-hover:underline sm:mt-0 sm:w-[85%] lg:text-4xl lg:w-[70%]">
              RETAILS NEW PLAYGROUND: WHERE PHYSICAL MEETS DIGITAL
            </p>
              <IoMdArrowForward className="hidden sm:block sm:text-4xl lg:text-5xl" />
          </div>
          <div className="mt-12 flex justify-between items-center sm:items-end">
            <p className="text-xs font-bold text-gray-800 lg:text-base">
              PRESS <span className="text-gray-700">6.3.24</span>
            </p>
            <IoMdArrowForward className="text-2xl sm:hidden" />
          </div>
        </div>
      </div>

      <hr className="border-sm border-black mt-6 sm:mt-13 md:mt-16" />
      <div className="mt-5 group cursor-pointer sm:flex">
        <div className="w-full overflow-hidden sm:w-[44%] lg:w-[48%] min-h-36">
          <img
            src="/Assets/seventeen.JPG"
            alt="Image for News"
            className="scale-105 transition duration-300 group-hover:scale-100 sm:h-full"
          />
        </div>
        <div className="sm:ml-[3%] md:ml-[2%] sm:flex sm:flex-col sm:justify-between sm:w-full">
          <div className="sm:flex sm:justify-between">
            <p className="mt-6 text-[22px] font-semibold group-hover:underline sm:mt-0 sm:w-[85%] lg:text-4xl lg:w-[70%]">
            GEN ALPHA, THE BETA TEST FOR HOW BRANDS CAN REACH A NEW GENERATION
              
            </p>
              <IoMdArrowForward className="hidden sm:block sm:text-4xl lg:text-5xl" />
          </div>
          <div className="mt-12 flex justify-between items-center sm:items-end">
            <p className="text-xs font-bold text-gray-800 lg:text-base">
              PRESS <span className="text-gray-700">5.28.24</span>
            </p>
            <IoMdArrowForward className="text-2xl sm:hidden" />
          </div>
        </div>
      </div>

      <hr className="border-sm border-black mt-6 sm:mt-13 md:mt-16" />
      <div className="mt-5 group cursor-pointer sm:flex">
        <div className="w-full overflow-hidden sm:w-[44%] lg:w-[48%] min-h-36">
          <img
            src="/Assets/eighteen.JPG"
            alt="Image for News"
            className="scale-105 transition duration-300 group-hover:scale-100 sm:h-full"
          />
        </div>
        <div className="sm:ml-[3%] md:ml-[2%] sm:flex sm:flex-col sm:justify-between sm:w-full">
          <div className="sm:flex sm:justify-between">
            <p className="mt-6 text-[22px] font-semibold group-hover:underline sm:mt-0 sm:w-[85%] lg:text-4xl lg:w-[70%]">
              NEW PRODUCTS ON THE PODIUM FOR THE 28TH WEBY AWARDS
            </p>
              <IoMdArrowForward className="hidden sm:block sm:text-4xl lg:text-5xl" />
          </div>
          <div className="mt-12 flex justify-between items-center sm:items-end">
            <p className="text-xs font-bold text-gray-800 lg:text-base">
              PRESS <span className="text-gray-700">4.24.24</span>
            </p>
            <IoMdArrowForward className="text-2xl sm:hidden" />
          </div>
        </div>
      </div>

      <hr className="border-sm border-black mt-6 sm:mt-13 md:mt-16" />
      <div className="mt-5 group cursor-pointer sm:flex">
        <div className="w-full overflow-hidden sm:w-[44%] lg:w-[48%] min-h-36">
          <img
            src="/Assets/nineteen.JPG"
            alt="Image for News"
            className="scale-105 transition duration-300 group-hover:scale-100 sm:h-full"
          />
        </div>
        <div className="sm:ml-[3%] md:ml-[2%] sm:flex sm:flex-col sm:justify-between sm:w-full">
          <div className="sm:flex sm:justify-between">
            <p className="mt-6 text-[22px] font-semibold group-hover:underline sm:mt-0 sm:w-[85%] lg:text-4xl lg:w-[70%]">
              WHAT SOFIA COPPOLA CAN TEACH US ABOUT SHIFTING THE CULTURE
            </p>
              <IoMdArrowForward className="hidden sm:block sm:text-4xl lg:text-5xl" />
          </div>
          <div className="mt-12 flex justify-between items-center sm:items-end">
            <p className="text-xs font-bold text-gray-800 lg:text-base">
              PRESS <span className="text-gray-700">4.18.24</span>
            </p>
            <IoMdArrowForward className="text-2xl sm:hidden" />
          </div>
        </div>
      </div>

      <hr className="border-sm border-black mt-6 sm:mt-13 md:mt-16" />
      <div className="mt-5 group cursor-pointer sm:flex">
        <div className="w-full overflow-hidden sm:w-[44%] lg:w-[48%] min-h-36">
          <img
            src="/Assets/twenty.JPG"
            alt="Image for News"
            className="scale-105 transition duration-300 group-hover:scale-100 sm:h-full"
          />
        </div>
        <div className="sm:ml-[3%] md:ml-[2%] sm:flex sm:flex-col sm:justify-between sm:w-full">
          <div className="sm:flex sm:justify-between">
            <p className="mt-6 text-[22px] font-semibold group-hover:underline sm:mt-0 sm:w-[85%] lg:text-4xl lg:w-[70%]">
              THE 28TH ANNUAL WEBBY AWARDS NODS ARE IN
            </p>
              <IoMdArrowForward className="hidden sm:block sm:text-4xl lg:text-5xl" />
          </div>
          <div className="mt-12 flex justify-between items-center sm:items-end">
            <p className="text-xs font-bold text-gray-800 lg:text-base">
              PRESS <span className="text-gray-700">4.4.24</span>
            </p>
            <IoMdArrowForward className="text-2xl sm:hidden" />
          </div>
        </div>
      </div>

      <hr className="border-sm border-black mt-6 sm:mt-13 md:mt-16" />
      <div className="mt-5 group cursor-pointer sm:flex">
        <div className="w-full overflow-hidden sm:w-[44%] lg:w-[48%] min-h-36">
          <img
            src="/Assets/twenty_one.JPG"
            alt="Image for News"
            className="scale-105 transition duration-300 group-hover:scale-100 sm:h-full"
          />
        </div>
        <div className="sm:ml-[3%] md:ml-[2%] sm:flex sm:flex-col sm:justify-between sm:w-full">
          <div className="sm:flex sm:justify-between">
            <p className="mt-6 text-[22px] font-semibold group-hover:underline sm:mt-0 sm:w-[85%] lg:text-4xl lg:w-[70%]">
              ARE SNACKS THE NEW MEALS IN QSR?
            </p>
              <IoMdArrowForward className="hidden sm:block sm:text-4xl lg:text-5xl" />
          </div>
          <div className="mt-12 flex justify-between items-center sm:items-end">
            <p className="text-xs font-bold text-gray-800 lg:text-base">
              PRESS <span className="text-gray-700">3.20.24</span>
            </p>
            <IoMdArrowForward className="text-2xl sm:hidden" />
          </div>
        </div>
      </div>

      <hr className="border-sm border-black mt-6 sm:mt-13 md:mt-16" />
      <div className="mt-5 group cursor-pointer sm:flex">
        <div className="w-full overflow-hidden sm:w-[44%] lg:w-[48%] min-h-36">
          <img
            src="/Assets/twenty_two.JPG"
            alt="Image for News"
            className="scale-105 transition duration-300 group-hover:scale-100 sm:h-full"
          />
        </div>
        <div className="sm:ml-[3%] md:ml-[2%] sm:flex sm:flex-col sm:justify-between sm:w-full">
          <div className="sm:flex sm:justify-between">
            <p className="mt-6 text-[22px] font-semibold group-hover:underline sm:mt-0 sm:w-[85%] lg:text-4xl lg:w-[70%]">
              DAVE LUCAS OF BASIC/DEPT LEADS PANEL DISCUSSION ON INCLUSIVE DESIGN MACH HAUS NYC
            </p>
              <IoMdArrowForward className="hidden sm:block sm:text-4xl lg:text-5xl" />
          </div>
          <div className="mt-12 flex justify-between items-center sm:items-end">
            <p className="text-xs font-bold text-gray-800 lg:text-base">
              PRESS <span className="text-gray-700">3.11.24</span>
            </p>
            <IoMdArrowForward className="text-2xl sm:hidden" />
          </div>
        </div>
      </div>

      <hr className="border-sm border-black mt-6 sm:mt-13 md:mt-16" />
      <div className="mt-5 group cursor-pointer sm:flex">
        <div className="w-full overflow-hidden sm:w-[44%] lg:w-[48%] min-h-36">
          <img
            src="/Assets/twenty_three.JPG"
            alt="Image for News"
            className="scale-105 transition duration-300 group-hover:scale-100 sm:h-full"
          />
        </div>
        <div className="sm:ml-[3%] md:ml-[2%] sm:flex sm:flex-col sm:justify-between sm:w-full">
          <div className="sm:flex sm:justify-between">
            <p className="mt-6 text-[22px] font-semibold group-hover:underline sm:mt-0 sm:w-[85%] lg:text-4xl lg:w-[70%]">
              WHY A GOOD CUSTOMER EXPERIENCE ISNT ENOUGH
            </p>
              <IoMdArrowForward className="hidden sm:block sm:text-4xl lg:text-5xl" />
          </div>
          <div className="mt-12 flex justify-between items-center sm:items-end">
            <p className="text-xs font-bold text-gray-800 lg:text-base">
              PRESS <span className="text-gray-700">2.2.24</span>
            </p>
            <IoMdArrowForward className="text-2xl sm:hidden" />
          </div>
        </div>
      </div>

      <hr className="border-sm border-black mt-6 sm:mt-13 md:mt-16" />
      <div className="mt-5 group cursor-pointer sm:flex">
        <div className="w-full overflow-hidden sm:w-[44%] lg:w-[48%] min-h-36">
          <img
            src="/Assets/twenty_four.JPG"
            alt="Image for News"
            className="scale-105 transition duration-300 group-hover:scale-100 sm:h-full"
          />
        </div>
        <div className="sm:ml-[3%] md:ml-[2%] sm:flex sm:flex-col sm:justify-between sm:w-full">
          <div className="sm:flex sm:justify-between">
            <p className="mt-6 text-[22px] font-semibold group-hover:underline sm:mt-0 sm:w-[85%] lg:text-4xl lg:w-[70%]">
              HOW QSRS ARE TRANSFORMING THE TRANSACTIONAL RELATIONSHIP WITH THE CUSTOMERS
            </p>
              <IoMdArrowForward className="hidden sm:block sm:text-4xl lg:text-5xl" />
          </div>
          <div className="mt-12 flex justify-between items-center sm:items-end">
            <p className="text-xs font-bold text-gray-800 lg:text-base">
              PRESS <span className="text-gray-700">1.19.24</span>
            </p>
            <IoMdArrowForward className="text-2xl sm:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
