import AboutUs from "@/Components/AboutUs/AboutUs";
import Blogs from "@/Components/Blogs/Blogs";
import Client from "@/Components/ClientSection/Client";
import Contact from "@/Components/Contact/Contact";
import Portfolio from "@/Components/Portfolio/Portfolio";
import Services from "@/Components/Services/Services";
import TalkIdeas from "@/Components/TalkIdea/TalkIdeas";

export default function Home() {
  return (
      <main>
           <Services/>
           <TalkIdeas/>
           <Portfolio/>
           <AboutUs/>
           <Blogs/>
           <Client/>
           <Contact/>
      </main>
  );
}
