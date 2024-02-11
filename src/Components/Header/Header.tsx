"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import Container from "@/Share/Container";
import logo from "../../../public/dark-logo.png";
import HeroSection from "./HeroSection";
import { useEffect, useState } from "react";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <div
      className={`${sticky ? "pb-10" : "py-5"}`}
      style={{
        backgroundImage:
          "url(https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/h2-bg-img-1.webp)",
      }}
    >
      <div
        className={`fixed flex justify-between w-full items-center px-5  py-3 z-[999]  ${
          sticky
            ? "bg-white/90 text-gray-900 border-b-2 border-[#27A1B0] shadow-md "
            : "bg-white "
        }`}
      >
        <div>
          <Image src={logo} height={50} width={50} alt="logo" />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
      <div className="w-full h-full">
        <Container>
          <HeroSection />
        </Container>
      </div>
    </div>
  );
};

export default Header;
