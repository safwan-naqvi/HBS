"use client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  cursorAnimation,
} from "@/plugins";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import { hoverBtn } from "@/utils/hover-btn";
import { imageRevealAnimation } from "@/utils/image-reveal-anim";
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import ProjectGallery from "./project-gallery";

const OurWorkContent = () => {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      imageRevealAnimation();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          {/* portfolio hero */}
          <div
            className="tm-hero-area tm-hero-ptb bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/assets/img/inner-project/hero/hero-bg.jpg)",
            }}
          >
            <div className="max-w-[1200px] mx-auto px-4">
              <div className="grid grid-cols-12">
                <div className="col-span-12">
                  <div className="tm-hero-content">
                    <span className="tm-hero-subtitle">HashBitStudio</span>
                    <h4 className="tm-hero-title tp-char-animation tracking-normal">
                      Our latest & <br />{" "}
                      <span className="font-bold">Great Projects</span>
                    </h4>
                  </div>
                  <div className="tm-hero-text">
                    <p className="tp_title_anim">
                      We&apos;re a diverse team that works as fancies attention
                      to details and aspires to design the dent in the universe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* portfolio hero */}

          {/* portfolio area */}
          <ProjectGallery style_2={true} />
          {/* portfolio area */}
        </main>
      </div>
    </div>
  );
};

export default OurWorkContent;
