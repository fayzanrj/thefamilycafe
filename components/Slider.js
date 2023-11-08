"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// CAROUSEL PICS LINKS ARRAY
const carousel = [
  "https://res.cloudinary.com/drdvln0ms/image/upload/v1699370229/carousel/okshzejajfx0zcvfqesv.jpg",
  "https://res.cloudinary.com/drdvln0ms/image/upload/v1699369845/carousel/th4tquegle3i9w3ekyxd.jpg",
  "https://res.cloudinary.com/drdvln0ms/image/upload/v1699369848/carousel/he6w43mq1ucbxbwk4xvk.jpg",
];

export default function Slider() {
  return (
    <Carousel
      className="rounded-xl shadow-xl drop-shadow-xl overflow-hidden"
      showArrows={true}
      swipeable={true}
      autoPlay={true}
      interval={3000}
      showIndicators={false}
      showStatus={false}
      infiniteLoop={true}
      showThumbs={false}
    >
      {carousel.map((item, index) => {
        return (
          <div key={index} className="relative">
            <Image
              src={item}
              width={500}
              height={500}
              alt="cake"
              className="rounded-xl "
            />
          </div>
        );
      })}
    </Carousel>
  );
}
