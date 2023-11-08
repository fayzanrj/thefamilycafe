import ItemCard from "@/components/ItemCard";
import React from "react";
import NoDataFound from "@/components/NoDataFound";
import { Galada } from "next/font/google";

// FONT FOR HEADING
const galada = Galada({ weight: "400", subsets: ["latin"] });

// HEADERS FOR API REQUEST
const headers = {
  "Content-Type": "application/json",
  api_key: process.env.API_KEY,
};

const Search = async ({ params }) => {
  // API FETCH REQUEST
  const response = await fetch(
    `${process.env.HOST}/api/search/${params.query}`,
    { cache: "no-cache", headers : headers}
  );
  const res = await response.json();
  const products = res.products;


  if (!products || products.length <= 0) {
    return <NoDataFound keyword={params.query} type={"search"} />;
  }

  return (
    <div className="w-full min-h-[78svh] h-fit pt-5 pb-10 sm:px-10 ">
      {/* HEADING */}
      <div className="w-full text-center mb-3">
        <h1 className={`text 2xl font-bold mx-auto`}>
          Search Results for{" "}
          <span className={`${galada.className} text-4xl text-[#ED558E]`}>
            &#x22;{params.query}&#x22;
          </span>
        </h1>
      </div>
      {/* FOUNDED PRODUCTS */}
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
              isBestSelling={item.isBestSelling}
              isAvailable={item.isAvailable}
              canPickIn={item.canPickIn}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Search;


export const dynamic = 'force-dynamic'
