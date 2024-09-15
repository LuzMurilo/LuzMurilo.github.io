import { getImageURL } from "../../utils";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about} id="about">
        <div className={styles.container}>
            <h1 className={styles.title}>About</h1>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={getImageURL("about/aboutImage.png")} alt="about image of Murilo" />
                <ul className={styles.cardList}>
                    <li className={styles.card}>
                        <img className={styles.cardImg} src={getImageURL("about/cursorIcon.png")} alt="cursor icon" />
                        <p  className={styles.cardText}> Some text about me, graduated in Computer Engineering and worked as a Game Developer and Web Developer</p>
                    </li>
                    <li className={styles.card}>
                        <img className={styles.cardImg} src={getImageURL("about/serverIcon.png")} alt="cursor icon" />
                        <p  className={styles.cardText}> Some text about me, graduated in Computer Engineering and worked as a Game Developer and Web Developer</p>
                    </li>
                    <li className={styles.card}>
                        <img className={styles.cardImg} src={getImageURL("about/uiIcon.png")} alt="cursor icon" />
                        <p  className={styles.cardText}> Some text about me, graduated in Computer Engineering and worked as a Game Developer and Web Developer</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About