import { getImageURL } from "../../utils";
import Button from "../Button/Button";
import styles from "./ProjectsFull.module.css";

type ProjectData = {
    title: string;
    imageSrc: string;
    description: { [key:string]:string };
    repository? : string;
    videoSrc? : string;
    demo? : string;
    website? : string;
}

interface ProjectsFullProps {
    language: string;
    projectsData: {
        pageTitle: { [key:string]: string };
        projects: ProjectData[];
        endMessage: { [key:string]:string };
        buttonTexts: {
            repository: { [key:string]:string };
            demo: { [key:string]:string };
            video: { [key:string]:string };
            website: { [key:string]:string };
        }
    };

}

function ProjectsFull({ language = "en", projectsData}: ProjectsFullProps) {
    if (!projectsData)
    {
        return <h1>Failed to get projects data!</h1>
    }

    var projects1: ProjectData[] = [];
    var projects2: ProjectData[] = [];
    for (let i = 0; i < projectsData.projects.length; i++)
    {
        if (i < projectsData.projects.length/2) projects1.push(projectsData.projects[i]);
        else projects2.push(projectsData.projects[i]);
    }

    const mapProject = (project: ProjectData, index: number) => {
        return (
            <div className={styles.card} key={index}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <img className={styles.cardImg} src={getImageURL(project.imageSrc)} alt={`${project.title} image`} />
                <div className={styles.cardDescription} dangerouslySetInnerHTML={{__html: project.description[language]}}/>
                <div className={styles.cardButtons}>
                    {project.repository && <Button className={styles.codeBtn} external to={project.repository}>{projectsData.buttonTexts.repository[language]}</Button>}
                    {project.demo && <Button external className={styles.demoBtn} to={project.demo}>{projectsData.buttonTexts.demo[language]}</Button>}
                    {project.videoSrc && <Button external className={styles.demoBtn} to={project.videoSrc}>{projectsData.buttonTexts.video[language]}</Button>}              
                    {project.website && <Button external className={styles.demoBtn} to={project.website}>{projectsData.buttonTexts.website[language]}</Button>}
                </div>
            </div>
        )
    }

    return (
        <div className={styles.projects}>
            <h1 className={styles.title}>{projectsData.pageTitle[language]}</h1>
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
            <h2>{projectsData.endMessage[language]}</h2>
        </div>
    )
}

export default ProjectsFull