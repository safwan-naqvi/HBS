import Link from "next/link";
import React, { useEffect } from "react";
// internal imports
// import logo from '@/assets/img/logo/logo.png';
import MobileOffcanvasTwo from "@/components/offcanvas/mobile-offcanvas-2";
import useSticky from "@/hooks/use-sticky";

// props type
type IProps = {
  style_2?: boolean;
  container?: string;
};
export default function Header({ style_2, container = "1400" }: IProps) {
  const { sticky, headerRef, headerFullWidth } = useSticky();
  const [openOffCanvas, setOpenOffcanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header ref={headerRef}>
        <div
          id="header-sticky"
          className={`tp-header-area tp-header-mob-space tp-transparent py-4 z-index-9 px-10 xl:px-0 ${
            sticky ? "header-sticky" : ""
          }`}
        >
          <div className={`max-w-7xl mx-auto container-${container}`}>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <div className="w-full">
                  <Link
                    className={`${style_2 ? "portfolio-logo-1" : ""} logo-1`}
                    href="/"
                  >
                    <img
                      src={"/assets/img/logo/hbs-dark.svg"}
                      alt="logo"
                      className="h-12 w-auto"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <div className="tp-header-6-menu-box tp-offcanvas-open-btn flex items-center gap-2 tp-header-bar">
                  <span>Menu</span>
                  <button
                    onClick={() => setOpenOffcanvas(true)}
                    className="tp-header-6-menubar"
                  >
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvasTwo
        openOffcanvas={openOffCanvas}
        setOpenOffcanvas={setOpenOffcanvas}
      />
      {/* off canvas */}
    </>
  );
}
