import React from "react";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <Link
      href="portfolio"
      className="z-[5] px-[30px] py-[24px] w-[254px] bg-dark text-white text-[20px] font-semibold
       flex cursor-pointer items-center justify-center gap-4"
    >
      <p>See Our Portfolio</p>
      <Image
        src="/assets/icons/arrow-icon.svg"
        alt="arrow"
        width={24}
        height={20}
      />
    </Link>
  );
};

export default Portfolio;
