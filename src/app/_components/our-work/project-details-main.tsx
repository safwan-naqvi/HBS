"use client";
import { Leaf, ScrollDownTwo, UpArrowFour } from "@/components/svg";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { useGSAP } from "@gsap/react";
import { scroller } from "react-scroll";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const slider_images = [
  "/assets/img/inner-project/portfolio-details-3/portfolio-img-5.jpg",
  "/assets/img/inner-project/portfolio-details-3/portfolio-img-6.jpg",
  "/assets/img/inner-project/portfolio-details-3/portfolio-img-6.jpg",
  "/assets/img/inner-project/portfolio-details-3/portfolio-img-7.jpg",
];

const slider_setting: SwiperOptions = {
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  speed: 1000,
  breakpoints: {
    "1400": { slidesPerView: 3 },
    "1200": { slidesPerView: 3 },
    "992": { slidesPerView: 2 },
    "768": { slidesPerView: 2 },
    "576": { slidesPerView: 1 },
    "0": { slidesPerView: 1 },
  },
};

const ProjectDetailsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });
  const scrollTo = () => {
    scroller.scrollTo("xyz", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="tp-project-details-3-top tp-project-details-3-ptb">
          <div className="max-w-[1560px] mx-auto px-4">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="tp-project-details-3-title-box">
                  <h2 className="tp-section-title-160 mb-12 tp-char-animation">
                    Mockups Google Pixel
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <div className="tp-project-details-3-scroll smooth">
                  <a
                    onClick={scrollTo}
                    className="cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>
                      <ScrollDownTwo />
                    </span>
                    Scroll to Explore
                  </a>
                </div>
              </div>
              <div className="mt-8 md:mt-0 text-start md:text-end">
                <a href="#" className="inline-flex items-center gap-2">
                  Visit Website{" "}
                  <span>
                    <UpArrowFour />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* full image */}
        <div className="tp-project-details-3-full-width-thumb mb-28">
          <img
            data-speed=".8"
            src="/assets/img/inner-project/portfolio-details-3/portfolio-img-1.jpg"
            alt="port-img"
          />
        </div>

        {/* details area */}
        <div className="showcase-details-2-area pb-28">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <h4 className="showcase-details-2-section-title tp-char-animation">
                  Daring Colors
                </h4>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="md:col-span-1">
                <span className="ab-inner-subtitle mb-6 flex items-center gap-2">
                  <Leaf /> An introduction
                </span>
              </div>
              <div className="md:col-span-3 tp_title_anim">
                <p className="pb-6">
                  Liko website was using a generic template, felt quite
                  outdated...
                </p>
                <p>
                  Each case study gets its own identity through the styling...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* image block */}
        <div id="xyz" className="tp-project-details-3-thumb mb-28">
          <div className="max-w-[1560px] mx-auto px-4">
            <img
              data-speed=".8"
              src="/assets/img/inner-project/portfolio-details-3/portfolio-img-2.jpg"
              alt="port-img"
            />
          </div>
        </div>

        {/* goal section */}
        <div className="showcase-details-2-area pb-28">
          <div className="max-w-[1200px] mx-auto px-4">
            <h4 className="showcase-details-2-section-title tp-char-animation mb-8">
              The Goal
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <span className="ab-inner-subtitle mb-6 flex items-center gap-2">
                  <Leaf /> An introduction
                </span>
              </div>
              <div className="md:col-span-3 tp_title_anim">
                <p className="pb-6">
                  Liko website was using a generic template, felt quite
                  outdated...
                </p>
                <p>
                  Each case study gets its own identity through the styling...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* double images */}
        <div className="tp-project-details-3-thumb mb-20">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                className="w-full"
                src="/assets/img/inner-project/portfolio-details-3/portfolio-img-3.jpg"
                alt="port-img"
              />
              <img
                className="w-full"
                src="/assets/img/inner-project/portfolio-details-3/portfolio-img-4.jpg"
                alt="port-img"
              />
            </div>
          </div>
        </div>

        {/* repeating goal */}
        <div className="showcase-details-2-area pb-28">
          <div className="max-w-[1200px] mx-auto px-4">
            <h4 className="showcase-details-2-section-title tp-char-animation mb-8">
              The Goal
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <span className="ab-inner-subtitle mb-6 flex items-center gap-2">
                  <Leaf /> An introduction
                </span>
              </div>
              <div className="md:col-span-3 tp_title_anim">
                <p className="pb-6">
                  Liko website was using a generic template, felt quite
                  outdated...
                </p>
                <p>
                  Each case study gets its own identity through the styling...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* slider */}
        <div className="pd-visual-slider-wrap pb-10 overflow-hidden">
          <Swiper
            {...slider_setting}
            modules={[Autoplay]}
            className="swiper-container pd-visual-slider-active"
          >
            {slider_images.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <div className="pd-visual-slider-thumb overflow-hidden">
                  <img src={imgSrc} alt="port-img" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetailsMain;
