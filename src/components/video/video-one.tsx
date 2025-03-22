"use client";
import React from "react";

const VideOne = () => {
  return (
    <div className="tp-hero-bottom-img-wrap relative hidden lg:block">
      <div className="tp-hero-bottom-img">
        <video loop={true} muted={true} autoPlay={true} playsInline={true}>
          <source src="/videos/intro.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default VideOne;
