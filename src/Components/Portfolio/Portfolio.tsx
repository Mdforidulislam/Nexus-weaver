"use client"

import Container from "@/Share/Container";
import { useState } from "react";
import Title from "@/Share/Titile";

const Portfolio = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveItem(index);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <div className="my-10">
      <Title
        heading="Portfolio"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, assumenda? "
      />

      <Container>
        <div

          style={{
            backgroundImage: "radial-gradient(#baedf5, #f0f9fa, #ffffff)",
          }}
          className="text-center py-10 space-y-2 border rounded-full"
        >
          <h1 className="text-3xl font-bold">Our Portfolios</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, fugiat.
          </p>
        </div>
        {/* portfolio section */}
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`overflow-hidden cursor-pointer md:mt-20 mt-8 h-[500px] border-2 relative ${
              activeItem === index ? "bg-blue-200" : ""
            }`}
            style={{
              backgroundImage:
                'url("https://i.pinimg.com/originals/22/70/f8/2270f87a22ea3e1e2eb60a4bb1192ee6.png")',
              backgroundSize: "cover",
              width: "full",
              height: "full",
            }}
          >
            <div
              className={`bg-gray-400 bg-opacity-65 relative flex justify-center items-center h-full ${
                activeItem === index ? "bg-white w-full" : "hidden"
              }`}
            >
              {/* main section */}
              <div
                className={`flex justify-center items-center w-full h-full ${
                  activeItem === index ? "hidden" : ""
                }`}
              >
                <h1 className="text-white text-2xl font-bold">
                  Inventor Management
                </h1>
              </div>

              {/* top section */}
              <div
                className={`mb-0 flex items-end absolute h-full px-6 py-6 mt-[510px] w-full z-10 ${
                  activeItem === index
                    ? "duration-700 -translate-y-96"
                    : ""
                }`}
              >
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, assumenda? Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Ipsa quas doloremque quis cum,
                  itaque non harum sit maiores perferendis expedita.
                  <div className="flex gap-6 py-10">
                    <button className="px-6 py-2 bg-black text-white">
                      Live link
                    </button>
                    <button className="px-6 py-2 bg-black text-white">
                      Server code Github Link
                    </button>
                    <button className="px-6 py-2 bg-black text-white">
                      Client code Github link
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </div>
        ))}

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
