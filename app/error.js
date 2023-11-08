"use client";
import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <div className="w-full min-h-[78svh] h-fit">
      <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p>
          I guess somebody just ran into a{" "}
          <span className="text-2xl text-[#ED558E]">PROBLEM</span>
        </p>
        <p>
          Ah, that somebody is{" "}
          <span className="text-2xl text-[#ED558E]">US</span>
        </p>
        <p className="mt-2">Do you mind coming back at a later time?</p>
        <p>Or maybe just yk, just refresh the page</p>
        <button
          className="bg-[#ED558E] text-white py-2 px-5 mt-2 rounded-md"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
        <Link href={"/"} className="text-lg text-[#ED558E]">
          <h3 className="mt-5">Home &#8594;</h3>
        </Link>
      </div>
    </div>
  );
};

export default error;
