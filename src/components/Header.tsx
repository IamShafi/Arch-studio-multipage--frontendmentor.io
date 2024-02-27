"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  

  return (
    <div className="px-[30px] ss:px-16 md:px-20 py-[30px] ss:py-[80px] w-full h-full ss:h-10 items-center justify-between ss:justify-normal flex gap-16 md:gap-28 relative">
      <Link href="/" className="cursor-pointer">
        <Image
          src="/assets/icons/logo.svg"
          alt="logo"
          width="97"
          height="40"
          priority={true}
        />
      </Link>
      <NavLinks />
      <div onClick={toggleNav}>
        <Image
          src={!nav ? "/assets/icons/menu.svg" : "/assets/icons/cancel.svg"}
          width={30}
          height={30}
          alt="menu"
          className="flex ss:hidden"
        />
      </div>
      <MobileNav nav={nav} />
      <div className="hidden ss:flex">
        <div className="w-[1px] h-[100px] bg-[#EEEFF4] absolute left-[10px] top-0" />
      </div>
    </div>
  );
};

export default Header;
