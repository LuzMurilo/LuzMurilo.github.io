import DownloadCV from "../components/DownloadCV/DownloadCV"
import ProjectsFull from "../components/ProjectsFull/ProjectsFull"

//DATA
import projectsData from "../data/projects.json";
import otherData from "../data/others.json";

interface ProjectsProps {
  language: string;
}

function Projects({ language = "en" }: ProjectsProps) {
  return (
    <>
      <ProjectsFull language={language} projectsData={projectsData} />
      <DownloadCV downloadCVData={otherData.downloadCV} language={language}/>
    </>
  )
}

export default Projects