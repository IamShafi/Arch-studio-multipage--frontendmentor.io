import Link from "next/link";
import React from "react";

const FooterNavlinks = () => {
  return (
    <ul className="flex flex-col md:flex-row gap-10 w-full md:gap-16 text-[18px] font-semibold h-full items-center">
      <Link href="portfolio" className="cursor-pointer hover:text-darkGrey">
        Portfolio
      </Link>
      <Link href="about" className="cursor-pointer hover:text-darkGrey">
        About Us
      </Link>
      <Link href="contact" className="cursor-pointer hover:text-darkGrey">
        Contact
      </Link>
    </ul>
  );
};

export default FooterNavlinks;
