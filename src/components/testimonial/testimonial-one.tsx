"use client";
import React from "react";
import { NextIcon, PrevIcon } from "../svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

const testimonial_data = [
  {
    id: 1,
    desc: `“Nulla ut enim non magna placerat scelerisque sed eu dolor. Sed eu faucibus
    turpis. Ut bibendum tempor tempus. Ut scelerisque est
    posuere ex pretium laoreet.”`,
    name: "Louis Fantun",
    designation: "Designer",
  },
  {
    id: 2,
    desc: `“Nulla ut enim non magna placerat scelerisque sed eu dolor. Sed eu faucibus
    turpis. Ut bibendum tempor tempus. Ut scelerisque est
    posuere ex pretium laoreet.”`,
    name: "Robert Smith",
    designation: "Developer",
  },
];

const slider_setting: SwiperOptions = {
  slidesPerView: 1,
  loop: true,
  autoplay: { delay: 3000 },
  speed: 1000,
  breakpoints: {
    1400: { slidesPerView: 1 },
    1200: { slidesPerView: 1 },
    992: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    576: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  },
  navigation: {
    prevEl: ".tp-testimonial-prev",
    nextEl: ".tp-testimonial-next",
  },
};

const TestimonialOne = () => {
  return (
    <div className="pb-28">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative">
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between">
            <button className="tp-testimonial-prev h-14 w-14 flex items-center justify-center bg-gray-50 rounded-full">
              <PrevIcon />
            </button>
            <button className="tp-testimonial-next h-14 w-14 flex items-center justify-center bg-gray-50 rounded-full">
              <NextIcon />
            </button>
          </div>
          <Swiper
            {...slider_setting}
            modules={[Navigation]}
            className="swiper-container"
          >
            {testimonial_data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="text-center p-6">
                  <p className="text-gray-700 text-xl">{item.desc}</p>
                  <span className="block mt-4 font-semibold text-gray-900">
                    <em>{item.name}</em> - {item.designation}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
