import styles from "./AllSkills.module.css";
import skills from "../../data/skills.json";
import { getImageURL } from "../../utils";

function AllSkills() {
  return (
    <section className={styles.skills} id="skills">
        <div className={styles.container}>
            <h1 className={styles.title}>All Skills</h1>
            <div className={styles.content}>
                {skills && skills.map((skill, id) => {
                    return( 
                    <div className={styles.skillItem} key={id}>
                        <img src={getImageURL(skill.imageSrc)} alt={skill.title + "icon"} />
                        <h1>{skill.title}</h1>
                    </div>)
                })}
            </div>
        </div>
    </section>
  )
}

export default AllSkills