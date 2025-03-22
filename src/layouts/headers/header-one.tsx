"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import useSticky from "@/hooks/use-sticky";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";

const HeaderOne = () => {
  const { sticky, headerRef, headerFullWidth } = useSticky();
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="tp-header-height" ref={headerRef}>
        <div
          id="header-sticky"
          className={`tp-header-area tp-header-mob-space tp-transparent pl-60 pr-60 z-index-9 ${
            sticky ? "header-sticky" : ""
          }`}
        >
          <div className="grid grid-cols-12 w-full items-center">
            <div className="col-span-2">
              <div className="tp-header-logo">
                <Link className="logo-1" href="/">
                  <img
                    src="/assets/img/logo/logo.png"
                    alt="logo"
                    width={85}
                    height={26}
                  />
                </Link>
                <Link className="logo-2" href="/">
                  <img
                    src="/assets/img/logo/logo-white.png"
                    alt="logo"
                    width={85}
                    height={80}
                    className="h-full w-full"
                  />
                </Link>
              </div>
            </div>
            <div className="col-span-8 d-none d-xl-block">
              <div className="tp-header-menu header-main-menu text-center">
                <nav className="tp-main-menu-content">
                  {/* header menus */}
                  <HeaderMenus />
                  {/* header menus */}
                </nav>
              </div>
            </div>
            <div className="col-span-2">
              <div className="tp-header-bar text-end">
                <button
                  className="tp-offcanvas-open-btn"
                  onClick={() => setOpenOffCanvas(true)}
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvas
        openOffcanvas={openOffCanvas}
        setOpenOffcanvas={setOpenOffCanvas}
      />
      {/* off canvas */}
    </>
  );
};

export default HeaderOne;
