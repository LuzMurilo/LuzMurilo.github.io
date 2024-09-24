import Button from "../Button/Button"
import styles from "./DownloadCV.module.css";


function DownloadCV() {
  return (
    <div className={styles.downloadCV}>
        <div className={styles.container}>
            <h2>Download my Resume</h2>
            <Button external to="https://drive.google.com/file/d/1NZaM66LfwCtcAkHslodspxo3Q0qY6PAT/view?usp=sharing">Download</Button>
        </div>
    </div>
  )
}

export default DownloadCV