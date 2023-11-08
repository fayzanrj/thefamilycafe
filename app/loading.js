import Image from "next/image";
import React from "react";
import logo from "@/public/logo/logo.jpg";

const loading = () => {
  return (
    <div className="min-h-[78svh] h-fit bg-white flex justify-center items-center">
      <Image quality={100} src={logo} width={200} height={200} alt="logo" />
    </div>
  );
};

export default loading;
