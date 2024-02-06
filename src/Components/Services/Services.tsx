"use client";
import Container from "@/Share/Container";
import React from "react";

const Services = () => {
  return (
    <div
      className="py-10"
      style={{
        backgroundImage: "radial-gradient(#c3b6e0, #ffffff,  #ffffff)",
      }}
    >
      <Container>
        <div className="text-center">
          <h1 className="text-3xl font-bold">What We Offer</h1>
          <p>
            Where Strategy Meets Digital. Your Success Story Begins with
            Digimax.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {/* 1st card */}
          <div className="border rounded-md p-2 hover:shadow-xl hover:bg-cyan-600/20 border-[#27A1B0]">
            <div className=" space-y-3 rounded-md p-5 m-2">
              <h3 className="text-2xl font-bold text-[#27A1B0]">
                Website Development
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus officia non molestiae quaerat quis quod minima
                consequuntur obcaecati porro alias!
              </p>
              <button className=" bg-[#27A1B0] py-2 px-6 rounded-full  text-white ">
                Learn More
              </button>
            </div>
          </div>
          {/* 2nd card */}
          <div className="border rounded-md p-2 hover:shadow-xl hover:bg-cyan-600/20 border-[#27A1B0]">
            <div className=" space-y-3 rounded-md p-5 m-2">
              <h3 className="text-2xl font-bold text-[#27A1B0] ">
                App Development
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus officia non molestiae quaerat quis quod minima
                consequuntur obcaecati porro alias!
              </p>
              <button className=" bg-[#27A1B0] py-2 px-6 rounded-full  text-white ">
                Learn More
              </button>
            </div>
          </div>
          {/* 3rd card */}
          <div className="border rounded-md p-2 hover:shadow-xl hover:bg-cyan-600/20 border-[#27A1B0]">
            <div className=" space-y-3 rounded-md p-5 m-2">
              <h3 className="text-2xl font-bold text-[#27A1B0]">
                Digital Marketing
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus officia non molestiae quaerat quis quod minima
                consequuntur obcaecati porro alias!
              </p>
              <button className=" bg-[#27A1B0] py-2 px-6 rounded-full  text-white ">
                Learn More
              </button>
            </div>
          </div>

          {/* 4rd card */}
          <div className="border rounded-md p-2 hover:shadow-xl hover:bg-cyan-600/20 border-[#27A1B0]">
            <div className=" space-y-3 rounded-md p-5 m-2">
              <h3 className="text-2xl font-bold text-[#27A1B0]">
                Graphic Design
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus officia non molestiae quaerat quis quod minima
                consequuntur obcaecati porro alias!
              </p>
              <button className=" bg-[#27A1B0] py-2 px-6 rounded-full  text-white ">
                Learn More
              </button>
            </div>
          </div>
          {/* 5th card */}
          <div className="border rounded-md p-2 hover:shadow-xl hover:bg-cyan-600/20 border-[#27A1B0]">
            <div className=" space-y-3 rounded-md p-5 m-2">
              <h3 className="text-2xl font-bold text-[#27A1B0]">
                Brand Identity
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus officia non molestiae quaerat quis quod minima
                consequuntur obcaecati porro alias!
              </p>
              <button className=" bg-[#27A1B0] py-2 px-6 rounded-full  text-white ">
                Learn More
              </button>
            </div>
          </div>
          {/* 6th card */}
          <div className="border rounded-md p-2 hover:shadow-xl hover:bg-cyan-600/20 border-[#27A1B0]">
            <div className=" space-y-3 rounded-md p-5 m-2">
              <h3 className="text-2xl font-bold text-[#27A1B0]">
                Search Engine Optimization
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus officia non molestiae quaerat quis quod minima
                consequuntur obcaecati porro alias!
              </p>
              <button className=" bg-[#27A1B0] py-2 px-6 rounded-full  text-white ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
