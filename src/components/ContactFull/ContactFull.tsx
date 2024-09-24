import SvgIcon from "../SVG/SvgIcon";
import styles from "./ContactFull.module.css";

function ContactFull() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.box}>
            <div className={styles.textContent}>
                <h3>Feel free to contact me anywhere!</h3>
                <p>I'd love to answer any questions, talk about new projects and collaborations, or hear your feedback.</p>
            </div>
            <div className={styles.linksContent}>
                <ul className={styles.linksList}>
                    <li className={styles.linkItem}>
                        <a href="https://www.linkedin.com/in/luz-murilo/" target="_blank" className={styles.socialLink}>
                            <SvgIcon icon="linkedin" height="32px" width="32px"/>
                            <p>linkedin.com/in/luz-murilo/</p>
                        </a>
                    </li>
                    <li className={styles.linkItem}>
                        <a href="https://github.com/LuzMurilo" target="_blank" className={styles.socialLink}>
                            <SvgIcon icon="github" height="32px" width="32px"/>
                            <p>github.com/LuzMurilo</p>
                        </a>
                    </li>
                    <li className={styles.linkItem}>
                        <a href="mailto:murilo.stucki@gmail.com" target="_blank" className={styles.socialLink}>
                            <SvgIcon icon="email" height="32px" width="32px"/>
                            <p>murilo.stucki@gmail.com</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ContactFull