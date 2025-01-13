import AboutHome from "@/components/home/AboutHome";
import Hero from "@/components/home/Hero";
import ProjectsHome from "@/components/home/ProjectsHome";
import SkillsHome from "@/components/home/SkillsHome";

const Home = () => {
  return (
    <div>
      <Hero/>
      <SkillsHome/>
      <ProjectsHome/>
      <AboutHome/>
    </div>
  );
};

export default Home;
