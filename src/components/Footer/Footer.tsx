
import { getImageURL } from "../../utils";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer} id="footer">
        <div className={styles.info}>
            <img src={getImageURL("Murilo-minimal-pixel.png")} alt="Murilo Pixel Portrait" />
            <h4>Murilo Luz Stucki</h4>
        </div>
        <div className={styles.navigation}>
            <ul>
                <li>Home</li>
                <li>Experiences</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer