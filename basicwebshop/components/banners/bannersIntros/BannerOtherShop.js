import styles from './Banners.module.css';

export default function BannerOtherShop() {
    return (
        <div 
            className={styles.backgroundImage}
            style={{ backgroundImage: "url('/images/background3.jpg')" }}
        >
            <h2 className={styles.mainTitle}>Patisseries</h2>
            <h3 className={styles.sloganTitle}>À venir</h3>
        </div>
    );
}
