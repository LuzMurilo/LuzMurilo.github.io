import { getImageURL } from "../../utils";
import Button from "../Button/Button";
import styles from "./ProjectsFull.module.css";

import data from "../../data/projects.json";

function ProjectsFull() {
    if (!data)
    {
        return <h1>Failed to get projects data!</h1>
    }

    var projects1: typeof data.projects = [];
    var projects2: typeof data.projects = [];
    for (let i = 0; i < data.projects.length; i++)
    {
        if (i < data.projects.length/2) projects1.push(data.projects[i]);
        else projects2.push(data.projects[i]);
    }

    return (
        <div className={styles.projects}>
            <h1 className={styles.title}>My Projects</h1>
            <div className={styles.columns}>
                <div className={styles.cardsContainer}>
                    {
                        projects1.map((project, index) => {
                            return (
                                <div className={styles.card} key={index}>
                                    <h2 className={styles.cardTitle}>{project.title}</h2>
                                    <img className={styles.cardImg} src={getImageURL(project.imageSrc)} alt={`${project.title} image`} />
                                    <div className={styles.cardDescription} dangerouslySetInnerHTML={{__html: project.description}}/>
                                    <div className={styles.cardButtons}>
                                        {project.reposirory && <Button className={styles.codeBtn} external to={project.reposirory}>See the Code</Button>}
                                        {project.demo && <Button className={styles.demoBtn} to={project.demo}>Explore the Demo</Button>}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.cardsContainer}>
                    {
                        projects2.map((project, index) => {
                            return (
                                <div className={styles.card} key={index}>
                                    <h2 className={styles.cardTitle}>{project.title}</h2>
                                    <img className={styles.cardImg} src={getImageURL(project.imageSrc)} alt={`${project.title} image`} />
                                    <div className={styles.cardDescription} dangerouslySetInnerHTML={{__html: project.description}}/>
                                    <div className={styles.cardButtons}>
                                        {project.reposirory && <Button className={styles.codeBtn} external to={project.reposirory}>See the Code</Button>}
                                        {project.demo && <Button className={styles.demoBtn} to={project.demo}>Explore the Demo</Button>}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectsFull