"use client"

import React, { useState, useRef } from "react";
import Container from "@/Share/Container";
import Title from "@/Share/Titile";

const Portfolio = () => {
  const [visible,setVisible] = useState(0)

  return (
    <div className="my-10">
      <Title heading="Portfolio Item" subHeading="See Our Best Project for ever"/>
      <Container>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {
                [0,1,2].map((item,index)=>(
                  <div onMouseEnter={()=>setVisible(index)} onMouseLeave={()=>setVisible(12)} key={index} className="w-full h-[500px] bg-[#27A1B0] border-2 relative flex justify-center items-end rounded-md overflow-hidden cursor-pointer">
                       
                      <div className=" flex justify-center items-center w-full h-full">
                        <h1 className="text-white">Inventory Management </h1>
                      </div>

                      <div  className={`absolute bg-slate-50 w-[370px] px-3 border-2 -mb-14 ${visible === item?"-translate-y-60 duration-700" :"translate-y-0 duration-700"}`}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, expedita?</p>

                        <div className="flex flex-wrap gap-5 mt-10">
                        <button className="bg-[#27A1B0] px-6 py-2 rounded-md text-white">Live Link</button>

                        <button className="bg-[#27A1B0] px-6 py-2 rounded-md text-white">Client Link</button>

                        <button className="bg-[#27A1B0] px-6 py-2 rounded-md text-white">Github Link</button>

                        </div>

                      </div>
                  </div>
                ))
               }
           </div>
      </Container>
    </div>
  );
};

export default Portfolio;
