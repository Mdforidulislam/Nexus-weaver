import AboutUs from "@/Components/AboutUs/AboutUs";
import Blogs from "@/Components/Blogs/Blogs";
import Client from "@/Components/ClientSection/Client";
import Contact from "@/Components/Contact/Contact";
import Portfolio from "@/Components/Portfolio/Portfolio";
import Services from "@/Components/Services/Services";

export default function Home() {
  return (
      <main>
           <Services/>
           <Portfolio/>
           <AboutUs/>
           <Blogs/>
           <Client/>
           <Contact/>
      </main>
  );
}
