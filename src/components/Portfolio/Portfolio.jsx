import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import disney from "../../img/disney-hotstar.jpg";
import coffee from "../../img/coffee-shop-website.png";
import form from "../../img/sing & login form.png";
import bootstrapwebsite from "../../img/bootstrap_website .jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={120}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={disney} alt="disney" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coffee} alt="coffee" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={bootstrapwebsite} alt="bootstrap website" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={form} alt="form" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
