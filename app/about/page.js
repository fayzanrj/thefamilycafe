import { Galada } from "next/font/google";
import React from "react";

// FONT FOR HEADING 
const galada = Galada({ weight: "400", subsets: ["latin"] });

// METADATAA
export const metadata = {
  title: "About Us - The Family Cafe",
  description:
    "At The Family Cafe, we're not just a kitchen; we're a culinary story, committed to delivering a taste of home to your doorstep.",
    alternates: {
      canonical: "/about",
    },
};


const AboutUs = () => {
  return (
    <div className="w-full min-h-[78svh] h-fit pt-5 pb-10 sm:px-10 ">
      {/* HEADING */}
      <div className="w-full text-center mb-3">
        <h1
          className={`${galada.className} text-3xl text-[#ED558E] font-bold mx-auto`}
        >
          About Us
        </h1>
        {/* PAGE DATA */}
        <div className="flex justify-center items-center flex-col mt-4  md:mt-20 font-semibold text-lg">
          <p className="w-[90%] sm:w-[75%] lg:w-[50%]">
            The Family Cafe&#44; your local food haven in Taxila&#44;
            Punjab&#44; Pakistan&#46; We&#39;re dedicated to delivering
            mouthwatering desserts right to your doorstep&#46; Made with high
            quality ingredients&#44; our menu is crafted with love&#46;
            Experience the convenience of our delivery service&#44; bringing
            flavors from our kitchen to your home&#46; We also offer
            takeway&#44; so you can take our delicious deserts to your loved
            ones&#46;
          </p>
          <p className="w-[90%] sm:w-[75%] lg:w-[50%] font-semibold text-lg">
            At The Family Cafe&#44; we&#39;re committed to providing a seamless
            dining experience without leaving your home&#46; Our carefully
            curated menu ensures you enjoy a number of delicious options&#44;
            all delivered promptly to your door&#46; We take pride in serving
            the Taxila community with warmth and flavor&#46;
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
