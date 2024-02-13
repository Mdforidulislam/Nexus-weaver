"use client";
import Container from "@/Share/Container";
import Title from "@/Share/Titile";
import React, { useEffect, useState } from "react";

interface ServicesData {
  id: string;
  Heading: string;
  SubHeading: string;
}

const Services = () => {
  const [services, setServices] = useState<ServicesData[]>([]);
  // console.log(services);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data: ServicesData[]) => setServices(data));
  }, []);
  return (
    <div id="service" className="py-10">
      <Title
        heading="What We Offer"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, assumenda? "
      />
      <Container>
        <div
          style={{
            backgroundImage: "radial-gradient(#c3b6e0, #ffffff,  #ffffff)",
          }}
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
        >
          {services.map((sevice) => (
            <div
              key={sevice.id}
              className="border rounded-md p-2 hover:shadow-xl hover:bg-cyan-600/20 border-[#27A1B0]"
            >
              <div className=" space-y-3 rounded-md p-3 m-2">
                <h3 className="text-2xl font-bold text-[#27A1B0]">
                  {sevice.Heading}
                </h3>
                <p className="text-gray-600 text-justify ">
                  {sevice.SubHeading}
                </p>
                <button className=" bg-[#27A1B0] py-2 px-6 rounded-full  text-white ">
                  Learn More
                </button>
              </div>
            </div>
          ))}
          {/* 1st card */}
        </div>
      </Container>
    </div>
  );
};

export default Services;
