import About from "../components/About/About"
import Experience from "../components/Experience/Experience"
import Hero from "../components/Hero/Hero"
import ProjectsPreview from "../components/ProjectsPreview/ProjectsPreview"


function Home() {
  return (
    <>
        <Hero />
        <About />
        <Experience />
        <ProjectsPreview />
    </>
  )
}

export default Home