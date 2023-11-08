import FeedbackForm from "@/components/FeedbackForm";
import { Galada } from "next/font/google";
import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

// FONT FOR HEADING
const galada = Galada({ weight: "400", subsets: ["latin"] });

// METADATA
export const metadata = {
  title: "Connect - The Family Cafe",
  description:
    "Let's Connect! Share thoughts, questions, or special requests. We're here to personalize your experience. Reach out today, let's chat!",
};

const Connect = () => {
  return (
    <div className="w-full min-h-[78svh] h-fit pt-5 pb-10 sm:px-10 ">
      {/* HEADING */}
      <div className="w-full text-center mb-3">
        <h1
          className={`${galada.className} text-3xl text-[#ED558E] font-bold mx-auto`}
        >
          CONNECT WITH US
        </h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-20">
        {/* SECTION#1 */}
        <section className="w-[90%] text-center sm:text-left sm:w-96  h-fit">

          {/* INSTAGRAM LINK */}
          <div className="my-8">
            <h3 className="font-semibold">
              Heard you want to{" "}
              <span className="text-[#ED558E] font-bold">FOLLOW US?</span>
            </h3>
            <a
              href={"https://www.instagram.com/thefamilycafe.pk/"}
              target="_blank"
              className="pl-2"
            >
              <FaInstagramSquare size={"3rem"} className="inline-block" />{" "}
              <p className="inline-block">
                /{" "}
                <span className="underline-offset-4 underline">
                  thefamilycafe.pk
                </span>
              </p>
            </a>
          </div>

          {/* WHATSAPP LINK */}
          <div className="my-8">
            <h3 className="font-semibold">
              Got any{" "}
              <span className="text-[#ED558E] font-bold">QUERIES? </span>
              <br />
              CLICK ON THE NUMBER!
            </h3>
            <a
              href={`https://wa.me/923275007162?text=${encodeURIComponent(
                `Hey there, I got a query`
              )}`}
              className="pl-2"
            >
              <IoLogoWhatsapp size={"3rem"} className="inline-block" />{" "}
              <p className="inline-block">
                /{" "}
                <span className="underline-offset-8 underline">
                  +923275007162
                </span>
              </p>
            </a>
          </div>
        </section>

        {/* SECTION#2 */}
        <section className="text-center w-[90%] sm:w-96 min-h-[24rem] h-fit p-3 relative">
          <FeedbackForm />
        </section>
      </div>
    </div>
  );
};

export default Connect;
