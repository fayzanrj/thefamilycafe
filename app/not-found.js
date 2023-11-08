import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full min-h-[78svh] h-fit relative">
      <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-lg">
          oh snap, I think we forgot to
          <br />
          <span className="text-3xl text-[#ED558E]"> CREATE THIS PAGE!!</span>
          <br />
          Let us work on it. Meawhile, you can visit these pages
        </h1>
        <h3 className="mt-5">
          Want to see out art?{" "}
          <Link href={"/"} className="text-lg text-[#ED558E]">
            Home&#8594;
          </Link>
        </h3>
        <h3 className="mt-2">
          Want to buy a cake?{" "}
          <Link href={"/cakes"} className="text-lg text-[#ED558E]">
            Cakes Section&#8594;
          </Link>
        </h3>
        <h3 className="mt-2">
          Want to buy some cupcakes?{" "}
          <Link href={"/cupcakes"} className="text-lg text-[#ED558E]">
            Cupcakes Section&#8594;
          </Link>
        </h3>
        <h3 className="mt-2">
          Want to follow us?{" "}
          <Link href={"/connect"} className="text-lg text-[#ED558E]">
            Connect with us&#8594;
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default NotFound;
