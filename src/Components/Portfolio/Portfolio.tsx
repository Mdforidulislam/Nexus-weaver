"use client";

import Container from "@/Share/Container";
import img1 from "../../Assets/2.png";
import Image from "next/image";
import { useState } from "react";
import Title from "@/Share/Titile";

const Portfolio = () => {
  const [isMouseInside, setIsMouseInside] = useState(false);
  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
  };

  console.log(isMouseInside);
  return (
    <div className="my-10">
      <Title
        heading="Portfolio"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, assumenda? "
      />

      <Container>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-[400px] overflow-hidden cursor-pointer h-[300px] border-2 px-6 py-6 "
        >
          <div
            className={`mb-0 flex items-end h-full w-full   ${
              isMouseInside ? "-translate-y-28 duration-500" : "translate-y-44"
            }`}
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, assumenda? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa quas doloremque quis cum, itaque non harum
              sit maiores perferendis expedita.
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
