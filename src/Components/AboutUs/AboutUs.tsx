/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animation1 from "../../../public/Animation2.json";
import Container from "@/Share/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AboutUs = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let width ;

  if (windowWidth <= 768 ) {
    width = 450;
  }else if(windowWidth <= 425 ){
    width = 350;
  }else {
    width = 600
  }


  return (
    <div>
     <Container>
      <div className="block md:flex gap-6 justify-between md:pt-16">
        <div>
          {/* Lottie animation */}
          <Lottie options={defaultOptions} height={width} width={width} />
        </div>
        <div className="flex-1">
          <div>
            <p className="text-[#27A1B0]">About Our Company</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Company Has Been Successfully Operating for 1 Year</h1>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>
          {/* Tabs section */}
          <Tabs>
            <TabList className="flex mb-4">
              <Tab className="px-4 py-2 bg-[#27A1B0] text-white rounded-md mr-2 cursor-pointer">Our Vision</Tab>
              <Tab className="px-4 py-2 bg-[#27A1B0] text-white rounded-md mr-2 cursor-pointer">Our Mission</Tab>
              <Tab className="px-4 py-2 bg-[#27A1B0] text-white rounded-md mr-2 cursor-pointer">Our Goal</Tab>
            </TabList>
            <TabPanel>
              <p className="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nostrum neque, quis vel eum voluptate quas blanditiis deserunt officiis sequi.</p>
            </TabPanel>
            <TabPanel>
            <p className="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nostrum neque, quis vel eum voluptate quas blanditiis deserunt officiis sequi.</p>
            </TabPanel>
            <TabPanel>
            <p className="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nostrum neque, quis vel eum voluptate quas blanditiis deserunt officiis sequi.</p>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </Container>
      <Container>
        <div className="flex flex-col-reverse lg:flex-row lg:gap-12 justify-center items-center md:pt-16">
          <div className="flex-1">
            {/* Lottie animation */}
            <Lottie options={defaultOptions} />
          </div>
          <div className="flex-1">
            <div className="max-lg:text-center">
              <button className="text-[#27A1B0] font-bold border-l-4 border-[#27A1B0]  pl-3 mb-5">
                About Our Company
              </button>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Encouraging Companies with unwavering Quality
              </h1>
            </div>
            {/* Tabs section */}
            <Tabs>
              <TabList className="flex mb-4 max-lg:justify-center">
                <Tab className="px-4 py-2 bg-[#27A1B0] text-white rounded-md mr-2 cursor-pointer">
                  Our Vision
                </Tab>
                <Tab className="px-4 py-2 bg-[#27A1B0] text-white rounded-md mr-2 cursor-pointer">
                  Our Mission
                </Tab>
                <Tab className="px-4 py-2 bg-[#27A1B0] text-white rounded-md mr-2 cursor-pointer">
                  Our Goal
                </Tab>
              </TabList>
              <TabPanel>
                <p className="text-gray-700 text-justify">
                  Nexus Weaver envisions a dynamic digital landscape in which
                  people realize their full potential, companies of all sizes
                  prosper, and innovation drives long-lasting positive changes.
                  We enable businesses to completely embrace digital
                  transformation, utilizing technology to improve productivity,
                  spur growth, and have a significant effect. The development
                  and success of our clients, our team, and the community we
                  serve ultimately serve as indicators of our success.
                </p>
              </TabPanel>
              <TabPanel>
                <p className="text-gray-700 text-justify">
                  At Nexus Weaver, our primary concern is our clients. We use a
                  customized approach to understand their particular needs and
                  difficulties, building long-lasting relationships based on
                  mutual respect and success. Our overarching mission is to
                  equip businesses with innovative technological solutions,
                  propelling growth and efficiency in today's digital landscape.
                  Devoted to unwavering quality, we maintain the highest caliber
                  of production, guaranteeing our clients excellent, scalable,
                  dependable, and user-friendly solutions.
                </p>
              </TabPanel>
              <TabPanel>
                <p className="text-gray-700 text-justify">
                  Your ideas are the driving factor behind our efforts. Whether
                  you have a clear vision or need assistance fleshing out your
                  idea, we're here to listen and cooperate with you every step
                  of the way. Let us work together to make your vision a
                  reality.
                </p>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
