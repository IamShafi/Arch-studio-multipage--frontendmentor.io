import React from "react";
import FooterNavlinks from "./FooterNavlinks";
import { motion } from "framer-motion";

interface navProps {
  nav: boolean;
}

const MobileNav: React.FC<navProps> = ({ nav }) => {
  const variants = {
    opened: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: "100%" },
  };
  return (
    <motion.nav
      animate={nav ? "opened" : "closed"}
      variants={variants}
      transition={{duration:0.5, ease: "easeInOut"}}
      className={` ${!nav && "hidden"} flex ss:hidden w-full h-auto py-10 bg-white  items-center justify-center absolute 
      top-[100px] left-0 z-[10022]`}
    >
      <FooterNavlinks />
    </motion.nav>
  );
};

export default MobileNav;
