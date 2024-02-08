"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Container from "@/Share/Container";
import Image from "next/image";
import Title from "@/Share/Titile";

interface TeamData {
  id: string;
  image: string;
  name: string;
  title: string;
  short_message: string;
}

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<TeamData[]>([]);

  useEffect(() => {
    fetch("/teamData.json")
      .then((res) => res.json())
      .then((data: TeamData[]) => setTeamMembers(data));
  }, []);
  return (
    <div className="bg-gradient-to-r from-[#fdfdf8] to-[#fffafc] py-10">
      <div>
        <Title
          heading={"Our Team"}
          subHeading={
            "You’ll enjoy knowing our dedicated team will do whatever is needed to keep your pets happy, healthy and safe when you’re away from home."
          }
        />
      </div>
      <Container>
        {/* team member */}
        <Swiper
          className="mySwiper"
          // slidesPerView={6}
          spaceBetween={20}
          autoplay={{
            delay: 1000,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            400: {
              slidesPerView: 1, // Show 2 slides
            },
            // When screen size is >= 640px
            640: {
              slidesPerView: 2, // Show 2 slides
            },

            // When screen size is >= 1024px
            1024: {
              slidesPerView: 3, // Show 6 slides
            },
          }}
        >
          {teamMembers.map((person) => (
            <SwiperSlide key={person.id}>
              <div className="text-center border-animate shadow-md text-black p-5 ">
                <Image
                  className="bg-neutral-50 border border-[#27A1B0] w-[150px] mx-auto rounded-full "
                  src={person.image}
                  alt="team mamber image"
                  width={100}
                  height={100}
                />
                <p className="text-2xl text-[#27A1B0] font-bold py-2">
                  {person.name}
                </p>
                <p className=" font-semibold ">{person.title}</p>
                <p className="min-h-[80px] pt-3">{person.short_message}</p>
                <div className="flex gap-8 pt-4 cursor-pointer justify-center">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaGoogle />
                  <FaLinkedinIn />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Team;
