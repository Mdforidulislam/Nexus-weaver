"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import Container from "@/Share/Container";
import logo from '../../../public/dark-logo.png'
import HeroSection from "./HeroSection";


const Header = () => {
  return (
    <div className="py-8" style={{backgroundImage:'url(https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/h2-bg-img-1.webp)'}}>
    <div className=" w-full h-full">
    <Container>
      <div className="flex justify-between h-full items-center  p-6 bg-white py-3 rounded-full px-6 ">
        <div>
          <Image src={logo} height={50} width={50} alt="logo" />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
       <HeroSection/>

    </Container>
    </div>
    </div>
  );
};

export default Header;
