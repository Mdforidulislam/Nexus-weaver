"use client";
import Image from "next/image";

import Navbar from "./Navbar";
import Container from "@/Share/Container";

const Header = () => {
  return (
    <Container>
      <div className="flex justify-between h-full items-center shadow-sm p-2">
        <div>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, vero molestias ullam ipsam distinctio exercitationem ipsum voluptatibus cupiditate ratione, ipsa quisquam aliquam doloremque! Vero, inventore, quo minus tenetur quae ipsam ex ipsum velit quas doloribus beatae illum dolorum nisi voluptates iusto corporis dolore tempore expedita. Vitae, quasi iusto! Quaerat nam odit rerum obcaecati, nisi magni mollitia explicabo beatae blanditiis quis! Veniam iure ea sequi omnis excepturi laudantium quidem, quam incidunt est provident perferendis eligendi accusantium possimus reprehenderit et quas consectetur veritatis nostrum obcaecati repellat! Consequatur possimus quisquam deserunt blanditiis magni facere in nobis sapiente. Et asperiores placeat nesciunt repellat dolorum!
         </p>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </Container>
  );
};

export default Header;
