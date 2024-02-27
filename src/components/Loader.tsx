import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  isLoading: boolean
}

const Loader:React.FC<LoaderProps> = ({ isLoading }) => {
  const variants = {
    opened: { opacity: 1},
    closed: { opacity: 0},
  };
  return (
    <motion.div
      animate={isLoading ? "opened" : "closed"}
      variants={variants}
      transition={{ease: "easeInOut", duration: 1}}
      className={` ${!isLoading && "hidden"} w-full h-[100vh] bg-gray-900 flex justify-center items-center z-[1000] 
      transition-opacity duration-300`}
    >
      <div className="lds-dual-ring"></div>
    </motion.div>
  );
};

export default Loader;
