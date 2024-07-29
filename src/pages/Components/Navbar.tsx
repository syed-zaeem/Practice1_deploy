import React, { useState } from "react";
import Link from "next/link";
import { FaEllipsisH } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const menuSpring = useSpring({
    opacity: showMenu ? 1 : 0,
    config: { duration: 300 }, // Adjust the duration as needed
    onRest: ()=>{
      if(!showMenu){
        setIsVisible(false);
      }
    }
  });

  const openMenu = () => {
    setIsVisible(true);
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <div className="flex text-white justify-between p-6 sm:p-7 md:p-8 md:px-12 lg:pt-10 xl:px-16">
        <div className="flex lg:space-x-[15%] xl:space-x-[25%]">
          <h2 className="text-xl font-bold md:text-2xl">BASIC/DEPT</h2>
          <ul className="hidden lg:flex space-x-[15%] mt-[6px] font-semibold">
            <li>
              <Link href="/">WORK</Link>
            </li>
            <li>
              <Link href="/">ABOUT</Link>
            </li>
            <li>
              <Link href="/">NEWS</Link>
            </li>
            <li>
              <Link href="/">THINKING</Link>
            </li>
            <li>
              <Link href="/">CAREERS</Link>
            </li>
            <li>
              <Link href="/">CONTACT</Link>
            </li>
          </ul>
        </div>
        <FaEllipsisH className="hidden lg:block text-xl mt-2 hover:scale-x-125 cursor-pointer transition duration-200" />
        <button
          className="text-md font-semibold mt-1 md:text-xl lg:hidden"
          onClick={() => {
            // handleClick();
            openMenu();
          }}
        >
          MENU
        </button>
      </div>
      {isVisible && (
        <animated.div
          style={{...menuSpring}}
          className="px-6 pt-5 absolute top-0 w-full flex flex-col bg-zinc-800 text-pink-200 border border-black h-[100vh]"
        >
          <div className="flex justify-between">
            <h2 className="text-xl md:text-2xl font-bold cursor-pointer">
              BASIC/DEPT
            </h2>
            <button
              className="text-xl font-semibold text-white border border-white rounded-full px-2"
              onClick={closeMenu}
            >
              X
            </button>
          </div>
          <ul className="flex flex-col space-y-3 mt-16">
            <li className="text-lg sm:text-xl md:text-2xl font-bold">
              <Link href="/">WORK</Link>
            </li>
            <li className="text-lg sm:text-xl md:text-2xl font-bold">
              <Link href="/">ABOUT</Link>
            </li>
            <li className="text-lg sm:text-xl md:text-2xl font-bold">
              <Link href="/">NEWS</Link>
            </li>
            <li className="text-lg sm:text-xl md:text-2xl font-bold">
              <Link href="/">THINKING</Link>
            </li>
            <li className="text-lg sm:text-xl md:text-2xl font-bold">
              <Link href="/">CAREERS</Link>
            </li>
            <li className="text-lg sm:text-xl md:text-2xl font-bold">
              <Link href="/">CONTACT</Link>
            </li>
            <li className="text-lg sm:text-xl md:text-2xl font-bold">
              <Link href="/">INITIATIVES &gt;</Link>
            </li>
          </ul>
          <div className="flex text-gray-500 justify-between mt-44 md:mt-36">
            <p className="text-sm">IC/DEPT,INC</p>
            <p className="text-sm">10-24</p>
          </div>
        </animated.div>
      )}
    </nav>
  );
};

export default Navbar;
