"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";

const ProjectTextLine = () => {
  useGSAP(() => {
    gsap.set(".tp-project-textline", {
      x: "25%",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".tp-project-textline ",
          start: "-1000 10%",
          end: "bottom 20%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      .to(".tp-project-textline ", {
        x: "-50%",
      });
  });
  return (
    <div
      className="tp-project-textline tp-project-effect mb-24 flex items-center"
      data-scrub="0.0001"
    >
      <span className="textline-1 h-40 w-40 mx-8 flex items-center gap-2">
        <img
          src={"/assets/img/home-01/project/project-shape-1-1.png"}
          alt="shape"
        />
      </span>
      <span className="textline-2">Project</span>
      <span className="textline-1 h-40 w-40 mx-8 flex items-center justify-center">
        <img
          src={"/assets/img/home-01/project/project-shape-1-1.png"}
          alt="shape"
        />
      </span>
      <span className="textline-2">Showcase</span>
      <span className="textline-1 h-40 w-40 mx-8 flex items-center justify-center">
        <img
          src={"/assets/img/home-01/project/project-shape-1-1.png"}
          alt="shape"
        />
      </span>
      <span className="textline-2">Project</span>
      <span className="textline-1 h-40 w-40 mx-8 flex items-center justify-center">
        <img
          src={"/assets/img/home-01/project/project-shape-1-1.png"}
          alt="shape"
        />
      </span>
      <span className="textline-2">Showcase</span>
    </div>
  );
};

export default ProjectTextLine;
