import React from "react";

interface TitleProps {
  heading: string;
  subHeading: string;
}

const Title: React.FC<TitleProps> = ({ heading, subHeading }) => {
  return (
    <div
      style={{
        backgroundImage: "radial-gradient(#baedf5, #f0f9fa, #ffffff)",
      }}
      className="text-center py-5 mx-5 px-5 md:py-16 my-10 space-y-2  rounded-full"
    >
      <h1 className="text-3xl font-bold uppercase">{heading}</h1>
      <p>{subHeading}</p>
    </div>
  );
};

export default Title;
