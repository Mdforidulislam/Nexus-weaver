"use client";
import Container from "@/Share/Container";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#232b35] py-10 space-y-6">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col space-y-4 lg:space-y-6  mx-auto">
            <div className="flex space-x-2">
              <span className="text-2xl lg:text-4xl font-bold text-white">
                Lets
              </span>
              <Image src={logo} width={40} height={20} alt="logo" />
            </div>
            <p className="text-2xl lg:text-4xl font-bold text-white">
              Connect.
            </p>
            <p className="text-gray-400 text-sm lg:text-md w-3/4">
              Quisquam Est, Qui Dolorem Ipsum Quia Dolor Sit Amet, Consectetur
              Adipisci Velit, Sed Quia Non Numquam Eius Modi Tempora Incidunt
              Labore Et Dolore Magnam.
            </p>
            <div className="flex gap-4 text-[#27A1B0] text-2xl lg:text-3xl">
              <FaLinkedinIn />
              <FaFacebook />
              <FaTwitter />
              <FaGithub />
            </div>
            <p className="text-white text-lg">
              © 2024 Nexus Weaver. All rights reserved.
            </p>
          </div>

          <div className="space-y-6">
            <div className="mt-6 lg:mt-0 flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-12 gap-y-6 lg:gap-y-0">
              <div>
                <h1 className="text-xl lg:text-2xl text-white font-bold">
                  Services
                </h1>
                <p className="text-gray-400 text-lg">Recycling</p>
                <p className="text-gray-400 text-lg">Ecosystem</p>
                <p className="text-gray-400 text-lg">Biology</p>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl text-white font-bold">
                  Links
                </h1>
                <p className="text-gray-400 text-lg">Help</p>
                <p className="text-gray-400 text-lg">Support</p>
                <p className="text-gray-400 text-lg">Client</p>
              </div>
              <div className="flex-1 w-full">
                <h1 className="text-xl lg:text-2xl text-white font-bold">
                  Subscribe
                </h1>
                <form className="flex space-x-2">
                  <input
                    className="w-full bg-transparent border-b border-gray-400 focus:outline-none text-white text-lg py-1"
                    type="text"
                    placeholder="Enter Your Email"
                  />
                  <button className="btn bg-[#27A1B0] text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition duration-300">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <hr />
            <div>
              <h1 className=" text-white text-xl font-bold">Team Member</h1>
              <div className="flex flex-wrap gap-4  rounded-b-lg">
                <Image
                  src="https://themexriver.com/wp/choicy/wp-content/uploads/2024/01/f2-team-1.webp"
                  className="rounded-xl"
                  width={100}
                  height={150}
                  alt="image"
                />

                <Image
                  src="https://themexriver.com/wp/choicy/wp-content/uploads/2024/01/f2-team-2.webp"
                  className="rounded-xl"
                  width={100}
                  height={150}
                  alt="image"
                />

                <Image
                  src="https://themexriver.com/wp/choicy/wp-content/uploads/2024/01/f2-team-3.webp"
                  className="rounded-xl"
                  width={100}
                  height={150}
                  alt="image"
                />

                <Image
                  src="https://themexriver.com/wp/choicy/wp-content/uploads/2024/01/f2-team-4.webp"
                  className="rounded-xl"
                  width={100}
                  height={150}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
