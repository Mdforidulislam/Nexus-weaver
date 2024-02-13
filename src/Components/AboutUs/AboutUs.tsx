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
    </div>
  );
};

export default AboutUs;
