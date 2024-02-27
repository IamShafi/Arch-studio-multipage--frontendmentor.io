import React from "react";
import { DataProps } from "../../../types/home";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC<DataProps> = ({ data }) => {
  const hero = data?.contactData?.hero;
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.5, ease: "easeInOut"}} className="w-full h-[725px] mb-[100px] ss:mb-[172px] relative">
      <div className="w-full h-full flex flex-col ss:items-end justify-end">
        <h1
          className="text-[72px] ss:text-[140px] md:text-[230px] text-[#EEEFF4] font-bold leading-none z-[10] 
        capitalize mb-[-35px] ss:mb-[-72px] md:mb-[-125px]"
        >
          {hero?.headingLarge}
        </h1>
        <div className="w-[80%] h-[40px] flex ss:hidden bg-white " />
        <div
          className="w-full ss:w-[500px] md:w-[600px] h-[300px] ss:h-[500px] ss:pl-[60px] md:pl-[185px] flex 
        flex-col justify-end z-[9] bg-white"
        >
          <div className="w-10 h-[2px] bg-grey mb-10" />
          <h3 className="text-[40px] ss:text-[64px] leading-none mb-[40px] font-semibold">
            {hero?.heading}
          </h3>
          <p className="text-[18px] text-darkGrey leading-tight">
            {hero?.paragraph}
          </p>
        </div>
      </div>
      <div className="h-full w-full md:w-[63%] xl:w-[70%] absolute z-[-3] top-0 left-0">
        <div className="w-full absolute h-full top-0 bg-black opacity-[55%] z-[3]" />
        <Image
          src={hero?.image.desktop}
          alt="hero image"
          width={635}
          height={720}
          className="w-full h-full object-cover z-[-3] hidden md:flex"
        />
        <Image
          src={hero?.image.tablet}
          alt="hero image"
          width={573}
          height={720}
          className="w-full h-full object-cover z-[-3] hidden ss:flex md:hidden"
        />
        <Image
          src={hero?.image.tablet}
          alt="hero image"
          width={573}
          height={720}
          className="w-full h-full object-cover z-[-3] flex ss:hidden"
        />
      </div>
    </motion.div>
  );
};

export default Hero;
