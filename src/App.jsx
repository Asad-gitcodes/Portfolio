import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CustomCursor from "./components/CustomCursor"
import SkillsAndCertifications from './components/SkillsAndCertifications';
import ProjectsPage from './components/ProjectsPage'; // adjust path as needed
import EducationAndLeadership from "./components/EducationAndLeadership";

export default function App() {
  return (
    <>
    <Header/> 
    <HeroSection/>
    <CustomCursor/>
    <SkillsAndCertifications />
    <ProjectsPage />
    <EducationAndLeadership/>

    </>
  )
}