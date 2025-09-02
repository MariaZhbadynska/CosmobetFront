import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, A11y } from "swiper/modules"; 

export default function CategoriesSlider() {
  const cats = [
    { src: "/imgs/category/sport.png", label: "Sports" },
    { src: "/imgs/category/casino.png", label: "Casino" },
    { src: "/imgs/category/minigames.png", label: "Mini Games" },
    { src: "/imgs/category/livecasino.png", label: "Live Casino" },
    { src: "/imgs/category/esports.png", label: "ESports" },
    { src: "/imgs/category/live.png", label: "Live" },
    { src: "/imgs/category/sport.png", label: "Sports" },
    { src: "/imgs/category/casino.png", label: "Casino" },
    { src: "/imgs/category/minigames.png", label: "Mini Games" },
  ];

  return (
    <section className="cats">
      <div className="container">
        <Swiper
          className="cats-swiper"
          modules={[FreeMode, A11y]}
          slidesPerView={2.2}
          spaceBetween={12}
          freeMode
          breakpoints={{
            576: { slidesPerView: 3.2 },
            768: { slidesPerView: 4.2 },
            992: { slidesPerView: 6 },
          }}
          aria-label="Категорії"
        >
          {cats.map((c, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <a className="cat-card" href="#">
                <img src={c.src} alt={c.label} />
                <span>{c.label}</span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
