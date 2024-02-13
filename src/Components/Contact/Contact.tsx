"use Client";

import Button from "@/Share/Button";
import Container from "@/Share/Container";
import { TextField } from "@mui/material";
import React from "react";
import { FaMailchimp, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-center  gap-16  w-full">
          <div className="space-y-4 flex-1">
            <button className="text-[#27A1B0] font-bold border-l-4 border-[#27A1B0] pl-3">
              Our Vision
            </button>
            <p className="w-full text-justify">
              Nexus Weaver envisions a dynamic digital landscape in which people
              realize their full potential, companies of all sizes prosper, and
              innovation drives long-lasting positive changes. We enable
              businesses to completely embrace digital transformation, utilizing
              technology to improve productivity, spur growth, and have a
              significant effect. The development and success of our clients,
              our team, and the community we serve ultimately serve as
              indicators of our success.
            </p>
            <ul className="space-y-3 ">
              <li className="flex gap-1 text-xl">
                <FaPhone />
                +827346872342
              </li>
              <li className="flex gap-1 text-xl">
                <FaMailchimp />
                info.nexus.weaver@gmail.com
              </li>
              <li>BD , Dhaka Bangladesh </li>
            </ul>
          </div>
          <div className="space-y-2 flex-1 max-lg:text-center ">
            <strong className="text-4xl font-bold capitalize text-[#27A1B0]">
              lets chat
            </strong>
            {/* <h1 className="text-2xl ">send a message</h1> */}
            <form className="space-y-6 w-full" action="">
              <div className="flex flex-col lg:flex-row gap-5 justify-center">
                {/* <TextField fullWidth label="Name" type="text" />
                <TextField fullWidth label="E-mail" type="text" /> */}
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border px-6 py-2 rounded-full focus:outline-none "
                />

                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border px-6 py-2 rounded-full focus:outline-none "
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border px-6 py-2 rounded-full focus:outline-none "
              />
              {/* <TextField fullWidth label="Subject" type="text" /> */}
              <textarea
                name="massage"
                id=""
                className=" w-full block border px-6 py-2  rounded-xl focus:outline-none "
              ></textarea>
              <Button btnText="Let's Talk" />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
