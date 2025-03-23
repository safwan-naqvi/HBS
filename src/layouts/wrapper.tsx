"use client";
import BackToTop from "@/components/back-to-top";
import React from "react";
import Footer from "./footers/footer";
import Header from "./headers/header";

// if (typeof window !== "undefined") {
//   require("bootstrap/dist/js/bootstrap.bundle.min");
// }

interface WrapperProps {
  children: React.ReactNode;
  showBackToTop?: boolean;
}

const Wrapper = ({ children, showBackToTop = true }: WrapperProps) => {
  return (
    <React.Fragment>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* header area start */}

          {/* header area end */}
          {children}
          {showBackToTop && <BackToTop />}
          {/* footer area start */}
          <Footer />
          {/* footer area end */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Wrapper;
