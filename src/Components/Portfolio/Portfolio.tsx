"use client";

import Container from "@/Share/Container";
import img1 from "../../Assets/2.png";
import Image from "next/image";
import { useState } from "react";

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
      <Container>
        <div
          style={{
            backgroundImage: "radial-gradient(#baedf5, #f0f9fa,  #ffffff)",
          }}
        

          className="text-center py-10 space-y-2 border rounded-full"
        >
          <h1 className="text-3xl font-bold">Our Portfolios</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, fugiat.
          </p>
        </div>

        <div    onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}    className="w-[400px] overflow-hidden cursor-pointer h-[300px] border-2 px-6 py-6 ">
               
              <div className={`mb-0 flex items-end h-full w-full   ${isMouseInside? '-translate-y-28 duration-500': 'translate-y-44'}`}>
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, assumenda? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas doloremque quis cum, itaque non harum sit maiores perferendis expedita.</span>
              </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
