import { getImageURL } from "../../utils";
import styles from "./About.module.css";

import aboutData from "../../data/about.json";
import SvgIcon from "../SVG/SvgIcon";

function About() {
  return (
    <section className={styles.about} id="about">
        <div className={styles.container}>
            <h1 className={styles.title}>About me</h1>
            <div className={styles.content}>
                
                <ul className={styles.cardList}>
                    {aboutData.paragraphs.map((paragraph, index) => <li className={styles.card} key={index}>
                        {
                            paragraph.icon  ? 
                            <div className={styles.cardImg}>
                                <SvgIcon icon={paragraph.icon} width="100%" height="100%"/>
                            </div> 
                            : 
                            <img className={styles.cardImg} src={getImageURL(paragraph.image || "about/cursorIcon.png")} alt="icon" />
                        }
                        <p  className={styles.cardText}>{paragraph.text}</p>
                    </li>)}
                </ul>
            </div>
        </div>
        <img className={styles.aboutImg} src={getImageURL("about/programming-me.png")} alt="about image of Murilo" />
    </section>
  )
}

export default About