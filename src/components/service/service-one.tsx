import React from "react";
import Link from "next/link";
import Image from "next/image";

// service <imgs

// service data
const service_data = [
  {
    id: 1,
    title: "Discover",
    desc: "We dive deep into your brand goals and audience.",
    icon: "/assets/img/home-01/service/service-icon-1.png",
  },
  {
    id: 2,
    title: "Design & Prototype",
    desc: "From moodboards to wireframes — we create experiences, not just visuals.",
    icon: "/assets/img/home-01/service/service-icon-2.png",
  },
  {
    id: 3,
    title: "Develop & Integrate",
    desc: "Using the latest frameworks, we build fast, scalable, and secure products.",
    icon: "/assets/img/home-01/service/service-icon-3.png",
  },
  {
    id: 4,
    title: "Optimize & Launch",
    desc: "We fine-tune, optimize for SEO, and prepare for launch.",
    icon: "/assets/img/home-01/service/service-icon-4.png",
  },
  {
    id: 5,
    title: "Grow & Evolve",
    desc: "After launch, we don't disappear. We analyze, adapt, and help scale.",
    icon: "/5.png",
  },
];

const ServiceOne = () => {
  return (
    <div className="tp-btn-trigger font-gilroy w-full bg-[#f6f6f8]">
      <div className="container-1630 mx-auto max-w-7xl w-full my-20 pt-40 px-10 lg:px-0">
        <div className="grid grid-cols-2 px-10 gap-10">
          <div className="col-span-2 lg:col-span-1 relative">
            <span className="tp-hero-shape-2 hidden md:inline-block">
              <img
                src="/assets/img/home-01/hero/hero-shape-1-1.png"
                alt="shape"
                width={40}
                height={40}
              />
            </span>
            <div className="tp-service-title-box relative">
              <span className="absolute text-xl font-normal font-gilroy -bottom-6 left-0 subtitle-position tp_fade_bottom">
                Our Five Thoughtful Process
              </span>
              <h4 className="text-[100px] tp_fade_bottom font-gellery font-normal leading-none">
                We Bring <span className="text-[#848484]">Ideas to Life</span>
              </h4>
            </div>
            <Image
              src={"/sculpt.png"}
              alt="Sculpture"
              height={1000}
              width={600}
              quality={100}
              priority
              className="absolute bottom-0 left-0 right-0 hidden lg:block"
            />
            {/* <div className="tp-service-left-btn tp-btn-bounce">
              <Link className="tp-btn-border" href="/service">
                <span className="tp-btn-border-wrap">
                  <span className="text-1">See All Services</span>
                  <span className="text-2">See All Services</span>
                </span>
              </Link>
            </div> */}
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="tp-service-right-wrap">
              {service_data.map((s, i) => (
                <div
                  key={s.id}
                  className="tp-service-item flex items-start mb-20 gap-8 tp_fade_bottom"
                >
                  <div className="tp-service-icon">
                    {/* <img src={s.icon} alt="icon" style={{ height: "auto" }} /> */}
                    <div className="font-neue flex items-center justify-center text-3xl h-14 w-14 rounded-full bg-[#f4f4f4] border border-[#eee]">
                      <span>{s.id}</span>
                    </div>
                  </div>
                  <div className="tp-service-content">
                    <h4 className="tp-service-title-sm order-0">{s.title}</h4>
                    <p className="order-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
