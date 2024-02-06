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
        <div className="block md:flex gap-6 justify-between">
          <div>
            <Lottie options={defaultOptions} height={500} width={500}></Lottie>
          </div>
          <div>
            <p>About Our Company</p>
            <h1>Our Company Been Working Successfully For 1 Years</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>

            {/* Table section here  */}

            <Tabs>
              <TabList>
                <Tab>Our Vision</Tab>
                <Tab>Our Mission</Tab>
                <Tab>Our Goal</Tab>
              </TabList>

              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>

            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
