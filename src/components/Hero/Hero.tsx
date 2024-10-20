import { getImageURL } from "../../utils"
import Button from "../Button/Button"
import styles from "./Hero.module.css"

interface HeroProps {
  heroData :{
    greetings: {[key:string]: string};
    summary: {[key:string]: string};
    heroButton: {
        text: {[key:string]: string};
        path: string;
    };
    heroImage: string;
  }
  language: string;
}


function Hero({ language = "en", heroData }: HeroProps) {
  if (!heroData)
  {
    return <h1>Hero data missing!</h1>
  }

  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{heroData.greetings[language]}</h1>
            <p className={styles.description}>{heroData.summary[language]}</p>
            {heroData.heroButton && <Button to={heroData.heroButton.path} className={styles.contactBtn}>{heroData.heroButton.text[language]}</Button>}
        </div>
        <img className={styles.heroImg} src={getImageURL(heroData.heroImage)} alt="Hero image - my photo" />
      </div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero