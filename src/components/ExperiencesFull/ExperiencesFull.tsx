import styles from "./ExperiencesFull.module.css";
import { getImageURL } from "../../utils";

import experiences from "../../data/experience.json";

function ExperiencesFull() {

    if (!experiences || experiences.jobs.length <= 0)
    {
        return (
            <h1>Data for experiences not found!</h1>
        )
    }

    return (
        <div className={styles.experiences}>
            <h1 className={styles.title}>Professional experience</h1>
            <div className={styles.cardsContainer}>
                {
                    experiences.jobs.map((exp, i) => {
                        return <div className={styles.expCard} key={`exp ${i}`}>
                            {exp.imageSrc && <img src={getImageURL(exp.imageSrc)} alt={exp.organisation}></img>}
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>
                                    <h2>{exp.role["en"]}, {exp.organisation}</h2>
                                    <span className={styles.dates}>{exp.startDate["en"]} - {exp.endDate["en"]}</span>
                                </div>
                                <ul className={styles.cardAssignments}>{exp.assignments["en"].map((ass, index) => <li key={"assignment "+index}>{ass}</li>)}</ul>
                                {exp.website && <a className={styles.websiteBtn} href={exp.website} target="_blank">See Website</a>}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ExperiencesFull