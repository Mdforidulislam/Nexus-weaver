"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Container from "@/Share/Container";
import { useEffect, useState } from "react";
import Title from "@/Share/Titile";

const Client = () => {
  return (
    <div className="py-10">
      <Title heading="TESTIMONIALS" subHeading="What People Say?" />
      <Container>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          draggable={true}
        >
          {[0, 1, 2, 3, 4].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-[300px] border rounded-lg shadow-md p-6 flex flex-col justify-between bg-white">
                <div>
                  <p className="text-lg font-semibold">
                    Testimonial {index + 1}
                  </p>
                  <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <img
                      src="/avatar.png"
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-gray-500">CEO, Company Inc.</p>
                    </div>
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-800 focus:outline-none">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Client;
