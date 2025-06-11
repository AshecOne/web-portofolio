import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/views/Hero";
import Games from "@/views/Games";
import ProfessionalProjects from "@/views/ProfessionalProjects";
import StartupProjects from "@/views/StartupProjects";
import PersonalProjects from "@/views/PersonalProjects";
import TechStack from "@/views/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Games />
      <ProfessionalProjects />
      <StartupProjects />
      <PersonalProjects />
      <TechStack />
      <Footer />
    </>
  );
}
