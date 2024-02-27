import React from "react";
import { DataProps } from "../../../types/home";
import Image from "next/image";

const Heritage: React.FC<DataProps> = ({ data }) => {
  const heritage = data?.aboutData?.heritage;
  return (
    <div className="w-full md:h-[568px] md:flex md:gap-12 mb-[172px]">
      <div className="w-full">
        <h3 className="text-[40px] ss:text-[64px] mb-[40px] font-semibold">
          {heritage?.heading}
        </h3>
        <div className="w-full md:w-[500px] text-darkGrey text-[18px] leading-tight flex flex-col gap-[30px]">
          <p>
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country
          </p>
          <p>
            Specializing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
          </p>
          <p>
            Our small team of world-class professionals provides input on every
            project.
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <Image
          src={heritage?.heritageImg}
          alt="heritage image"
          width={1000}
          height={1000}
          className="w-full h-full object-cover hidden md:flex"
        />
      </div>
    </div>
  );
};

export default Heritage;
