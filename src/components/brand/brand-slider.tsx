"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images

const brand_images = [
  "/assets/img/home-01/brand/brand-1.png",
  "/assets/img/home-01/brand/brand-2.png",
  "/assets/img/home-01/brand/brand-3.png",
  "/assets/img/home-01/brand/brand-4.png",
  "/assets/img/home-01/brand/brand-5.png",
  "/assets/img/home-01/brand/brand-6.png",
  "/assets/img/home-01/brand/brand-7.png",
  "/assets/img/home-01/brand/brand-2.png",
  "/assets/img/home-01/brand/brand-1.png",
  "/assets/img/home-01/brand/brand-2.png",
  "/assets/img/home-01/brand/brand-3.png",
  "/assets/img/home-01/brand/brand-4.png",
  "/assets/img/home-01/brand/brand-5.png",
  "/assets/img/home-01/brand/brand-6.png",
  "/assets/img/home-01/brand/brand-7.png",
  "/assets/img/home-01/brand/brand-2.png",
];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee speed={100} loop={0} className="brand-wrapper">
        {brand_images.map((b, i) => (
          <div
            key={i}
            className="tp-brand-item"
            style={{ height: "auto", width: "200px" }}
          >
            <img src={b} alt="" />
          </div>
        ))}
      </Marquee>
      {/* <Swiper
        {...slider_setting}
        modules={[Autoplay, FreeMode]}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="tp-brand-item">
              <img src={b} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
