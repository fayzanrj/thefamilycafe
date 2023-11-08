"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

const Current = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    isOpen && (
      <div className="w-[16rem] p-4 bg-white shadow-lg drop-shadow-xl rounded-md">
        <div className="w-full relative h-4">
          <p className="absolute right-0 cursor-pointer" onClick={() => setIsOpen(false)}>
            <GrClose size={"1.2rem"} />
          </p>
        </div>
        <p>
          As of now we are only serving in{" "}
          <span className="text-[#ED558E] font-bold">
            Taxila, Punjab, Pakistan
          </span>{" "}
          and only taking orders through our{" "}
          <span className="text-[#ED558E] font-bold">
            {" "}
            WHATSAPP AND INSTAGRAM.
          </span>{" "}
          Clicking on{" "}
          <span className="text-[#ED558E] font-bold">Order Now</span> will
          redirect you to our whatsapp. For contact, you can visit our <Link href={'/connect'} className="text-[#ED558E] font-bold underline" onClick={() => setIsOpen(false)}>CONNECT</Link> page. Thank you for visiting.
        </p>
      </div>
    )
  );
};

export default Current;
