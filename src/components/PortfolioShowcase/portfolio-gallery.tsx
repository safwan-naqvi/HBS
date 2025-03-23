"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const containerRef = useRef<HTMLElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    if (!containerRef.current) return;

    itemsRef.current.forEach((item, index) => {
      if (!item) return;

      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    itemsRef.current.forEach((el) => {
      if (!el) return;

      // Start as a full rectangle
      gsap.set(el, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });

      el.addEventListener("mouseenter", () => {
        // Timeline for hover in
        const tl = gsap.timeline();
        // Animate the same element at the same time by using a single timeline
        tl.to(
          el,
          {
            duration: 0.5,
            clipPath: "polygon(8% 6%, 100% 0%, 100% 99%, 8% 95%)",
            ease: "power2.out",
          },
          0 // Start at time 0
        ).to(
          el.querySelector("img"),
          {
            duration: 0.1,
            scale: 1.1,
            ease: "power2.out",
          },
          0 // Also start at time 0, so they're in sync
        );
      });

      el.addEventListener("mouseleave", () => {
        // Timeline for hover out
        const tl = gsap.timeline();
        tl.to(
          el,
          {
            duration: 0.5,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power2.out",
          },
          0
        ).to(
          el.querySelector("img"),
          {
            duration: 0.1,
            scale: 1,
            ease: "power2.out",
          },
          0
        );
      });
    });

    // Cleanup
    return () => {
      itemsRef.current.forEach((el) => {
        if (el) {
          el.removeEventListener("mouseenter", () => {});
          el.removeEventListener("mouseleave", () => {});
        }
      });
    };
  }, []);

  const portfolios = [
    {
      id: 1,
      category: "Web Design",
      href: "/",
      title: "Figma Digital Agency",
      image: "/assets/img/works/grid/1.jpg",
      classes: "lg:col-span-6 lg:p-10",
    },
    {
      id: 2,
      category: "Web Design",
      href: "/",
      title: "Figma Digital Agency",
      image: "/assets/img/works/grid/2.jpg",
      classes: "lg:col-span-6 lg:p-10",
    },
    {
      id: 3,
      category: "Web Design",
      href: "/",
      title: "Figma Digital Agency",
      image: "/assets/img/works/grid/3.jpg",
      classes: "lg:col-span-12 lg:p-20",
    },
    {
      id: 4,
      category: "Web Design",
      title: "Figma Digital Agency",
      href: "/",
      image: "/assets/img/works/grid/4.jpg",
      classes: "lg:col-span-6 lg:p-10",
    },
    {
      id: 5,
      category: "Web Design",
      title: "Figma Digital Agency",
      href: "/",
      image: "/assets/img/works/grid/5.jpg",
      classes: "lg:col-span-6 lg:p-10",
    },
    {
      id: 6,
      category: "Web Design",
      title: "Figma Digital Agency",
      href: "/",
      image: "/assets/img/works/grid/6.jpg",
      classes: "lg:col-span-12 lg:p-20",
    },
  ];

  return (
    <section ref={containerRef} className="py-60 w-full bg-black">
      <div className="max-w-7xl mx-auto w-full px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-white w-full">
          {portfolios.map((portfolio, index) => (
            <Link
              href={portfolio.href}
              key={portfolio.id}
              className={cn(`portfolio-item`, portfolio.classes)}
            >
              <div className="w-full group">
                <div
                  ref={(el) => {
                    if (el) {
                      itemsRef.current[index] = el as HTMLDivElement;
                    }
                  }}
                  className="img overflow-hidden"
                >
                  <img
                    src={portfolio.image}
                    alt={`Portfolio item ${index}`}
                    className="transition-transform duration-500 w-full"
                  />
                </div>
                <div className="font-neue !w-full mt-4">
                  <div className="flex flex-col items-start">
                    <span className=" text-neutral-500 mb-5 sub-title">
                      {portfolio.category}
                    </span>
                    <div
                      className="py-5 w-full relative before:absolute before:bg-[#ededed] before:h-[1px] before:w-full before:top-0 before:left-0 before:opacity-15
             after:absolute after:bg-[#f3f3f3] after:h-[1px] after:w-0 after:top-0 after:left-1/2 after:-translate-x-1/2 after:opacity-55 
             after:transition-all after:duration-500 after:ease-in-out
             group-hover:after:w-full flex items-center justify-between"
                    >
                      <h6 className="font-light text-2xl md:text-3xl xl:text-5xl text-[#eee]">
                        {portfolio.title}
                      </h6>
                      <div className="shrink-0 relative h-10 w-10 lg:h-16 lg:w-16 bg-transparent overflow-hidden cursor-pointer mt-3 rounded-full group">
                        <div className="absolute flex flex-col items-center justify-between transition-transform group-hover:-translate-y-[40px] lg:group-hover:-translate-y-[64px]">
                          <div className="text-lg shrink-0 bg-white rounded-full h-10 w-10 lg:h-16 lg:w-16 flex items-center justify-center">
                            <GoArrowUpRight className="h-8 w-8 lg:h-10 lg:w-10 text-black" />
                          </div>
                          <div className="flex shrink-0 items-center justify-center rounded-full h-10 w-10 lg:h-16 lg:w-16 p-2 bg-primary">
                            <GoArrowUpRight className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
