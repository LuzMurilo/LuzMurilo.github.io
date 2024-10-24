import AllSkills from "../components/AllSkills/AllSkills"
import DownloadCV from "../components/DownloadCV/DownloadCV"
import ExperiencesFull from "../components/ExperiencesFull/ExperiencesFull"
import Freelances from "../components/Freelances/Freelances"

//DATA
import otherData from "../data/others.json";
import experiencesData from "../data/experience.json";
import skillsData from "../data/skills.json";

interface ExperiencesProps {
  language: string;
}

function Experiences({ language = "en" }: ExperiencesProps) {
  return (
    <div>
      <ExperiencesFull experienceData={experiencesData} language={language}/>
      <Freelances freelanceData={experiencesData} language={language}/>
      <AllSkills skillsData={skillsData} language={language}/>
      <DownloadCV downloadCVData={otherData.downloadCV} language={language}/>
    </div>
  )
}

export default Experiences