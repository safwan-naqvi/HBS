import React from "react";
import Link from "next/link";
import LineText from "@/components/line-text";
import { UpArrow } from "@/components/svg";

const project_data = [
  {
    id: 1,
    title: "Art Direction",
    category: "Branding",
    img: "/assets/img/home-05/project/project-4.jpg",
    year: 2024,
  },
  {
    id: 2,
    title: "Petit Navire",
    category: "Branding",
    img: "/assets/img/home-05/project/project-5.jpg",
    year: 2024,
  },
  {
    id: 3,
    title: "Big dream",
    category: "Branding",
    img: "/assets/img/home-05/project/project-6.jpg",
    year: 2024,
  },
  {
    id: 4,
    title: "The Stage",
    category: "Branding",
    img: "/assets/img/home-05/project/project-7.jpg",
    year: 2024,
  },
  {
    id: 5,
    title: "Big dream",
    category: "Branding",
    img: "/assets/img/home-05/project/project-8.jpg",
    year: 2024,
  },
  {
    id: 6,
    title: "Sed Lectus",
    category: "Concept",
    img: "/assets/img/home-05/project/project-9.jpg",
    year: 2024,
  },
];

type IProps = {
  style_2?: boolean;
};

export default function ProjectGallery({ style_2 = false }: IProps) {
  return (
    <div
      className={`tp-project-5-2-area pb-32 ${
        style_2 ? "" : "tp-project-5-2-pt black-bg"
      }`}
    >
      {!style_2 && (
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <LineText />
          </div>
        </div>
      )}

      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-x-[140px]">
          {project_data.map((item) => (
            <div key={item.id}>
              <div
                className="tp-project-5-2-thumb fix mb-[140px] relative not-hide-cursor"
                data-cursor="View<br>Demo"
              >
                <Link className="cursor-hide" href="/portfolio-details-1">
                  <span className="tp_img_reveal">
                    <div className="tp_img_reveal">
                      <img src={item.img} alt="project-img" />
                    </div>
                  </span>
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="tp-projct-5-2-btn-box flex justify-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className={`tp-btn-circle ${
                    style_2 ? "style-2" : ""
                  } tp-hover-btn-item tp-hover-btn`}
                  href="/portfolio-details-1"
                >
                  <span className="tp-btn-circle-text">
                    More <br /> Projects
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
