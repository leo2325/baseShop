import styles from './Banners.module.css';

export default function BannerPecanShop() {
    return (
        <div 
            className={styles.backgroundImage}
            style={{ backgroundImage: "url('/images/background4.jpg')" }}
        >
            <h2 className={styles.mainTitle}>Noix de pécan</h2>
            <h3 className={styles.sloganTitle}>Enrobées avec amour</h3>
        </div>
    );
}
