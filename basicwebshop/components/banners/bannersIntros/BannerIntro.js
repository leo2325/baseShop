import styles from './banners.module.css';

export default function BannerIntro({
    backgroundImage, 
    mainTitle, 
    sloganTitle, 
    discoverText 
}) {
    return (
        <div className={styles.introductionContainer}>
            <div 
                className={styles.backgroundImage}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <h2 className={styles.mainTitle}>{mainTitle}</h2>
                {sloganTitle && <h3 className={styles.sloganTitle}>{sloganTitle}</h3>}
                {discoverText && <p className={styles.discoverText}>{discoverText}</p>}
            </div>
        </div>
    );
}
