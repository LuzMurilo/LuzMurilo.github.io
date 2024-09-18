import { NavLink } from "react-router-dom";
import styles from "./Experience.module.css";
import { getImageURL } from "../../utils";

import skills from "../../data/skills.json";
import experiences from "../../data/experience.json";


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
                <ul className={styles.cardList}>{
                    experiences.map((experience, id) => {
                        return (
                            <NavLink to="/experiences" className={styles.card} key={id}>
                                {experience.imageSrc && <img src={getImageURL(experience.imageSrc)} alt={experience.organisation}></img>}
                                <div className={styles.cardContent}>
                                    <div className={styles.cardTitle}>
                                        <h2>{experience.role}, {experience.organisation}</h2>
                                        <span className={styles.dates}>{experience.startDate} - {experience.endDate}</span>
                                    </div>
                                    <ul className={styles.cardAssignments}>{experience.assignments.map((ass, index) => <li key={"assignment"+index}>{ass}</li>)}</ul>
                                </div>
                            </NavLink>
                        )
                    })
                }
                </ul>
            </div>
            <NavLink to="/experiences" className={styles.detailsBtn}>+ Details</NavLink>
        </div>
    </section>
  )
}

export default Experience