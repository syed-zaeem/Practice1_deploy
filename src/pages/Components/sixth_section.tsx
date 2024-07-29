import React, { useEffect, useRef, useState } from 'react';
import styles from "@/styles/sixth_section.module.css"
import { useInView, useSpring, animated } from "react-spring";

const SixthSection = () => {

  // const [ref, inView] = useInView()

  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust this value to control how much of the component needs to be in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const springProps = useSpring({
    backgroundColor: isInView ? '#292928' : 'transparent', // Change to your desired colors
    config: { duration: 700 }, // Adjust the duration as needed
  });

  const textColorSpring = useSpring({
    color: isInView ? "#fab6f7" : "black",
    config: {
      duration: 700
    }
  })

  const borderColorSpring = useSpring({
    borderColor: isInView ? "#fab6f7" : "black",
    config: {
      duration: 700
    }
  })

  return (
    <animated.div ref={ref} style={springProps} className={`w-[100%] px-[5%] pb-20 pt-10 sm:flex sm:flex-row-reverse sm:pt-20 lg:pt-32`}>
      <div className="mt-16 w-full sm:mt-0 sm:w-[45%]">
        <img src="/Assets/thirtenn.JPG" alt="Image" className="w-full h-full" />
      </div>
      <animated.div style={textColorSpring} className="w-full sm:w-[55%]">
        <h1 className="text-4xl font-bold mt-10 sm:mt-0 sm:text-5xl md:text-6xl md:mt-8 lg:text-7xl">BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE</h1>
        <p className="my-6 font-semibold lg:text-lg">ADWEEK <span className="font-bold">AGENCY SPOTLIGHT</span></p>
        <animated.button
          style={borderColorSpring}
          className={`border rounded-full px-8 py-[6px] text-sm font-semibold lg:mt-12 ${styles.required_button}`}
        >
          ABOUT US
        </animated.button>
      </animated.div>
    </animated.div>
  );
};

export default SixthSection;
