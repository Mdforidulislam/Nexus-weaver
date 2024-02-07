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
    <div>
      <Container>
        <div className="flex justify-center items-center gap-14">
          <div className="space-y-3">
            <h3 className="text-5xl font-bold">
              Let&apos;s talk about your idea <br /> today
            </h3>
            <p>
              For any types of query, you can book a 30 min call with us
              absolutely <br /> free
            </p>

            <Button btnText="Let's talk to us" />
          </div>
          <div>
            <Lottie options={defaultOptions} height={500} width={500}></Lottie>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TalkIdeas;