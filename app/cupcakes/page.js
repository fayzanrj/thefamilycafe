import ItemCard from "@/components/ItemCard";
import NoDataFound from "@/components/NoDataFound";
import { Galada } from "next/font/google";
import React from "react";

// FONT FOR HEADING
const galada = Galada({ weight: "400", subsets: ["latin"] });

// METADATA
export const metadata = {
  title: "Cupcakes - The Family Cafe",
  description:
    "Explore our heavenly cupcakes, delivered to your door. Order your favorites today for a sweet journey you won't want to miss!",
};

// HEADERS FOR API REQUEST
const headers = {
  "Content-Type": "application/json",
  api_key: process.env.API_KEY,
};

const Cupcakes = async () => {
  // API FETCH REQUEST
  const response = await fetch(
    `${process.env.HOST}/api/getProductByCategory/Cupcakes`,
    { cache: "no-store", headers: headers }
  );
  const res = await response.json();
  const products = res.products;

  // IF PRODUCTS DOESNT EXIST OR THERE ARE NO PRODUCTS
  if (products.length <= 0) {
    return <NoDataFound keyword={"Cupcakes"} type={"category"} />;
  }
  return (
    <div className="w-full min-h-[78svh] h-fit pt-5 pb-10 sm:px-10 ">
      {/* HEADING */}
      <div className="w-full text-center mb-3">
        <h1
          className={`${galada.className} text-6xl text-[#ED558E] font-bold mx-auto`}
        >
          Cupcakes
        </h1>
      </div>
      {/* ALL PRODUCTS */}
      <div className="flex justify-center items-center flex-wrap gap-20">
        {products.map((item, index) => {
          return (
            <ItemCard
              key={index}
              title={item.title}
              desc={item.desc}
              img={item.img}
              category={item.category}
              price={item.price}
              weight={item.weight}
              canPickIn={item.canPickIn}
              isBestSelling={item.isBestSelling}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cupcakes;


export const dynamic = 'force-dynamic'