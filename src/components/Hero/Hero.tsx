import { getImageURL } from "../../utils"
import Button from "../Button/Button"
import styles from "./Hero.module.css"

import about from "../../data/about.json";

function Hero() {


  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{about.greetings}</h1>
            <p className={styles.description}>{about.summary}</p>
            {about.heroButton && <Button to={about.heroButton.path} className={styles.contactBtn}>{about.heroButton.text}</Button>}
        </div>
        <img className={styles.heroImg} src={getImageURL("hero/heroImage.png")} alt="Hero image - my photo" />
      </div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero