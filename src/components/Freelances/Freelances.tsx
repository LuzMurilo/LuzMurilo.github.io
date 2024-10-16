import styles from "./Freelances.module.css";

import experiences from "../../data/experience.json";

function Freelances() {

    if (!experiences || experiences.freelances.length <= 0)
    {
        return (
            <h1>Data for freelances not found!</h1>
        )
    }

    return (
        <div className={styles.experiences}>
            <h1 className={styles.title}>Freelances</h1>
            <div className={styles.cardsContainer}>
                {
                    experiences.freelances.map((exp, i) => {
                        return <div className={styles.expCard} key={`exp ${i}`}>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>
                                    <h2>{exp.role}{exp.organisation && <>, {exp.organisation}</>}</h2>
                                    <span className={styles.dates}>{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <ul className={styles.cardAssignments}>{exp.assignments.map((ass, index) => <li key={"assignment "+index}>{ass}</li>)}</ul>
                                {exp.website && <a className={styles.websiteBtn} href={exp.website} target="_blank">See Website</a>}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Freelances