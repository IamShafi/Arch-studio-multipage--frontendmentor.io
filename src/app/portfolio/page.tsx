"use client";
import React, { useState, useEffect } from "react";
import FetchData from "../../../utils/home/FetchData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { scrollToTop } from "../../../utils/shared";
import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
  const { state } = FetchData("/data.json");
  const { data } = state;
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (data) {
      setTimeout(() => setIsLoading(false), 800);
    }
  }, [data]);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.scrollY !== 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const portfolio = data?.portfolioData;

  return (
    <div className="h-full w-full relative">
      <Loader isLoading={isLoading} />

      {!isLoading && data && (
        <section
          className={` ${
            !isLoading && data ? "display-block" : "display-none"
          } font-Spartan px-0 ss:px-10 md:px-16 md:container w-full h-full text-dark relative`}
        >
          <Header />
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-7 px-[30px] ss:px-16 md:px-20 mb-[200px] relative">
            {portfolio?.map((item: any, index: number) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className="relative w-full h-auto"
                >
                  <Image
                    src={item.image.desktop}
                    alt="portfolio"
                    width={350}
                    height={560}
                    className="hidden md:flex object-cover w-full h-auto"
                  />
                  <Image
                    src={item.image.tablet}
                    alt="portfolio"
                    width={573}
                    height={240}
                    className="md:hidden ss:flex hidden object-cover w-full h-auto"
                  />
                  <Image
                    src={item.image.mobile}
                    alt="portfolio"
                    width={311}
                    height={240}
                    className="ss:hidden flex object-cover w-full h-auto"
                  />
                  <div className="absolute p-[30px] bottom-0 left-0 z-[4]">
                    <h4 className="text-white font-semibold text-[22px]">
                      {item.title}
                    </h4>
                    <p className="text-white">View All Projects</p>
                  </div>
                  <div className="w-full absolute h-full top-0 bg-black opacity-[20%] z-[3]" />
                </motion.div>
              );
            })}
            <div className="hidden ss:flex text-[#EEEFF4] absolute top-[132px] text-[18px] left-[-132px] rotate-90 leading-none tracking-[1.2em]">
              PORTFOLIO
            </div>
          </div>
          <Footer />
          {isScrolled && (
            <button
              onClick={scrollToTop}
              className="w-[40px] h-[40px] fixed flex -rotate-90 justify-center items-center p-3 cursor-pointer bg-red md:bg-dark right-3 
              z-[20002] bottom-10"
            >
              <Image
                src="/assets/icons/arrow-icon.svg"
                alt="up"
                width={33}
                height={27}
              />
            </button>
          )}
        </section>
      )}
    </div>
  );
};

export default Page;
