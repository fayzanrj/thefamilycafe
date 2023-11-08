import Slider from "@/components/Slider";
import { Niconne } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

// FONT
const niconne = Niconne({ weight: "400", subsets: ["latin"] });

// ART PICS LINKS ARRAY
const art = [
  "https://res.cloudinary.com/drdvln0ms/image/upload/v1699368673/art/mj9jbpvbmf9r4vjtnufr.jpg",
  "https://res.cloudinary.com/drdvln0ms/image/upload/v1699368686/art/yqcazagy1reriyvz5a98.jpg",
  "https://res.cloudinary.com/drdvln0ms/image/upload/v1699368674/art/y2zefdk6stfljqgdmnox.jpg",
  "https://res.cloudinary.com/drdvln0ms/image/upload/v1699368677/art/uhkupkeifodcdmtelh2x.jpg",
  "https://res.cloudinary.com/drdvln0ms/image/upload/v1699368682/art/utbeoddpnata9yarzxuw.jpg",
  "https://res.cloudinary.com/drdvln0ms/image/upload/v1699368691/art/wbqxjgoaldtqhf1ow4pp.jpg",
];

// CUPCAKES PICS LINKS ARRAY
const cupcakes = [
  "https://res.cloudinary.com/drdvln0ms/image/upload/v1699370709/cupcakes/hllrblbgioeubngmmrtn.jpg",
  "https://res.cloudinary.com/drdvln0ms/image/upload/v1699370711/cupcakes/o2b2ej9d8yjgmmeljeh1.jpg",
];

export default function Home() {
  return (
    <main className="min-h-[78svh]">
      {/* HEADERS FOR SCREEN READERS */}
      <h1 className="sr-only">The Family Cafe</h1>
      <h2 className="sr-only">We provide cakes and cupcakes</h2>

      {/* CAKE SECTION */}
      <section
        id="cake-sec"
        className="w-full min-h-[88svh] h-fit py-12 px-4 flex flex-wrap justify-center items-center gap-4"
      >
        <div className="w-96 min-h-[24rem] h-fit p-2">
          <p className={`${niconne.className} text-[#ED558E]`}>
            The Family Cafe - Your local food haven
          </p>
          <h3 className="text-4xl font-bold my-2">
            We provide <span className="text-[#ED558E]">CAKES</span>, actually
            the <span className="text-[#ED558E]">BEST ONES</span>
          </h3>
          <p>
            Freshly cooked with fresh ingredients by our{" "}
            <span className="text-[#ED558E] font-semibold italic">
              most professional chef with authentic taste.{" "}
            </span>
            You are definitely gonna love our desserts.
          </p>

          <div className="mt-6">
            {/* WHATSAPP LINK */}
            <a
              href={`https://wa.me/923275007162?text=${encodeURIComponent(
                `I would like to buy a cake`
              )}`}
              aria-label="order a cake"
            >
              <button className="py-2 px-3 bg-[#ED558E] text-white rounded-md">
                Order Now
              </button>
            </a>

            {/* CAKES PAGE LINK */}
            <Link href={"/cakes"}>
              <button className="ml-6">See More Cakes&#8594;</button>
            </Link>
          </div>
        </div>

        {/* IMAGE SIDER / CAROUSEL */}
        <div className="w-96 h-96 relative z-10 rounded-xl overflow-hidden">
          <Slider />
        </div>
      </section>

      {/* CUPCAKE SECTION */}
      <section className="w-full min-h-[24rem] h-fit py-14 px-2 bg-[#ED558E] flex flex-wrap justify-center items-center gap-1 sm:gap-2 md:gap-4">
        {/* IT TAKES 4:5 RATIO PICS*/}
        {/* CUPCAKE IMAGE 1 */}
        <div className="w-44 h-60 sm:w-56 sm:h-72 relative rounded-lg shadow-xl drop-shadow-xl overflow-hidden">
          <Image
            src={cupcakes[0]}
            width={228}
            height={230}
            alt="cupcake"
            loading="lazy"
          />
        </div>
        {/* CUPCAKE IMAGE 2 */}
        <div className="w-44 h-60 sm:w-56 sm:h-72  relative rounded-lg shadow-xl drop-shadow-xl overflow-hidden">
          <Image
            src={cupcakes[1]}
            width={228}
            height={230}
            alt="cupcake"
            loading="lazy"
          />
        </div>
        {/* CUPCAKES TEXT */}
        <div className="w-96 min-h-[18rem] h-fit  p-2">
          <p className={`${niconne.className} text-white`}>The Family Cafe</p>
          <h3 className="text-4xl font-bold my-2">
            We also provide <span className="text-white">CUPCAKES</span>, yk the{" "}
            <span className="text-white">AUTHENTIC ONES</span>
          </h3>
          <p>
            Freshly cooked with fresh ingredients by our{" "}
            <span className="text-white font-semibold italic">
              loveliest chef with some authentic love.{" "}
            </span>
            You are definitely gonna love our desserts.
          </p>
          <div className="mt-2">
            {/* WHATSAPP LINK */}
            <a
              href={`https://wa.me/923275007162?text=${encodeURIComponent(
                `I would like to buy a cake`
              )}`}
              aria-label="order a cupcake"
            >
              <button className="py-2 px-3 bg-black text-white rounded-md">
                Order Now
              </button>
            </a>

            {/* INSTAGRAM LINK */}
            <Link href={"/cupcakes"}>
              <button className="ml-6">See More Cupcakes&#8594;</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full min-h-[100svh] h-fit p-6 text-center relative">
        <div>
          <p className={`${niconne.className} text-[#ED558E]`}>
            The Family Cafe
          </p>
          <h3 className="font-bold text-4xl">
            Like, just take a look at{" "}
            <span className="text-[#ED558E] italic">OUR ART</span>
          </h3>

          <div className="flex justify-center">
            {/* ART GRID */}
            <div className="w-full sm:w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-10 lg:gap-6 mt-10">
              
              {/* ART IMAGE 1 */}
              <div className="w-full text-right sm:w-56 h-56 lg:w-64 lg:h-64 rounded-md relative">
                <div className="w-56 h-56 lg:w-64 lg:h-64  absolute right-0 ">
                  <Image
                    loading="lazy"
                    className="rounded-md"
                    fill
                    src={art[0]}
                    alt="art"
                  />
                </div>
              </div>

              {/* ART IMAGE 2 */}
              <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-md  relative">
                <Image
                  loading="lazy"
                  className="rounded-md"
                  fill
                  src={art[1]}
                  alt="art"
                />
              </div>

              {/* ART IMAGE 3 */}
              <div className="w-full text-right sm:w-56 h-56 lg:w-64 lg:h-64 rounded-md relative">
                <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-md   right-0 absolute">
                  <Image
                    loading="lazy"
                    className="rounded-md"
                    fill
                    src={art[2]}
                    alt="art"
                  />
                </div>
              </div>

              {/* ART IMAGE 4 */}
              <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-md relative">
                <Image
                  loading="lazy"
                  className="rounded-md"
                  fill
                  src={art[3]}
                  alt="art"
                />
              </div>

              {/* ART IMAGE 5 */}
              <div className="w-full text-right sm:w-56 h-56 lg:w-64 lg:h-64 rounded-md relative">
                <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-md  absolute right-0">
                  <Image
                    loading="lazy"
                    className="rounded-md"
                    fill
                    src={art[4]}
                    alt="art"
                  />
                </div>
              </div>

              {/* ART IMAGE 6 */}
              <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-md relative">
                <Image
                  loading="lazy"
                  className="rounded-md"
                  fill
                  src={art[5]}
                  alt="art"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
