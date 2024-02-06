"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Container from '@/Share/Container';
import { useEffect, useState } from 'react';


const Client = () => {
   

  return (
    <div className='py-10'>
        <Container>
            <div className='text-center mb-4'>
                <h1>TESTIMONIALS</h1>
                <h1 className='text-2xl font-bold'>What People Say?</h1>
            </div>
        <Swiper
        modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      pagination={{ clickable: true }}
      draggable={true}
    >
    {
        [0,2,3,23,3,4,2,3].map((item,index)=>(
            
             <SwiperSlide key={index} >
                <div className='h-[300px] border rounded-lg '>
                    hello
                </div>
             </SwiperSlide>
            
        ))
    }
    </Swiper>
        </Container>
    </div>
  );
};

export default Client;
