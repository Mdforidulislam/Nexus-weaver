"use client";

import Container from "@/Share/Container";
import img1 from "../../Assets/2.png";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="my-10">
      <div
        style={{
          backgroundImage: "radial-gradient(#baedf5, #f0f9fa,  #ffffff)",
        }}
        className="text-center py-20 space-y-2 border rounded-full"
      >
        <h1 className="text-3xl font-bold">Our Portfolios</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
          fugiat.
        </p>
      </div>
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {/* 1st card */}
          <div
            className=" rounded-md pb-8 bg-center bg-cover bg-black bg-blend-overlay bg-opacity-20 pl-10 pt-20"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/61fQkSd/samoyed-dog.jpg")',
            }}
          >
            
            <p className=" border-l-2 pl-5 text-xl border-fuchsia-600  text-fuchsia-500 font-bold mt-10">
              Adoption
            </p>
            <h3 className="text-5xl py-10  text-white font-extrabold">
              Available for Adoption
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
