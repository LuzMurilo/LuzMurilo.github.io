import styles from "./Freelances.module.css";


type Freelance = {
    role: { [key:string]: string };
    organisation?: string;
    startDate: { [key:string]: string };
    endDate: { [key:string]: string };
    assignments: { [key:string]: string[] };
    website?: string;
}

interface FreelancesProps {
    language: string;
    freelanceData: {
        freelanceTitle: { [key:string]: string };
        freelances: Freelance[];
        websiteButtonText: { [key:string]: string };
    };
}

function Freelances({ language = "en", freelanceData }: FreelancesProps) {

    if (!freelanceData || freelanceData.freelances.length <= 0)
    {
        return (
            <h1>Data for freelances not found!</h1>
        )
    }

    return (
        <div className={styles.experiences}>
            <h1 className={styles.title}>{freelanceData.freelanceTitle[language]}</h1>
            <div className={styles.cardsContainer}>
                {
                    freelanceData.freelances.map((free, i) => {
                        return <div className={styles.expCard} key={`freelance ${i}`}>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>
                                    <h2>{free.role[language]}{free.organisation && <>, {free.organisation}</>}</h2>
                                    <span className={styles.dates}>{free.startDate[language]} - {free.endDate[language]}</span>
                                </div>
                                <ul className={styles.cardAssignments}>{free.assignments[language].map((ass, index) => <li key={"assignment "+index}>{ass}</li>)}</ul>
                                {free.website && <a className={styles.websiteBtn} href={free.website} target="_blank">{freelanceData.websiteButtonText[language]}</a>}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Freelances