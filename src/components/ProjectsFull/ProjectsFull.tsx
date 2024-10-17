import { getImageURL } from "../../utils";
import Button from "../Button/Button";
import styles from "./ProjectsFull.module.css";

import data from "../../data/projects.json";

type ProjectData = {
    title: string;
    imageSrc: string;
    description: string;
    repository? : string;
    videoSrc? : string;
    demo? : string;
}

function ProjectsFull() {
    if (!data)
    {
        return <h1>Failed to get projects data!</h1>
    }

    var projects1: ProjectData[] = [];
    var projects2: ProjectData[] = [];
    for (let i = 0; i < data.projects.length; i++)
    {
        if (i < data.projects.length/2) projects1.push(data.projects[i]);
        else projects2.push(data.projects[i]);
    }

    const mapProject = (project: ProjectData, index: number) => {
        return (
            <div className={styles.card} key={index}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <img className={styles.cardImg} src={getImageURL(project.imageSrc)} alt={`${project.title} image`} />
                <div className={styles.cardDescription} dangerouslySetInnerHTML={{__html: project.description}}/>
                <div className={styles.cardButtons}>
                    {project.repository && <Button className={styles.codeBtn} external to={project.repository}>See the Code</Button>}
                    {project.demo && <Button external className={styles.demoBtn} to={project.demo}>Explore the Demo</Button>}
                    {project.videoSrc && <Button external className={styles.demoBtn} to={project.videoSrc}>Watch Video</Button>}
                </div>
            </div>
        )
    }

    return (
        <div className={styles.projects}>
            <h1 className={styles.title}>My Projects</h1>
            <div className={styles.columns}>
                <div className={styles.cardsContainer}>
                    {
                        projects1.map((project, index) => (mapProject(project, index)))
                    }
                </div>
                <div className={styles.cardsContainer}>
                    {
                        projects2.map((project, index) => (mapProject(project, index)))
                    }
                </div>
            </div>
            <h2>{data.endMessage}</h2>
        </div>
    )
}

export default ProjectsFull