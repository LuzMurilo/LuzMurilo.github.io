import { getImageURL } from "../../utils";
import styles from "./About.module.css";

import aboutData from "../../data/about.json";

function About() {
  return (
    <section className={styles.about} id="about">
        <div className={styles.container}>
            <h1 className={styles.title}>About me</h1>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={getImageURL("about/aboutImage.png")} alt="about image of Murilo" />
                <ul className={styles.cardList}>
                    {aboutData.paragraphs.map((paragraph, index) => <li className={styles.card} key={index}>
                        <img className={styles.cardImg} src={getImageURL(paragraph.image)} alt="cursor icon" />
                        <p  className={styles.cardText}>{paragraph.text}</p>
                    </li>)}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About