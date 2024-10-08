import { getImageURL } from "../../utils"
import Button from "../Button/Button"
import styles from "./Hero.module.css"

import about from "../../data/about.json";

function Hero() {


  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Greetings!</h1>
            <p className={styles.description}>{about.summary}</p>
            <Button to="/contact" className={styles.contactBtn}>Contact Me</Button>
        </div>
        <img className={styles.heroImg} src={getImageURL("hero/heroImage.png")} alt="Hero image - my photo" />
      </div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero