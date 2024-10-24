
import { NavLink } from "react-router-dom";
import { getImageURL } from "../../utils";
import styles from "./Footer.module.css";

interface FooterProps {
  language: string;
  navData: {
      title: string;
      pages: {
          pageName: { [key:string] : string };
          path: string;
      }[];
      socials: {
          id: string;
          link: string;
          icon: string;
      }[];
      footerText: { [key:string] : string };
      footerImage: {
        path: string;
        alt: string;
    }
  };
}

function Footer({ language = "en", navData}: FooterProps) {
  if (!navData) return <h1>Footer: Navigation data missing!</h1>

  return (
    <div className={styles.footer} id="footer">
        <div className={styles.info}>
            <img src={getImageURL(navData.footerImage.path)} alt={navData.footerImage.alt} />
            <h4>{navData.footerText[language]}</h4>
        </div>
        <div className={styles.navigation}>
          {navData.pages.map((page) => {
            return (
              <NavLink to={page.path} key={page.pageName[language]}>{page.pageName[language]}</NavLink>
            );
          })}
        </div>
    </div>
  )
}

export default Footer