
import { getImageURL } from "../../utils";
import styles from "./ProjectsPreview.module.css";

import data from "../../data/projects.json";
import Button from "../Button/Button";

interface ProjectsPreviewProps {
  language: string;
  projectsData: {
    homePageText: { [key:string]:string };
    projects: {
      title: string;
      imageSrc: string;
    }[];
    projectsPageButton: {
        text: { [key:string]:string };
        path: string;
    },
  }
}

function ProjectsPreview({ language = "en", projectsData }: ProjectsPreviewProps) {
  if (!data)
  {
    return <h1>Failed to get projects data!</h1>
  }



  return (
    <section className={styles.projects} id="projects">
        <div className={styles.container}>
            <div className={styles.projectsGrid}>
              <div className={styles.space1}></div>
              { projectsData.projects.map((project, id) => {
                return (
                  <div className={styles.projectCard} key={id}>
                    {project.imageSrc? <img src={getImageURL(project.imageSrc)} alt={`${project.title} thumbnail`} width="256px" height="256px"/> : <img src={getImageURL("/projects/project.png")} alt="default thumbnail"/>}
                    <p className={styles.projectTitle}>{project.title}</p>
                  </div>
                )
              })}
            </div>
            <div className={styles.projectsCall}>
                <h2 className={styles.projectsText}>{projectsData.homePageText[language]}</h2>
                <Button to={projectsData.projectsPageButton.path} className={styles.projectsBtn}>{projectsData.projectsPageButton.text[language]}</Button>
            </div>
        </div>
    </section>
  )
}

export default ProjectsPreview