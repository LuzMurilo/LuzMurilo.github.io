import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getImageURL } from "../../utils";
import { useState } from "react";
import SvgIcon from "../SVG/SvgIcon";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
        <nav className={styles.navbar} id="navbar">
            <Link to="/" className={styles.title}>Murilo Luz Stucki</Link>
            <div className={styles.menu}>
                <ul className={`${styles.navList} ${!menuOpen && styles.hidden}`}
                    onClick={() => setMenuOpen(false)}>
                    <li className={styles.navItem}>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/experiences">Experiences</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li className={`${styles.navItem} ${styles.socials}`}>
                        <a href="https://www.linkedin.com/in/luz-murilo/" target="_blank" className={styles.socialBtn}>
                            <SvgIcon icon="linkedin" />
                        </a>
                        <a href="https://github.com/LuzMurilo" target="_blank" className={styles.socialBtn}>
                            <SvgIcon icon="github" />
                        </a>
                    </li>
                </ul>
                <img className={styles.menuBtn} 
                    src={menuOpen ? getImageURL("nav/closeIcon.png") : getImageURL("nav/menuIcon.png")} 
                    alt="menu icon" 
                    onClick={() => setMenuOpen(!menuOpen)}/>
            </div>
        </nav>
        <div className={styles.space} id="anchor"></div>
    </>
  )
}

export default Navbar