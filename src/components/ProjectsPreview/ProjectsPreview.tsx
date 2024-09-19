
import { NavLink } from "react-router-dom";
import styles from "./ProjectsPreview.module.css";

import projects from "../../data/projects.json";
import { getImageURL } from "../../utils";

function ProjectsPreview() {
  if (!projects || projects.length === 0)
  {
    return <h1>No projects to show</h1>
  }

  return (
    <section className={styles.projects} id="projects">
        <div className={styles.container}>
            <div className={styles.projectsGrid}>
              { projects.map((project, id) => {
                return (
                  <div className={styles.projectCard} key={id}>
                    {project.imageSrc? <img src={getImageURL(project.imageSrc)} alt={`${project.title} thumbnail`} width="256px" height="256px"/> : <img src={getImageURL("/projects/project.png")} alt="default thumbnail"/>}
                    <p className={styles.projectTitle}>{project.title}</p>
                  </div>
                )
              })}
            </div>
            <div className={styles.projectsCall}>
                <h2 className={styles.projectsText}>Take a look at all my personal projects</h2>
                <NavLink to="/projects" className={styles.projectsBtn}>See Projects</NavLink>
            </div>
        </div>
    </section>
  )
}

export default ProjectsPreview