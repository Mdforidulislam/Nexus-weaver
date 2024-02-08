import AboutUs from "@/Components/AboutUs/AboutUs";
import Blogs from "@/Components/Blogs/Blogs";
import Client from "@/Components/ClientSection/Client";
import Contact from "@/Components/Contact/Contact";
import Portfolio from "@/Components/Portfolio/Portfolio";
import Review from "@/Components/Reviews/Review";
import Services from "@/Components/Services/Services";
import TalkIdeas from "@/Components/TalkIdea/TalkIdeas";
import Team from "@/Components/Team/Team";

export default function Home() {
  return (
    <main>
      <Services />
      <TalkIdeas />
      <Portfolio />
      <AboutUs />
      <Blogs />
      <Review />
      <Team />
      <Contact />
    </main>
  );
}
