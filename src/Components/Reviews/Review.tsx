"use client";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa6";
import Container from "@/Share/Container";
import Image from "next/image";

interface ReviewData {
  _id: string;
  review: string;
  client_image: string;
  client_name: string;
}

const Review = () => {
  const [reviews, setReviews] = useState<ReviewData[]>([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data: ReviewData[]) => setReviews(data));
  }, []);

  return (
    <div className="bg-gray-50 py-10 ">
      <Container>
        <div className="flex flex-col md:flex-row max-md:justify-center  items-center md:gap-16">
          <div className="md:flex-[2] flex-1 space-y-4 max-lg:text-center">
            {/* <p className=" text-black pl-5 py-2 font-semibold md:border-l-8 border-[#27A1B0]">
              Happy Client
            </p> */}
            <button className="text-[#27A1B0] font-bold border-l-4 border-[#27A1B0]  pl-3 ">
              Happy Client
            </button>
            <h2 className="text-5xl text-[#27A1B0] font-extrabold uppercase ">
              Our Client Testimonial
            </h2>
            <p className="text-justify  text-gray-500">
              You’ll enjoy knowing our dedicated team will do whatever is needed
              to keep your pets happy, healthy and safe when you’re away from
              home
            </p>
          </div>

          {/* team member */}
          <Swiper
            className="mySwiper w-full max-md:my-5 md:my-10  md:flex-[4]  "
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              240: {
                slidesPerView: 1, // Show 1 slides
              },
              640: {
                slidesPerView: 1, // Show 1 slides
              },
              // When screen size is >= 1024px
              1024: {
                slidesPerView: 2, // Show 2 slides
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="text-left rounded-xl bg-white w-[340px] mx-auto max-md:w-[400px]  p-5 ">
                  <p className="min-h-[90px]  text-black font-medium">
                    {review.review}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-start gap-3 mt-5">
                      <Image
                        className="w-12 border bg-[#27A1B0] rounded-full "
                        src={review.client_image}
                        alt=" Review Client Image"
                        width={50}
                        height={50}
                      />
                      <div className="text-black">
                        <p className="text-xl font-bold">
                          {review.client_name}
                        </p>
                        <p className="">{review.client_name}</p>
                      </div>
                    </div>
                    <div className="text-[#27A1B0]">
                      <FaQuoteLeft size={40} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Review;
