import React from "react";

const NoDataFound = ({ keyword, type }) => {
  let text;
  if (type === "search") {
    text = (
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl">
        Sorry, no products was found for{" "}
        <span className="text-3xl text-[#ED558E]">{keyword}</span>
      </h1>
    );
  } else {
    text = (
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        Sorry, no <span className="text-4xl text-[#ED558E]">{keyword}</span>{" "}
        were found
      </h1>
    );
  }
  return (
    <div className="w-full min-h-[78svh] h-fit py-10 sm:px-10">{text}</div>
  );
};

export default NoDataFound;
