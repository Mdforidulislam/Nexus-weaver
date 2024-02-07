import React from "react";

interface ButtonProps {
  btnText: string;
}

const Button: React.FC<ButtonProps> = ({ btnText }) => {
  return (
    <button className="bg-[#27A1B0] text-white font-bold px-8 py-2 rounded ">{btnText}</button>
  );
};

export default Button;
