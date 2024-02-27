import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <Link
      href="/about"
      className="z-[5] px-[30px] py-[24px] w-[184px] bg-dark text-white text-[20px] font-semibold
       flex cursor-pointer items-center justify-center gap-4"
    >
      <p>About Us</p>
      <Image
        src="/assets/icons/arrow-icon.svg"
        alt="arrow"
        width={24}
        height={20}
      />
    </Link>
  );
};

export default About;
