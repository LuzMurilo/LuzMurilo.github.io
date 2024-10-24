import { NavLink } from "react-router-dom";
import styles from "./Experience.module.css";
import { getImageURL } from "../../utils";

import Button from "../Button/Button";

interface ExperienceProps {
    language: string;
    experienceData: {
        expTitle: { [key:string]: string };
        jobs: {
            role: { [key:string]: string };
            organisation: string;
            startDate: { [key:string]: string };
            endDate: { [key:string]: string };
            assignments: { [key:string]: string[] };
            imageSrc: string;
        }[];
        experiecesPageButton: {
            text: { [key:string]: string };
            path: string;
        },
    };
    skillsData: {
        title: string;
        imageSrc: string;
    }[];
}

function Experience({ language = "en", experienceData, skillsData }: ExperienceProps) {

    if (!experienceData || !skillsData) return <h1>Experience data missing!</h1>
    const maxSkills = 8;

    return (
        <section className={styles.experience} id="experience">
            <div className={styles.container}>
                <h1 className={styles.title}>{experienceData.expTitle[language]}</h1>
                <div className={styles.content}>
                    <div className={styles.skills}>
                        {skillsData.map((skill, id) => {
                            if (id >= maxSkills) return;
                            return(
                            <div className={styles.skillItem} key={id}>
                                <img src={getImageURL(skill.imageSrc)} alt={skill.title + "icon"} />
                                <h1>{skill.title}</h1>
                            </div>)
                        })}
                    </div>
                    <ul className={styles.cardList}>{
                        experienceData.jobs.map((experience, id) => {
                            return (
                                <NavLink to={experienceData.experiecesPageButton.path} className={styles.card} key={id}>
                                    {experience.imageSrc && <img src={getImageURL(experience.imageSrc)} alt={experience.organisation}></img>}
                                    <div className={styles.cardContent}>
                                        <div className={styles.cardTitle}>
                                            <h2 className={styles.organisation}>{experience.role[language]}, {experience.organisation}</h2>
                                            <span className={styles.dates}>{experience.startDate[language]} - {experience.endDate[language]}</span>
                                        </div>
                                        <ul className={styles.cardAssignments}>{experience.assignments[language].map((ass, index) => <li key={"assignment"+index}>{ass}</li>)}</ul>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                    </ul>
                </div>
                <Button to={experienceData.experiecesPageButton.path} className={styles.detailsBtn}>{experienceData.experiecesPageButton.text[language]}</Button>
            </div>
        </section>
    )
}

export default Experience