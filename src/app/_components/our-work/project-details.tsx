"use client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import ProjectDetailsMain from "./project-details-main";

const PortfolioDetailsThreeMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          {/* portfolio details area */}
          <ProjectDetailsMain />
          {/* portfolio details area */}
        </main>
      </div>
    </div>
  );
};

export default PortfolioDetailsThreeMain;
