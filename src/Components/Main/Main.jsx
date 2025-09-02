import React, { useEffect, useState } from "react";
import HeroSlider from "../HeroSlider/HeroSlider";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";

export default function Main() {
  return (
    <div>
      <main>
        <HeroSlider />
        <CategoriesSlider />

        <section className="bonus-banner">
          <div className="container">
            <div className="bonus-banner__inner">
              <img src="/imgs/banner_img.jpeg" alt="Cosmobet Bonus Banner" />
              <div className="bonus-banner__overlay"></div>
              <div className="bonus-banner__content">
                <h2>Free bonus</h2>
                <button className="btn-bonus" type="button">
                  Get bonus
                </button>
              </div>
            </div>

            <section className="intro">
              <h1>Cosmobet Casino</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                eros eget nunc fermentum venenatis. Integer facilisis mauris id
                augue elementum, vel malesuada nunc luctus.
              </p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
