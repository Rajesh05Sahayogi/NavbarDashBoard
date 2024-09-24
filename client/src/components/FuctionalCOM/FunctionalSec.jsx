import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "./fuctional.css"; // Import the scoped CSS

import account from "../../assets/images/account.jpg";

function FunctionalSec() {
  return (
    <div className="swiper-section mt-2 flex justify-center items-center">
      {/* Added a wrapper class */}
      <div className="container gap-2  w-full">
        <h1 className="heading text-white font-extrabold md:mb-4">
          Functional Areas
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="swiper-container md:mt-10"
        >
          <SwiperSlide>
            <div className="slide-content">
              <img src={account} alt="slide_image" />
              <div className="slide-heading">
                <p>Customer Service</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={account} alt="slide_image" />
              <div className="slide-heading">
                <p>Human Resources</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={account} alt="slide_image" />
              <div className="slide-heading">
                <p>Learning & Development</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={account} alt="slide_image" />
              <div className="slide-heading">
                <p>Finance & Accounting</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={account} alt="slide_image" />
              <div className="slide-heading">
                <p>Marketing</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={account} alt="slide_image" />
              <div className="slide-heading">
                <p>Sales</p>
              </div>
            </div>
          </SwiperSlide>

          {/* <div className="slider-controller">
            <div className="hidden swiper-button-prev slider-arrow bg-blue-300">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="hidden swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            
          </div> */}
          <div className="flex justify-center items-center gap-2 bg-blue-400">
              <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default FunctionalSec;
