import SvgIcon from "../SVG/SvgIcon";
import styles from "./ContactFull.module.css";

interface ContactFullProps {
    language: string;
    contactData: {
        contactPageTitle: { [key:string]: string };
        contactSubtitle: { [key:string]: string };
        contactText: { [key:string]: string };
        contactMethods: {
            methodName: string;
            link: string;
            text: string;
            icon: string;
        }[];
    }
}

function ContactFull({ language = "en", contactData }: ContactFullProps) {
    if (!contactData) return <h1>Contact data missing!</h1>

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{contactData.contactPageTitle[language]}</h1>
            <div className={styles.box}>
                <div className={styles.textContent}>
                    <h3>{contactData.contactSubtitle[language]}</h3>
                    <p>{contactData.contactText[language]}</p>
                </div>
                <div className={styles.linksContent}>
                    <ul className={styles.linksList}>
                        {contactData.contactMethods.map(method => {
                            return (
                                <li className={styles.linkItem} key={method.methodName}>
                                    <a href={method.link} target="_blank" className={styles.socialLink}>
                                        <SvgIcon icon={method.icon} height="32px" width="32px" className={styles.icon}/>
                                        <p>{method.text}</p>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactFull