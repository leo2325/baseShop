import styles from './AboutUs.module.css';

export default function Livraison() {
    return (
        <div className={styles.container}>
            
            <h2 className={styles.title}>Livraison</h2>

            <section className={styles.content}>
                <div>
                    <h3 className={styles.titleSection}>France Métropolitaine</h3>
                    <p><strong>4,99€</strong> pour toute commande inférieure à 50€</p>
                    <p><strong>Gratuit</strong> dès 50€ d'achat</p>
                </div>
                <div>
                    <h3 className={styles.titleSection}>Europe</h3>
                    <p><strong>8,99€</strong> pour toute commande inférieure à 100€</p>
                    <p><strong>Gratuit</strong> dès 100€ d'achat</p>
                </div>
                <p className={styles.info}>
                    Les délais de livraison sont estimés entre 3 et 5 jours ouvrés.
                </p>
            </section>
        </div>
    );
}
