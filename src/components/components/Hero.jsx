import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
// import { ComputersCanvas } from "./canvas";
import HeroPic from "../../assets/heroo.png";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} relative inset-0 top-[120px] max-x-7xl flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white flex`}>
            Hi, I'm <span className="text-[#915eff] "> Khodor</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Passionate Websites And Applications Developer.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center pt-32 md:pt-8">
        {" "}
        <img
          src={HeroPic}
          className="w-80 sm:w-120 animate-pulse"
          alt="hero pic"
        />
      </div>{" "}
    </section>
  );
};

export default Hero;
