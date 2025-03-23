"use client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import BrandOne from "@/components/brand/brand-one";

// images

// animation
import HeroBannerOne from "@/components/hero-banner/hero-banner-one";
import { LeadForm } from "@/components/leadform/LeadForm";
import Portfolio from "@/components/PortfolioShowcase/portfolio-gallery";
import ProjectOne from "@/components/project/project-one";
import ServiceOne from "@/components/service/service-one";
import TeamOne from "@/components/team/team-one";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import VideOne from "@/components/video/video-one";
import { footerTwoAnimation } from "@/utils/footer-anim";
import { hoverBtn } from "@/utils/hover-btn";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import {
  bounceAnimation,
  charAnimation,
  fadeAnimation,
} from "@/utils/title-animation";
import { videoAnimOne } from "@/utils/video-anim";
import Image from "next/image";

const Homepage = () => {
  useScrollSmooth();
  useGSAP(() => {
    const timer = setTimeout(() => {
      videoAnimOne();
      // portfolio image wrap
      gsap.timeline({
        scrollTrigger: {
          trigger: ".tp-project-full-img-wrap",
          start: "top 0%",
          end: "bottom 0%",
          pin: ".tp-project-full-img",
          pinSpacing: false,
        },
      });
      // team marquee
      teamMarqueAnim();
      hoverBtn();
      footerTwoAnimation();
      fadeAnimation();
      charAnimation();
      bounceAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <main>
      <HeroBannerOne />
      <VideOne />
      <BrandOne />
      <section className="section-wrapper">
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-3 lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 place-content-center">
                <div className="img1 mb-12 md:mb-2 p-6">
                  <img src="/arw2.png" alt="" />
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex items-start justify-center flex-col h-full">
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-normal tp_fade_bottom">
                    We believe in the power of{" "}
                    <span className="!font-gilroy font-light block">
                      individual
                    </span>
                    <span className="font-gilroy font-light">
                      contribution.
                    </span>
                  </h3>
                  <p className="text-lg font-neue mt-7 tp_fade_bottom">
                    We back the founders of new forms of network, digital
                    organisations that harness the talents of individuals for
                    the benefit of the collective.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-8">
              <div className="col-span-1">
                <div className="item border-t border-[#ececec] flex items-end mt-14 md:mt-2 lg:mt-20 pt-6 tp_fade_bottom">
                  <div>
                    <h3 className="fw-300 mb-4 font-neue text-3xl">100%</h3>
                    <h6 className="p-color sub-title">Clients Satisfaction</h6>
                  </div>
                  <div className="ml-auto">
                    <div className="h-[40px] w-[40px]">
                      <img src="/arrow1.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="item border-t border-[#ececec] flex items-end mt-2 lg:mt-20 pt-6 tp_fade_bottom">
                  <div>
                    <h3 className="fw-300 mb-4 font-neue text-3xl">5</h3>
                    <h6 className="p-color sub-title">Projects Completed</h6>
                  </div>
                  <div className="ml-auto">
                    <div className="h-[40px] w-[40px]">
                      <img src="/arrow1.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 h-full mt-20 md:mt-0">
            <img src="/04.jpg" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <ServiceOne />
      <ProjectOne />
      <Portfolio />
      <TeamOne />
      <TestimonialOne />
      <div className="relative grid grid-cols-1 md:grid-cols-2 w-full gap-20 px-10 lg:px-20 text-white pt-40 pb-40 gradient-wave shadow-sm bg-[#f7f6f6]">
        <div className="z-50">
          <h2 className="text-[#111] text-3xl md:text-7xl font-semibold">
            Have a Project Idea?
          </h2>
          <p className="mt-4 text-xl">
            We&apos;ll schedule a call to discuss your idea. After discovery
            sessions, we&apos;ll send a proposal, and upon approval, we&apos;ll
            get started.
          </p>
          <div className="mt-8 py-6 px-8 max-w-96 rounded-2xl shadow-sm text-[#222] bg-[#a4a4a4] flex flex-col items-start gap-8 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
            <span className="text-2xl font-bold">
              Not Interested to submit the form?
            </span>
            <div className="flex items-center justify-between w-full">
              <Image
                src={"/assets/img/team/meeting.webp"}
                height={40}
                width={100}
                alt="Meeting CTA HBS"
              />
              <button className="rounded-full px-6 py-4 bg-[#1769ba] hover:bg-[#419ffc] font-gilroy font-semibold self-end text-white">
                Book A Call Directly
              </button>
            </div>
          </div>
        </div>
        <div className="z-50">
          <LeadForm />
        </div>
      </div>
      {/*     <AwardOne />
            <Portfolio /> */}
    </main>
  );
};

export default Homepage;
