import Current from "@/components/Current";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "The Family Cafe - Your local food haven",
  description:
    "Welcome to The Family Cafe, your home kitchen away from home! Indulge in our delectable homemade dishes, lovingly prepared and delivered right to your doorstep.",
  metadataBase: new URL(process.env.BASE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`font-serif SCROLL_BAR`}>
        <Navbar />
        <div className="w-full min-h-[5rem] h-[12svh]"></div>
        <div className="absolute z-40 top-[14svh] right-1 sm:right-5">
          <Current />
        </div>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
