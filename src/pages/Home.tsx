import About from "../components/About/About"
import DownloadCV from "../components/DownloadCV/DownloadCV"
import Experience from "../components/Experience/Experience"
import Hero from "../components/Hero/Hero"
import ProjectsPreview from "../components/ProjectsPreview/ProjectsPreview"

//DATA
import aboutData from "../data/about.json";
import projectsData from "../data/projects.json";
import otherData from "../data/others.json";

interface HomeProps {
  language: string;
}

function Home({ language="en" }: HomeProps) {
  return (
    <>
        <Hero heroData={aboutData.hero} language={language}/>
        <About aboutData={aboutData} language={language}/>
        <ProjectsPreview projectsData={projectsData} language={language}/>
        <Experience />
        <DownloadCV downloadCVData={otherData.downloadCV} language={language}/>
    </>
  )
}

export default Home