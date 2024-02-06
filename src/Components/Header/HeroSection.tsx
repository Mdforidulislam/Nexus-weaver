"use client"

import React, { useState } from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import anmation from "../../../public/Animation1.json";
import Lottie from "react-lottie";
const HeroSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: anmation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex justify-between gap-3 lg:py-14">
      <div className='lg:space-y-8 h-full'>
        <span className="border-2 w-[100px] h-[2px"></span>
        <span>WELCOME TO AGENCY</span>
        <h1 className='text-6xl font-bold '>We are Creative <br/> Website <span className="text-[#27A1B0]">Development</span>  <br/> Agency</h1>
        <p>We are 100+ professional software engineers with more than 10 years <br/> of experience in delivering superior products Believe it because you've seen it. <br/> Here are real numbers</p>
        <div className='flex gap-4 h-full items-center '>
        <button className="bg-[#27A1B0] text-white px-6 py-3 rounded-full ">  Discover more</button>
        <div>
            <button className="flex gap-1 h-full items-center"> <span className="text-2xl"><MdOutlineOndemandVideo /></span>Watch video</button>
        </div>
        </div>
      </div>
      <div>
        <Lottie options={defaultOptions} height={500} width={500}></Lottie>
      </div>
    </div>
  );
};

export default HeroSection;
