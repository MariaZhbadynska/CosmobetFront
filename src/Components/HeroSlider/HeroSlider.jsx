import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard, A11y } from "swiper/modules";

export default function HeroSlider() {
  const heroImages = [
    { src: "/imgs/firstImg_slider.jpeg", alt: "Slide 1" },
    { src: "/imgs/secImg_slider.jpeg", alt: "Slide 2" },
    { src: "/imgs/thirdImg_slider.jpeg", alt: "Slide 3" },
    { src: "/imgs/fourthImg_slider.jpeg", alt: "Slide 4" },
    { src: "/imgs/fifthImg_slider.jpeg", alt: "Slide 5" },
  ];

  return (
    <section className="hero-slider container">
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, Pagination, Keyboard, A11y]}
        loop
        speed={800}
        effect="slide"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        aria-label="Головний слайдер"
      >
        {heroImages.map((img, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <div className="slide">
              <img
                src={img.src}
                alt={img.alt}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
