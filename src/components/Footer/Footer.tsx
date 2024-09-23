
import { NavLink } from "react-router-dom";
import { getImageURL } from "../../utils";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer} id="footer">
        <div className={styles.info}>
            <img src={getImageURL("Murilo-minimal-pixel.png")} alt="Murilo Pixel Portrait" />
            <h4>Website made by Murilo Luz Stucki</h4>
        </div>
        <div className={styles.navigation}>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/experiences"}>Experiences</NavLink>
              <NavLink to={"/projects"}>Projects</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
        </div>
    </div>
  )
}

export default Footer