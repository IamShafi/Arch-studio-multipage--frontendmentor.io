import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Portfolio from './buttons/Portfolio'
import FooterNavlinks from './FooterNavlinks'

const Footer = () => {
  return (
    <div className="absolute md:relative md:bg-transparent bg-grey gap-10 md:gap-0 left-0 md:px-20 w-full md:h-[205px] flex flex-col md:flex-row items-center">
      <Link
        href="/"
        className="h-[120px] w-[120px] mt-[-60px] md:mt-0 md:h-[205px] md:min-w-[198px] bg-dark flex justify-center items-center cursor-pointer"
      >
        <Image
          src="/assets/icons/logo-white.svg"
          alt="logo"
          width={97}
          height={40}
        />
      </Link>
      <div className="w-full h-full relative flex flex-col md:flex-row items-center gap-10 md:gap-0">
        <div className="w-full md:w-[80%] lg:w-[85%] bg-grey md:pl-16 h-full items-center">
          <FooterNavlinks />
        </div>
        <div className='md:absolute right-0 mb-10 md:mb-0'>
          <Portfolio />
        </div>
      </div>
      </div>
  );
}

export default Footer
