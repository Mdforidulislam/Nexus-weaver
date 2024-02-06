"use client";
import Container from "@/Share/Container";
import Image from "next/image";
import React from "react";
import logo from '../../../public/logo.png'
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="bg-[#232b35] py-6 px-6">
      <Container>
          <div className="flex justify-between">
          <div className="space-y-4 flex-1">
            <div className="flex gap-1">
            <span className="md:text-4xl lg:text-7xl font-bold text-xl text-white">Let's</span> <Image src={logo} width={40 } height={20} alt="logo"/>
            </div>
            <p className="md:text-4xl lg:text-7xl font-bold text-xl text-white">Connect.</p>
            <p className="text-gray-400 w-2/4">Quisquam Est, Qui Dolorem Ipsum Quia Dolor Sit Amet, Consecte Adipisci Velit, Sed Quia Non Numquam Eius Modi Tempora Incidu Labore Et Dolore Magnam.</p>
            <div className="flex gap-4 text-[#27A1B0] text-2xl">
                <FaLinkedinIn />
                <FaFacebook/>
                <FaTwitter/>
                <FaGithub/>
            </div>
            <p className="text-white">© Copyright 2024 By Nexus Weaver </p>
          </div>
          <div>
              <div className=" flex gap-10 w-full h-full justify-between ">
                  <div>
                    <h1 className="text-xl text-white font-bold">Services</h1>
                       <p>Recycling</p>
                       <p>Ecosystem</p>
                       <p>Biology</p>
                  </div>
                  <div>
                    <h1>Links</h1>
                    <p>Help</p>
                    <p>Help</p>
                    <p>Support</p>
                    <p>Client</p>
                  </div>
                  <div>
                    <form action="">
                      <input type="text" placeholder="Enter Your Email" />
                      <button className="btn">Subscribe</button>
                    </form>
                  </div>
              </div>
              <hr/>
              <div>
                  <h1>Our Team</h1>
                    <div className="w-[100px] bg-white"></div>
                    <div className="w-[100px] bg-white"></div>
                    <div className="w-[100px] bg-white"></div>
                    <div className="w-[100px] bg-white"></div>
              </div>

          </div>
          </div>
      </Container>
    </div>
  );
};

export default Footer;
