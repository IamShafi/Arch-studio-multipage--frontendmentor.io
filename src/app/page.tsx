"use client";

import React, { useEffect, useState } from "react";
import FetchData from "../../utils/home/FetchData";
import Banner from "@/layout/home/banner/Banner";
import Welcome from "@/layout/home/welcome/Welcome";
import Hero from "@/layout/home/about/Hero";
import Featured from "@/layout/home/featured/Featured";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { scrollToTop } from "../../utils/shared";

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
          <Banner data={data} />
          <Welcome data={data} />
          <Hero data={data} />
          <Featured data={data} />
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
