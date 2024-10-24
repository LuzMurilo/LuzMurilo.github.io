import styles from "./AllSkills.module.css";
import { getImageURL } from "../../utils";

interface AllSkillsProps {
    language: string;
    skillsData: {
        skillsSectionTitle: { [key:string]:string };
        skills: {
            title: string;
            imageSrc: string;
        }[];
    }
}

function AllSkills({ language = "en", skillsData }: AllSkillsProps) {
    if (!skillsData || skillsData.skills.length === 0) return <h1>Skills data missing!</h1>

    return (
        <section className={styles.skills} id="skills">
            <div className={styles.container}>
                <h1 className={styles.title}>{skillsData.skillsSectionTitle[language]}</h1>
                <div className={styles.content}>
                    {skillsData.skills.map((skill, id) => {
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