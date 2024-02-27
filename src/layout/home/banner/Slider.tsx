import React from "react";
import { SliderProps } from "../../../../types/home";
import Image from "next/image";
import Portfolio from "@/components/buttons/Portfolio";
import { motion } from "framer-motion";

const Slider: React.FC<SliderProps> = ({ data, page }) => {
  const sliderVariants = {
    active: { opacity: 1 },
    inactive: { opacity: 0 },
  };

  const headingVariants = {
    active: { y: 0 },
    inactive: { y: -40 },
  };

  const descVariants = {
    active: { x: 0, opacity: 1 },
    inactive: { x: 20, opacity: 0 },
  };

  const sliderData = data?.slider;
  const slider = sliderData?.map((item: any, index: number) => {
    return (
      <motion.div
        animate={page === index ? "active" : "inactive"}
        variants={sliderVariants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        key={index}
        className={`w-full h-full ${
          page === index ? "relative" : "absolute hidden"
        }`}
      >
        <div className="h-full text-white px-[50px] ss:pr-0 ss:pl-[50px] md:pl-[180px] flex justify-center z-[10] flex-col">
          <motion.h1
            animate={page === index ? "active" : "inactive"}
            variants={headingVariants}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="font-bold leading-none ss:w-[450px] text-[48px] ss:text-[84px] z-[10] mb-[20px]"
          >
            {item?.title}
          </motion.h1>
          <motion.p
            animate={page === index ? "active" : "inactive"}
            variants={descVariants}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
            className="z-[10] mb-[30px] ss:w-[450px] text-[18px] ss:text-[22px] leading-tight"
          >
            {item?.content}
          </motion.p>
          <motion.div
            animate={page === index ? "active" : "inactive"}
            variants={descVariants}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
            className="w-full h-auto flex justify-start"
          >
            <Portfolio />
          </motion.div>
        </div>
        <div className="w-full h-full absolute top-0 left-0">
          {item && (
            <motion.div
              animate={page === index ? "active" : "inactive"}
              variants={sliderVariants}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="w-full h-full"
            >
              <Image
                src={item?.images.desktop}
                alt="banner image"
                width={1110}
                height={720}
                className="h-full w-full object-cover hidden md:flex "
                priority={true}
              />
              <Image
                src={item?.images.tablet}
                alt="banner image"
                width={573}
                height={720}
                className="md:hidden ss:flex hidden object-cover w-full h-full"
              />
              <Image
                src={item?.images.mobile}
                alt="banner image"
                width={375}
                height={560}
                className="ss:hidden flex object-cover w-full h-full"
              />
            </motion.div>
          )}
        </div>
        <div className="w-full absolute h-full top-0 bg-black opacity-[55%] z-[3]" />
      </motion.div>
    );
  });
  return <div className="h-full w-full overflow-hidden">{slider}</div>;
};

export default Slider;
