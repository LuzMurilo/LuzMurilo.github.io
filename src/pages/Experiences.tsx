import AllSkills from "../components/AllSkills/AllSkills"
import DownloadCV from "../components/DownloadCV/DownloadCV"
import ExperiencesFull from "../components/ExperiencesFull/ExperiencesFull"
import Freelances from "../components/Freelances/Freelances"


function Experiences() {
  return (
    <div>
      <ExperiencesFull />
      <Freelances />
      <AllSkills />
      <DownloadCV />
    </div>
  )
}

export default Experiences