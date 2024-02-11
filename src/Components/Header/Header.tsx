"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import Container from "@/Share/Container";
import logo from "../../../public/dark-logo.png";
import HeroSection from "./HeroSection";
import { useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  window.addEventListener("scroll", () => {
    // Get the current scroll height
    const scrollHeight = window.scrollY;
    setScroll(scrollHeight);
    console.log("Current scroll height:", scrollHeight);
  });

  return (
    <div
      className="py-8"
      style={{
        backgroundImage:
          "url(https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/h2-bg-img-1.webp)",
      }}
    >
      <div className=" w-full h-full">
        <div
          className={`flex justify-between h-full items-center z-30  p-6 bg-white  px-6 sticky top-0 ${
            scroll < 100 ? "hidden" : ""
          }`}
        >
          <div>
            <Image src={logo} height={50} width={50} alt="logo" />
          </div>
          <div>
            <Navbar />
          </div>
        </div>
        <Container>
          <div
            className={`flex justify-between h-full items-center  p-6 bg-white py-3 rounded-full px-6 ${
              scroll > 100 ? "hidden" : ""
            }`}
          >
            <div>
              <Image src={logo} height={50} width={50} alt="logo" />
            </div>
            <div>
              <Navbar />
            </div>
          </div>
          <HeroSection />
        </Container>
      </div>
    </div>
  );
};

export default Header;
