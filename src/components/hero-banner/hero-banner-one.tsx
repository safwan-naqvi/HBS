"use client";
import { fadeAnimation } from "@/utils/title-animation";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowBg, RightArrowTwo } from "../svg";

const HeroBannerOne = () => {
  useGSAP(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        fadeAnimation();
      }, 100);
    }
  }, {});
  return (
    <div className="tp-hero-area tp-hero-ptb main-slider min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto">
        <div className="tp-hero-title-wrap mb-10 relative">
          <div className="tp-hero-shape-1 h-60 w-auto">
            <img
              src="/assets/img/home-01/hero/hero-bg-shape-1-1.svg"
              alt="shape"
              width={790}
              height={700}
              style={{ height: "auto" }}
              className="object-contain"
            />
          </div>
          <div className="tp-hero-title-box text-center relative">
            <h1 className="tp-hero-title tp_fade_bottom inline-block">
              <span className="relative">
                Creative
                <span className="tp-hero-subtitle hidden lg:block font-gilroy">
                  Hi There
                  <br /> We&apos;re
                </span>
                <span className="tp-hero-shape-2 hidden md:inline-block">
                  <img
                    src="/assets/img/home-01/hero/hero-shape-1-1.png"
                    alt="shape"
                    width={40}
                    height={40}
                  />
                </span>
              </span>
              <br />
              <span className="flex flex-col lg:flex-row items-center gap-2">
                Digital
                <span className="inline-block">
                  <img
                    className="tp-zoom-img"
                    src="/assets/img/home-01/hero/hero-1-1.png"
                    alt="hero-img"
                    width={270}
                    height={160}
                    style={{ height: "120px", width: "auto" }}
                  />
                </span>
                Studio
              </span>
            </h1>
          </div>
        </div>
        <div className="tp-hero-content tp_fade_bottom text-center">
          <span className="tp-hero-3-category tp_reveal_anim font-gilroy">
            ux/ui design / branding / development / AI
          </span>
          <Link
            className="tp-btn-black-2 group font-gilroy mx-auto"
            href="/contact"
          >
            Let&apos;s Connect
            <span className="relative">
              <RightArrowTwo />
              <ArrowBg />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerOne;
