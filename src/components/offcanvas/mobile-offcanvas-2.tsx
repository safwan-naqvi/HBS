import Link from "next/link";
import React from "react";
import { CloseThree, CloseTwo } from "../svg";
import MobileMenusTwo from "./mobile-menus-2";

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvasTwo({
  openOffcanvas,
  setOpenOffcanvas,
}: IProps) {
  return (
    <div
      className={`tp-offcanvas-2-area p-relative ${
        openOffcanvas ? "opened" : ""
      }`}
    >
      <div className="tp-offcanvas-2-bg is-left left-box"></div>
      <div className="tp-offcanvas-2-bg is-right right-box d-none d-md-block"></div>
      <div className="tp-offcanvas-2-wrapper">
        <div className="tp-offcanvas-2-left left-box">
          <div className="tp-offcanvas-2-left-wrap d-flex justify-content-between align-items-center">
            <div className="tpoffcanvas__logo">
              <Link className="logo-1" href="/">
                <img
                  src={"/hbs-logo-dark.png"}
                  alt="logo"
                  height={80}
                  width={200}
                />
              </Link>
              <Link className="logo-2" href="/">
                <img src={"/assets/img/logo/logo-white.png"} alt="logo" />
              </Link>
            </div>
            <div className="tp-offcanvas-2-close d-md-none text-end">
              <button
                onClick={() => setOpenOffcanvas(false)}
                className="tp-offcanvas-2-close-btn tp-offcanvas-2-close-btn"
              >
                <span className="text">
                  <span>close</span>
                </span>
                <span className="d-inline-block">
                  <span>
                    <CloseThree />
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="tp-main-menu-mobile menu-hover-active counter-row">
            <MobileMenusTwo />
          </div>
        </div>
        <div className="tp-offcanvas-2-right right-box d-none d-md-block p-relative">
          <div className="tp-offcanvas-2-close text-end">
            <button
              onClick={() => setOpenOffcanvas(false)}
              className="tp-offcanvas-2-close-btn"
            >
              <span className="text">
                <span>close</span>
              </span>

              <span className="d-inline-block">
                <span>
                  <CloseTwo />
                </span>
              </span>
            </button>
          </div>
          <div className="tp-offcanvas-2-right-inner d-flex flex-column justify-content-between h-100">
            <div className="tpoffcanvas__right-info">
              <div className="tpoffcanvas__tel">
                <a href="tel:61404093954">+61404093 954</a>
              </div>
              <div className="tpoffcanvas__mail">
                <a href="mailto:hellocontact@diego.com">
                  hello contact@diego.com
                </a>
              </div>
              <div className="tpoffcanvas__text">
                <p>If in doubt. reach out.</p>
              </div>
            </div>
            <div className="tpoffcanvas__social-link">
              <ul>
                <li>
                  <a href="#">Dribbble</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
                <li>
                  <a href="#">Behance</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
