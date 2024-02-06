import AboutUs from "@/Components/AboutUs/AboutUs";
import Client from "@/Components/ClientSection/Client";
import Contact from "@/Components/Contact/Contact";
import Services from "@/Components/Services/Services";

export default function Home() {
  return (
      <main>
           <Services/>
           <AboutUs/>
           <Client/>
           <Contact/>
      </main>
  );
}
