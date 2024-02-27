"use client";
import React, { useState } from "react";
import Pagination from "./Pagination";
import { DataProps } from "../../../../types/home";
import Slider from "./Slider";
import { motion } from "framer-motion";

const Banner: React.FC<DataProps> = ({ data }) => {
  const [page, setPage] = useState(0);
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity:1}}
    transition={{duration: 0.8, ease: 'easeIn'}}
    className="px-0 ss:px-16 md:px-20 relative h-[720px] w-full mb-[100px]">
      <Slider data={data} page={page} />
      <Pagination page={page} setPage={setPage} />
      <div className="text-[#EEEFF4] hidden ss:flex absolute top-[60px] text-[18px] left-[-56px] rotate-90 leading-none tracking-[1.2em]">
        HOME
      </div>
    </motion.div>
  );
};

export default Banner;
