import React from "react";
import { DataProps } from "../../../../types/home";
import About from "@/components/buttons/About";
import Image from "next/image";

const Hero: React.FC<DataProps> = ({ data }) => {
  return (
    <div className="w-full h-[560px] px-0 ss:px-16 md:px-20 mb-[200px]">
      <div className="w-full h-full relative px-[30px] ss:pr-[0px] ss:pl-[50px] md:pl-[180px] flex flex-col justify-center">
        <h2 className="ss:w-[400px] font-bold text-[40px] ss:text-[64px] text-white leading-none mb-10">
          Small team, big ideas
        </h2>
        <About />
        <div className="w-full absolute h-full left-0 top-0 bg-black opacity-[55%] z-[-1]" />
        {data && (
          <>
            <Image
              src={data?.HomePageBannerImgs?.desktop}
              alt="banner image"
              width={1110}
              height={560}
              className="h-full w-full object-cover z-[-4] top-0 left-0 absolute hidden md:flex"
              priority={true}
            />
            <Image
              src={data?.HomePageBannerImgs?.tablet}
              alt="banner image"
              width={375}
              height={560}
              className="h-full w-full object-cover z-[-4] top-0 left-0 absolute hidden ss:flex md:hidden"
              priority={true}
            />
            <Image
              src={data?.HomePageBannerImgs?.mobile}
              alt="banner image"
              width={375}
              height={560}
              className="h-full w-full object-cover z-[-4] top-0 left-0 absolute flex ss:hidden"
              priority={true}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
