"use client";
import Container from "@/Share/Container";
import animation from "../../../public/Animation4.json";
import Lottie from "react-lottie";
import Button from "@/Share/Button";
const TalkIdeas = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="lg:mb-20">
      <Container>
        <div className="block md:flex justify-center items-center gap-14">
          <div className="space-y-3">
            <h3 className="text-5xl font-bold">
              Let&apos;s talk about your idea <br /> today
            </h3>
            <p className="w-2/4">
              For any types of query, you can book a 30 min call with us
              absolutely Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit. Dolore, repellat! Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Enim, neque?  free
            </p>

            <Button btnText="Let's talk to us" />
          </div>
          <div>
            <Lottie options={defaultOptions} height={400} width={400}></Lottie>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TalkIdeas;
