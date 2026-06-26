import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import MyWork from "../components/MyWork";
import ProjectCard from "../components/ProjectCard";
import Stats from "../components/Stats";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <MyWork />
       <ProjectCard />
      <Stats />
      <ContactForm />
    </>
  );
}

export default Home;