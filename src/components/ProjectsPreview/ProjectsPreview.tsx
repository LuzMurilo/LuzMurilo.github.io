
import { getImageURL } from "../../utils";
import styles from "./ProjectsPreview.module.css";

import data from "../../data/projects.json";
import Button from "../Button/Button";

function ProjectsPreview() {
  if (!data)
  {
    return <h1>Failed to get projects data!</h1>
  }



  return (
    <section className={styles.projects} id="projects">
        <div className={styles.container}>
            <div className={styles.projectsGrid}>
              <div className={styles.space1}></div>
              { data.projects.map((project, id) => {
                return (
                  <div className={styles.projectCard} key={id}>
                    {project.imageSrc? <img src={getImageURL(project.imageSrc)} alt={`${project.title} thumbnail`} width="256px" height="256px"/> : <img src={getImageURL("/projects/project.png")} alt="default thumbnail"/>}
                    <p className={styles.projectTitle}>{project.title}</p>
                  </div>
                )
              })}
            </div>
            <div className={styles.projectsCall}>
                <h2 className={styles.projectsText}>{data.homePageText}</h2>
                <Button to="/projects" className={styles.projectsBtn}>See Projects</Button>
            </div>
        </div>
    </section>
  )
}

export default ProjectsPreview