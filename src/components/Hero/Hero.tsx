import { getImageURL } from "../../utils"
import styles from "./Hero.module.css"

function Hero() {


  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Murilo</h1>
            <p className={styles.description}>I'm a Front-End Developer and also a Game Developer from Brazil that is always looking for the next challenge!</p>
            <a className={styles.contactBtn} href="mailto:murilo.stucki@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageURL("hero/heroImage.png")} alt="Hero image - my photo" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero