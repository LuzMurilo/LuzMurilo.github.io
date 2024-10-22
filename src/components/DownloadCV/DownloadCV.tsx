import Button from "../Button/Button"
import styles from "./DownloadCV.module.css";

interface DownloadCVProps {
  language: string;
  downloadCVData: {
    text: { [key:string]: string };
    link: { [key:string]: string };
  };
}

function DownloadCV({ language = "en", downloadCVData }: DownloadCVProps) {
  return (
    <div className={styles.downloadCV}>
        <div className={styles.container}>
            <h2>{downloadCVData.text[language]}</h2>
            <Button external to={downloadCVData.link[language]}>Download</Button>
        </div>
    </div>
  )
}

export default DownloadCV