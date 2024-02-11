/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Lottie from "react-lottie";
import animation1 from "../../../public/Animation2.json";
import Container from "@/Share/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AboutUs = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Container>
        <div className="block md:flex gap-6 justify-between md:pt-16">
          <div>
            {/* Lottie animation */}
            <Lottie options={defaultOptions} height={500} width={400} />
          </div>
          <div className="flex-1">
            <div>
              <p className="text-[#27A1B0]">About Our Company</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Encouraging Companies with unwavering Quality
              </h1>
              <p className="text-gray-700 mb-6">
              At Nexus Weaver, our primary concern is our clients. We use a customized approach to understand their particular needs and difficulties, building long-lasting relationships based on mutual respect and success. Our overarching mission is to equip businesses with innovative technological solutions, propelling growth and efficiency in today's digital landscape. Devoted to unwavering quality, we maintain the highest caliber of production, guaranteeing our clients excellent, scalable, dependable, and user-friendly solutions.
              </p>
            </div>
            {/* Tabs section */}
            <Tabs>
              <TabList className="flex mb-4">
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
                <p className="text-gray-700">
                Nexus Weaver envisions a dynamic digital landscape in which people realize their full potential, companies of all sizes prosper, and innovation drives long-lasting positive changes. We enable businesses to completely embrace digital transformation, utilizing technology to improve productivity, spur growth, and have a significant effect. The development and success of our clients, our team, and the community we serve ultimately serve as indicators of our success.
                </p>
              </TabPanel>
              <TabPanel>
                <p className="text-gray-700">
                Your ideas are the driving factor behind our efforts. Whether you have a clear vision or need assistance fleshing out your idea, we're here to listen and cooperate with you every step of the way. Let us work together to make your vision a reality.
                </p>
              </TabPanel>
              <TabPanel>
                <p className="text-gray-700">
                Your ideas are the driving factor behind our efforts. Whether you have a clear vision or need assistance fleshing out your idea, we're here to listen and cooperate with you every step of the way. Let us work together to make your vision a reality.
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
