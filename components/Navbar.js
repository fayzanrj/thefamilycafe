"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "@/public/logo/logo.jpg";
import { CgMenuLeftAlt } from "react-icons/cg";
import { GrClose, GrSearch } from "react-icons/gr";
import Link from "next/link";
import { Poiret_One } from "next/font/google";
import { useRouter } from "next/navigation";

const poiret = Poiret_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const [menuTranslate, setMenuTranslate] = useState("-translate-x-full");
  const [isDeskSearchOpen, setIsDeskSearchOpen] = useState(false);
  const deskRef = useRef();
  const mobileRef = useRef();
  const router = useRouter();

  // FUNCTION TO HANDLE MOBILE SEARCH
  const handleMobileSearch = (e) => {
    e.preventDefault();
    setMenuTranslate("-translate-x-full");
    router.push(`/search/${mobileRef.current.value}`);
  };

  // FUNCTION TO HANDLE PC SEARCH
  const handleDeskSearch = (e) => {
    e.preventDefault();
    router.push(`/search/${deskRef.current.value}`);
  };

  return (
    <nav
      id="top"
      className={`w-[100vw] min-h-[5rem] h-[12svh] fixed z-50 bg-white   flex justify-center items-center border-b-2 ${poiret.className}`}
    >
      {/* Hamburger ICON */}
      <CgMenuLeftAlt
        size={"2rem"}
        className="sm:hidden absolute left-2 cursor-pointer"
        onClick={() => setMenuTranslate("-translate-x-0")}
      />

      {/* MOBILE NAVBAR */}
      <div
        className={`sm:hidden  w-3/4 h-[100vh] py-5 px-2 fixed top-0 left-0 duration-500 z-50 bg-white shadow-xl ${menuTranslate}`}
      >
        <button
          aria-label="close-btn"
          className="float-right"
          onClick={() => setMenuTranslate("-translate-x-full")}
        >
          <GrClose size={"1.3rem"} />
        </button>

        <form
          onSubmit={handleMobileSearch}
          className="mt-10 border-2 rounded-[2rem] overflow-hidden px-3 font-bold relative"
        >
          <input
            className="w-[93%] py-3 px-2 outline-none text"
            placeholder="Search"
            ref={mobileRef}
          />
          <button
            type="submit"
            aria-label="searchbtn"
            className="absolute top-1/2 transform -translate-y-1/2"
            onClick={handleMobileSearch}
          >
            <GrSearch size={"1.2rem"} />
          </button>
        </form>

        {/* MOBILE NAV LINKS */}
        <MobileLinks setMenuTranslate={setMenuTranslate} />
      </div>

      {/* PC NAVBAR  */}
      <ul className="hidden sm:block font-bold text-lg">
        <li className="inline-block mx-10">
          <Link href={"/cakes"}>Cakes</Link>
        </li>

        <li className="inline-block mx-10">
          <Link href={"/cupcakes"}>CupCakes</Link>
        </li>
      </ul>
      <Link href={"/"}>
        <Image quality={100} src={logo} width={80} height={50} alt="logo" />
      </Link>
      <ul className="hidden sm:block font-bold text-lg">
        <li className="inline-block mx-10">
          <Link href={"/connect"}>Connect</Link>
        </li>

        <li className="inline-block mx-10">
          <Link href={"/about"}>About Us</Link>
        </li>
      </ul>

      {/* PC SEARCH  */}
      <div className="hidden sm:block absolute right-5 sm:right-2 z-50 shadow-2xl">
        <button
          aria-label="searchOpenBtn"
          onClick={() => setIsDeskSearchOpen(!isDeskSearchOpen)}
        >
          <GrSearch size={"1.8rem"} />
        </button>
        <form
          onSubmit={handleDeskSearch}
          className={`hidden sm:block sm:w-[35vw] md:w-[30vw] max-w-[28rem] border-2 border-stone-400 rounded-[2rem] overflow-hidden px-8 font-bold absolute ${
            isDeskSearchOpen ? "right-0" : "-right-[100vw]"
          } duration-500 top-16 bg-white`}
        >
          <input
            className=" w-[98%] py-3 px-2 outline-none text"
            placeholder="Search"
            ref={deskRef}
          />
          <button
            aria-label="searchbtn"
            type="submit"
            className="absolute top-1/2 transform -translate-y-1/2"
          >
            <GrSearch size={"1.5rem"} />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

const MobileLinks = ({ setMenuTranslate }) => {
  return (
      // <hr className="border-stone-30 mt-7" />
    <ul className="mt-5" onClick={() => setMenuTranslate("-translate-x-full")}>

      <li className="w-full p-4 font-bold text-center">
        <Link href={"/"} className="py-7 px-14 w-full text-xl">Home</Link>
        <hr className="border-stone-30 mt-7" />
      </li>

      <li className="w-full p-4 font-bold text-center">
        <Link href={"/cakes"} className="py-7 px-14 w-full text-xl">Cakes</Link>
        <hr className="border-stone-30 mt-7" />
      </li>

      <li className="w-full p-4 font-bold text-center">
        <Link href={"/cupcakes"} className="py-7 px-14 w-full text-xl">Cupcakes</Link>
        <hr className="border-stone-300 mt-7" />
      </li>

      <li className="w-full p-4 font-bold text-center">
        <Link href={"/connect"} className="py-7 px-14 w-full text-xl">Connect</Link>
        <hr className="border-stone-300 mt-7" />
      </li>

      <li className="w-full p-4 font-bold text-center">
        <Link href={"/about"} className="py-7 px-14 w-full text-xl">About Us</Link>
        <hr className="border-stone-30 mt-7" />
      </li>
    </ul>
  );
};
