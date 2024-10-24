import AllSkills from "../components/AllSkills/AllSkills"
import DownloadCV from "../components/DownloadCV/DownloadCV"
import ExperiencesFull from "../components/ExperiencesFull/ExperiencesFull"
import Freelances from "../components/Freelances/Freelances"

//DATA
import otherData from "../data/others.json";

interface ExperiencesProps {
  language: string;
}

function Experiences({ language = "en" }: ExperiencesProps) {
  return (
    <div>
      <ExperiencesFull />
      <Freelances />
      <AllSkills />
      <DownloadCV downloadCVData={otherData.downloadCV} language={language}/>
    </div>
  )
}

export default Experiences