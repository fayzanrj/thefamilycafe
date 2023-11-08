import ItemCard from "@/components/ItemCard";
import NoDataFound from "@/components/NoDataFound";
import { Galada } from "next/font/google";

// FONT FOR HEADING
const galada = Galada({ weight: "400", subsets: ["latin"] });

// META DATA
export const metadata = {
  title: "Cakes - The Family Cafe",
  description:
    "Delight in homemade cakes, made with love, delivered to your door. Satisfy your sweet cravings with our magical delights! Order now",
};

// HEADERS FOR API REQUEST
const headers = {
  "Content-Type": "application/json",
  api_key: process.env.API_KEY,
};

const Cakes = async () => {
  // API FETCH REQUEST
  const response = await fetch(
    `${process.env.HOST}/api/getProductByCategory/Cakes`,
    { cache: "no-store",  headers : headers}
  );
  const res = await response.json();
  const products = res.products;

  // IF PRODUCTS DOESNT EXIST OR THERE ARE NO PRODUCTS
  if (!products || products.length <= 0) {
    return <NoDataFound keyword={"Cakes"} type={"category"} />;
  }

  return (
    <div className="w-full min-h-[78svh] h-fit pt-5 pb-10 sm:px-10 ">
      {/* HEADING */}
      <div className="w-full text-center mb-3">
        <h1
          className={`${galada.className} text-6xl text-[#ED558E] font-bold mx-auto`}
        >
          CAKES
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

export default Cakes;


export const dynamic = 'force-dynamic'