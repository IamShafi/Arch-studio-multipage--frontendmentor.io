"use client";
import { useCurrentUser } from "./hooks/useCurrentUser";
import Link from "next/link";
import React, { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { auth } from "../../auth";
import { signOut } from "../../auth";
import { LogoutButton } from "./LogoutButton";
// import LogoutBtn from "./LogoutButton"


const NavLinks = () => {
  const user = useCurrentUser();
  console.log(user)
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal((prev) => !prev);
    setShowRegisterModal(false);
  };

  const openRegisterModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal((prev) => !prev);
  };

  const closeModals = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  return (
    <ul className="hidden ss:flex gap-10 md:gap-16 w-full text-[18px] font-semibold h-full items-center">
      <Link href="portfolio" className="cursor-pointer hover:text-darkGrey">
        Portfolio
      </Link>
      <Link href="about" className="cursor-pointer hover:text-darkGrey">
        About Us
      </Link>
      <Link href="contact" className="cursor-pointer hover:text-darkGrey">
        Contact
      </Link>
      {user ? ( user &&
      <div  className="cursor-pointer font-medium whitespace-nowrap hover:text-rose-500">
        
        <LogoutButton>
        <h1>log out</h1>
        </LogoutButton>
      </div>) 
      :(
      <>
       <div className="flex gap-[14px] flex-col md:flex-row">
      {/* signout button */}
      <button
        type="button"
        className="justify-center items-center px-16 py-3.5 text-lg font-semibold text-white whitespace-nowrap rounded-3xl bg-zinc-950 max-w-[209px]"
        onClick={openLoginModal}
      >
        Sign in
      </button>
      <button
        type="button"
        className="justify-center items-center px-16 py-3.5 text-lg font-semibold text-white whitespace-nowrap rounded-3xl border border-solid bg-neutral-700 bg-opacity-20 border-black border-opacity-80 max-w-[210px]"
        onClick={openRegisterModal}
      >
        Sign up
      </button>

      {showLoginModal && (
        <LoginModal
          onClose={closeModals}
          openRegisterModal={openRegisterModal}
        />
      )}
      {showRegisterModal && (
        <RegisterModal onClose={closeModals} openLoginModal={openLoginModal} />
      )}
    </div>
      </>
      )}
     
    </ul>
  );
};

export default NavLinks;
