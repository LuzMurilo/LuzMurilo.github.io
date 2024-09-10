import styles from "./Navbar.module.css";
import { getImageURL } from "../../utils";
import { useState } from "react";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/" 
            onClick={() => setMenuOpen(false)}>
            Portfolio
        </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
                src={menuOpen ? getImageURL("nav/closeIcon.png") : getImageURL("nav/menuIcon.png")} 
                alt="menu icon" 
                onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.navList} ${!menuOpen && styles.hidden}`}
                onClick={() => setMenuOpen(false)}>
                <li className={styles.navItem}>
                    <a href="/#about">About</a>
                </li>
                <li className={styles.navItem}>
                    <a href="/#experience">Experience</a>
                </li>
                <li className={styles.navItem}>
                    <a href="/#projects">Projects</a>
                </li>
                <li className={styles.navItem}>
                    <a href="/#Contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar