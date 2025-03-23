"use client";
import Icons from "@/icons/IconSet";
import { footerOneAnimation } from "@/utils/footer-anim";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const footer_links = [
  { link: "/portfolio-details-1", title: "Projects" },
  { link: "/service", title: "What we do" },
  { link: "/about-us", title: "About" },
  { link: "/blog-modern", title: "Blog" },
  { link: "/contact", title: "Contact" },
];
export default function Footer() {
  const [isActive, setIsActive] = React.useState(false);
  useEffect(() => {
    footerOneAnimation();
  }, []);
  return (
    <footer>
      {/* footer area start */}
      <div className="tp-footer-area black-bg pt-12 px-10 lg:px-0">
        <div className="container-fluid overflow-hidden">
          <div className="tp-footer-wrap">
            <div className="grid grid-cols-12 gap-10 place-items-start overflow-hidden">
              <div className="col-span-full lg:col-span-6">
                <div className="tp-footer-middle-wrap">
                  <div className="max-w-lg">
                    <Image
                      src={"/hbs-footer.png"}
                      alt="Hashbitstudio Footer"
                      height={200}
                      width={500}
                      priority
                      quality={100}
                      className="h-14 w-auto"
                    />
                    <p className="text-sm text-[#ccc]">
                      An Experience Design Agency focusing on building
                      functional, simple, human-centered digital products for
                      future.
                    </p>
                  </div>
                  <div className="tp-footer-content mt-10">
                    <h4 className="tp-footer-big-title footer-big-text">
                      {"Let's"} Connect!
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-span-full lg:col-span-6 w-full lg:px-0">
                <h3 className="text-lg text-white uppercase font-syne">
                  Explore HBS
                </h3>
                <div className="tp-footer-menu menu-anim mt-8">
                  <ul className="counter-row tp-text-anim">
                    {footer_links.map((item, i) => (
                      <li
                        key={i}
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        className={isActive ? "" : "active"}
                      >
                        <a href={item.link}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* <div className="col-span-full py-4 absolute bottom-0">
                <img src="/hbs.png" alt="" className="opacity-5" />
              </div> */}
            </div>
          </div>
        </div>
        {/* footer area end */}

        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between px-0 lg:px-12 relative z-10 bg-transparent lg:bg-[#202020] py-8">
          <div className="flex flex-col justify-start items-start gap-4">
            <div>
              <h4 className="font-syne uppercase tracking-[1px] text-primary tp_fade_bottom text-sm">
                Say hello at:
              </h4>
              <div className="tp-footer-widget-info">
                <div className="tp-footer-widget-info-mail tp_fade_bottom !text-lg">
                  <a href="mailto:hello@hashbitstudio.com">
                    hello@hashbitstudio.com
                  </a>
                </div>
              </div>
            </div>
            <div className="tp-footer-widget flex items-center gap-8">
              {/* <h4 className="tp-footer-title tp_fade_bottom font-bold">
                Social:
              </h4> */}
              <ul className="tp-footer-widget-social">
                <li className="tp_fade_bottom">
                  <a href="#">Facebook</a>
                </li>
                <li className="tp_fade_bottom">
                  <a href="#">Instagram</a>
                </li>
                <li className="tp_fade_bottom">
                  <a href="#">Behance</a>
                </li>
                <li className="tp_fade_bottom">
                  <a href="#">Dribbble</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tp-footer-widget-info-location tp_fade_bottom flex items-center gap-4">
            <Icons.Islamabad />
            <div className="flex flex-col items-start">
              <a
                href="https://www.google.com/maps/@54.581385,-101.7562167,7.5z?entry=ttu"
                target="_blank"
                className="font-gilroy !font-bold"
              >
                Islamabad, Pakistan
              </a>
              <a href="tel:+923395551212" className="font">
                (+92)-339-5551212
              </a>
            </div>
          </div>
        </div>

        {/* copyright area start */}
        <div className="container w-full mx-auto py-10 lg:py-0 ">
          <div className="tp-copyright-wrap">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
              <div className="col-span-1">
                <div className="tp-copyright-logo">
                  <Link href={"/"}>
                    <button className="flex items-center justify-start gap-3">
                      <Icons.Download
                        className="bg-primary h-10 w-10 rounded-full p-2"
                        color="white"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <span className="text-white text-xl">Company Deck</span>
                        <span className="">PDF, 3MB</span>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-span-1">
                <div className="tp-copyright-text text-center text-md-end">
                  <p>
                    Copyright © {new Date().getFullYear()} HashBitStudio. All
                    rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <ul className="flex items-center justify-end gap-4 text-white text-sm">
                  <li className="tp_fade_bottom">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="tp_fade_bottom">
                    <a href="#">Terms and Condition</a>
                  </li>
                  <li className="tp_fade_bottom">
                    <a href="#">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* copyright area end */}
      </div>
      {/* footer area start */}
    </footer>
  );
}
