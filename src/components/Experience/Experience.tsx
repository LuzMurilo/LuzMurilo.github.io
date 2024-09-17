import styles from "./Experience.module.css";
import { getImageURL } from "../../utils";

import skills from "../../data/skills.json";


function Experience() {

  return (
    <section className={styles.experience} id="experience">
        <div className={styles.container}>
            <h1 className={styles.title}>Experience</h1>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills && skills.map((skill, id) => {
                        return( 
                        <div className={styles.skillItem} key={id}>
                            <img src={getImageURL(skill.imageSrc)} alt={skill.title + "icon"} />
                            <h1>{skill.title}</h1>
                        </div>)
                    })}
                </div>
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

export default Experience