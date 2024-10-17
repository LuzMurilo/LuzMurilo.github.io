import About from "../components/About/About"
import DownloadCV from "../components/DownloadCV/DownloadCV"
import Experience from "../components/Experience/Experience"
import Hero from "../components/Hero/Hero"
import ProjectsPreview from "../components/ProjectsPreview/ProjectsPreview"


function Home() {
  return (
    <>
        <Hero />
        <About />
        <ProjectsPreview />
        <Experience />
        <DownloadCV />
    </>
  )
}

export default Home