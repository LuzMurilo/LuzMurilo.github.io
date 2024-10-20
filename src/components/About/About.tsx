import { getImageURL } from "../../utils";
import styles from "./About.module.css";

import SvgIcon from "../SVG/SvgIcon";

interface AboutProps {
    language: string;
    aboutData: {
        paragraphs: {
            text:{ [key:string]: string};
            icon: string;
        }[];
        image: string;
        title: { [key:string]: string };
    };
}

function About({ language = "en", aboutData }: AboutProps) {
    if (!aboutData) return (<h1>About data Missing!</h1>);

  return (
    <section className={styles.about} id="about">
        <div className={styles.container}>
            <h1 className={styles.title}>{aboutData.title[language]}</h1>
            <div className={styles.content}>
                
                <ul className={styles.cardList}>
                    {aboutData.paragraphs.map((paragraph, index) => <li className={styles.card} key={index}>
                        {
                            paragraph.icon  ? 
                            <div className={styles.cardImg}>
                                <SvgIcon icon={paragraph.icon} width="100%" height="100%"/>
                            </div> 
                            : 
                            <div className={styles.cardImg}>
                                <SvgIcon icon="code" width="100%" height="100%"/>
                            </div> 
                        }
                        <p  className={styles.cardText}>{paragraph.text[language]}</p>
                    </li>)}
                </ul>
            </div>
        </div>
        <img className={styles.aboutImg} src={getImageURL(aboutData.image)} alt="about image of Murilo" />
    </section>
  )
}

export default About