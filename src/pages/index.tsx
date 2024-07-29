import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import SecondSection from "./Components/second_section";
import ThirdSectioin from "./Components/third_section";
import FourthSection from "./Components/fourth_section";
import FifthSection from "./Components/fifth_section";
import SixthSection from "./Components/sixth_section";
import SeventhSection from "./Components/seventh_section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <header>
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/Assets/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10">
          <Navbar />
          <section className="bg-transparent h-[85vh]"></section>
        </div>
      </header>
      <main>
        <SecondSection />
        <ThirdSectioin />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
      </main>
    </div>
  );
}
