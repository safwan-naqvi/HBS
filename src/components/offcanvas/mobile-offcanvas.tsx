import React from "react";
import Image from "next/image";
import { Behance, CloseTwo, Dribble, InstagramTwo, Youtube } from "../svg";

// images
import MobileMenus from "./mobile-menus";

const gallery_images = [
  "/assets/img/menu/offcanvas/offcanvas-1.jpg",
  "/assets/img/menu/offcanvas/offcanvas-2.jpg",
  "/assets/img/menu/offcanvas/offcanvas-3.jpg",
  "/assets/img/menu/offcanvas/offcanvas-4.jpg",
];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({
  openOffcanvas,
  setOpenOffcanvas,
}: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <a href="#">
                <img src={"/hbs-logo-dark.png"} alt="logo" />
              </a>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus />
            </div>
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <a href="#">
                        <img src={item} alt="gallery-img" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>

              <ul>
                <li>
                  <a href="tel:1245654">+ 4 20 7700 1007</a>
                </li>
                <li>
                  <a href="mailto:hello@diego.com">hello@diego.com</a>
                </li>
                <li>
                  <a href="#">Avenue de Roma 158b, Lisboa</a>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <a href="#">
                    <InstagramTwo />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Dribble />
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <Behance />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Youtube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
