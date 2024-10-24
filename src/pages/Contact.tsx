import ContactFull from "../components/ContactFull/ContactFull"
import DownloadCV from "../components/DownloadCV/DownloadCV"

//DATA
import otherData from "../data/others.json";
import contactData from "../data/contact.json";

interface ContactProps {
  language: string;
}

function Contact({ language = "en" }: ContactProps) {
  return (
    <div>
      <ContactFull contactData={contactData} language={language}/>
      <DownloadCV downloadCVData={otherData.downloadCV} language={language}/>
    </div>
  )
}

export default Contact