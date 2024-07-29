import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img src="https://links.papareact.com/gi1" alt="" />
        </div>
        <div>
          <img src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div>
          <img src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0"></div>
    </div>
  );
}

export default Banner;
