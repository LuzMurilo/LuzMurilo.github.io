import { getImageURL } from "../../utils";
import Button from "../Button/Button";
import styles from "./ProjectsFull.module.css";

function ProjectsFull() {
  return (
    <div className={styles.projects}>
        <h1 className={styles.title}>My Projects</h1>
        <div className={styles.cardsContainer}>
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>Project Aster</h2>
                <img className={styles.cardImg} src={getImageURL("projects/aster.png")} alt="Aster screenshot" />
                <p className={styles.cardDescription}> Here's a description of the project, especifing which tecnologies were used and what's the main idea</p>
                <div className={styles.cardButtons}>
                    <Button className={styles.codeBtn} external to="github.com">See the Code</Button>
                    <Button className={styles.demoBtn} to="github.com">Explore the Demo</Button>
                </div>
            </div>
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>Project Aster</h2>
                <img className={styles.cardImg} src={getImageURL("projects/aster.png")} alt="Aster screenshot" />
                <p className={styles.cardDescription}> Here's a description of the project, especifing which tecnologies were used and what's the main idea</p>
                <div className={styles.cardButtons}>
                    <Button className={styles.codeBtn} external to="github.com">See the Code</Button>
                    <Button className={styles.demoBtn} to="github.com">Explore the Demo</Button>
                </div>
            </div>
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>Project Aster</h2>
                <img className={styles.cardImg} src={getImageURL("projects/aster.png")} alt="Aster screenshot" />
                <p className={styles.cardDescription}> Here's a description of the project, especifing which tecnologies were used and what's the main idea</p>
                <div className={styles.cardButtons}>
                    <Button className={styles.codeBtn} external to="https://www.github.com">See the Code</Button>
                    <Button className={styles.demoBtn} to="github.com">Explore the Demo</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectsFull