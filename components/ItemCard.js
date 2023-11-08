import Image from "next/image";
import React from "react";
import { Ysabeau_SC } from "next/font/google";
import { MdDeliveryDining } from "react-icons/md";

// FONT FOR PRODUCT'S TITLE
const titleFont = Ysabeau_SC({ weight: "600", subsets: ["latin"] });

const ItemCard = ({
  img,
  title,
  category,
  price,
  desc,
  weight,
  isBestSelling,
  isAvailable,
  canPickIn,
}) => {
  return (
    <div className="w-[90%] sm:w-64 min-h-[34rem] sm:max-h-[34rem] h-fit overflow-hidden ">
      {/* IMAGE , AVAILABILITY AND BEST SELLING DIV */}
      <div className="w-[85vw] h-[85vw] sm:w-64 sm:h-64 m-auto rounded-lg overflow-hidden relative">
        <Image src={img} fill alt="product" loading="lazy" />
        {!isAvailable && (
          <span className="absolute py-1 px-2 top-1 left-2 text-white bg-gray-800 ">
            Unavailable
          </span>
        )}
        {isBestSelling && (
          <span className="absolute py-1 px-2 bottom-1 left-2 text-white bg-red-600 ">
            Best Selling
          </span>
        )}
      </div>

      {/* INFO DIV */}
      <div className="p-2">
        {/* PRODUCT TITLE */}
        <h2
          className={`${titleFont.className} text-3xl sm:text-2xl font-extrabold sm:whitespace-nowrap`}
        >
          {title}
        </h2>
        
        {/* PRODUCT CATGORY */}
        <h3 className="text-sm text-gray-600 my-1">{category}</h3>

        {/* PRODUCT WEIGHT & PRODUCT DELIVERY/PICKUP TIME */}
        <div className="flex justify-between items-center">
          <h5 className="text-lg">{weight}</h5>
          <div>
            <MdDeliveryDining className="inline" size={"1.3rem"} />{" "}
            <h5 className="text-lg inline">{canPickIn}</h5>
          </div>
        </div>

        {/* PRODUCT DESCRIPTION */}
        <p className="text-sm my-1 font-sans min-h-[6.3rem]  h-[6.3rem] overflow-hidden">
          {desc}
        </p>

        {/* PRODUCT PRICE */}
        <p className="text-xl font-bold mb-2 text-[#ED558E]">Rs.{price}/-</p>

        {/* ORDER NOW WITH WHATSAPP LINK */}
        <a
          href={`https://wa.me/923275007162?text=${encodeURIComponent(
            `I would like to buy your ${title} (${weight}) `
          )}`}
        >
          <button className="w-full py-2 px-4 text-white bg-[#ED558E] rounded-3xl mt-2">
            Order Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default ItemCard;
