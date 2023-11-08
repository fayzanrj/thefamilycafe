import { Niconne } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo/footerLogo.JPEG";

const niconne = Niconne({ weight: "400", subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font ">
      <div className="min-h-[2.3rem] h-[10svh] py-2 px-6 mx-auto flex flex-wrap sm:justify-center justify-between items-center gap-4  border-t-2 border-opacity-10  overflow-hidden">
        {/* THE FAMILY CAFE LOGO */}
        <Link href={"#top"} scroll={true} className="inline-block">
          <Image src={logo} width={40} height={40} alt="logo" />
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 -{" "}
          <span className={`${niconne.className} text-[#ED558E] text-xl`}>
            The Family Cafe
          </span>
        </p>

        {/* INSTAGRAM LOGO AND LINK */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href={"https://www.instagram.com/thefamilycafe.pk/"}
            aria-label="See us on instagram"
            target="_blank"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
