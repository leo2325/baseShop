import Link from 'next/link';
import styles from './Banners.module.css';

export default function BannerHome() {
    return (
        <Link href="/products" className={styles.introductionContainer}>
            <div 
                className={styles.backgroundImage}
                style={{ backgroundImage: "url('/images/background1.jpg')" }}
            >
                <h2 className={styles.mainTitle}>Bienvenue</h2>
                <h3 className={styles.sloganTitle}>Envie d'une douceur ?</h3>
                <p className={styles.discoverText}>Découvrez nos produits</p>
            </div>
        </Link>
    );
}
