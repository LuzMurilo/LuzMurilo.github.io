import styles from "./ExperiencesFull.module.css";
import { getImageURL } from "../../utils";


type Job = {
    role: { [key:string]: string };
    organisation: string;
    startDate: { [key:string]: string };
    endDate: { [key:string]: string };
    assignments: { [key:string]: string[] };
    imageSrc: string;
    website?: string;
}

interface ExperiencesFullProps {
    language: string;
    experienceData: {
        expTitle: { [key:string]: string };
        jobs: Job[];
        websiteButtonText: { [key:string]: string };
    };
}

function ExperiencesFull({ language = "en", experienceData}: ExperiencesFullProps) {

    if (!experienceData || experienceData.jobs.length <= 0)
    {
        return (
            <h1>Data for experiences not found!</h1>
        )
    }

    return (
        <div className={styles.experiences}>
            <h1 className={styles.title}>{experienceData.expTitle[language]}</h1>
            <div className={styles.cardsContainer}>
                {
                    experienceData.jobs.map((exp, i) => {
                        return <div className={styles.expCard} key={`exp ${i}`}>
                            {exp.imageSrc && <img src={getImageURL(exp.imageSrc)} alt={exp.organisation}></img>}
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>
                                    <h2>{exp.role[language]}, {exp.organisation}</h2>
                                    <span className={styles.dates}>{exp.startDate[language]} - {exp.endDate[language]}</span>
                                </div>
                                <ul className={styles.cardAssignments}>{exp.assignments[language].map((ass, index) => <li key={"assignment "+index}>{ass}</li>)}</ul>
                                {exp.website && <a className={styles.websiteBtn} href={exp.website} target="_blank">{experienceData.websiteButtonText[language]}</a>}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ExperiencesFull