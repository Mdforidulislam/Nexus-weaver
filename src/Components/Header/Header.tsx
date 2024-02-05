"use client";
import Image from "next/image";

import logo from "../../../public/logo.jpg";
import Navbar from "./Navbar";
import Container from "@/Share/Container";

const Header = () => {
  return (
    <Container>
      <div className="flex justify-between h-full items-center shadow-sm p-2">
        <div>
          <Image src={logo} width={80} height={80} alt="logo" />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </Container>
  );
};

export default Header;
