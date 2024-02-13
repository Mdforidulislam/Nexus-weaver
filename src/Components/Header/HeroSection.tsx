/* eslint-disable react/no-unescaped-entities */
"use client";

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
    <div className="block md:flex justify-between gap-3 lg:py-20">
      <div className="lg:space-y-8 h-full max-lg:text-center mt-5 ">
        <button className="border-l-4 border-[#27A1B0] py-2 pl-3 ">
          Nexus Weaver
        </button>
        <div className="w-full lg:w-4/5 space-y-5">
          <h1 className="text-6xl font-bold leading-none ">
            Your Partner in Crafting
            <span className="text-[#27A1B0]"> Dynamic </span> Web Experiences
          </h1>
          <p>
            Experience the synergy of Nexus Weaver's broad services, including
            pioneering digital solutions and cutting-edge Learning Management
            Systems, as well as dynamic MERN Stack web development and efficient
            Content Management Solutions. Begin your digital journey with us
            today.
          </p>
        </div>
        <div className="flex gap-4 h-full items-center max-lg:justify-center mt-5 ">
          <button className="bg-[#27A1B0] text-white px-6 py-3 rounded-full ">
            Discover more
          </button>
          <div>
            <button className="flex gap-1 h-full items-center">
              <span className="text-2xl">
                <MdOutlineOndemandVideo />
              </span>
              Watch video
            </button>
          </div>
        </div>
      </div>
      <div>
        <Lottie options={defaultOptions} height={500} width={400}></Lottie>
      </div>
    </div>
  );
};

export default HeroSection;
