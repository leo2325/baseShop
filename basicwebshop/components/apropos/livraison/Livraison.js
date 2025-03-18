import styles from './Livraison.module.css';

export default function Livraison() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>📦 Modes et tarifs de livraison</h2>

            <section className={styles.content}>
                <h3>France Métropolitaine</h3>
                <ul>
                    <li>💶 <strong>3,99€</strong> pour toute commande inférieure à 50€</li>
                    <li>🎁 <strong>Gratuit</strong> dès 50€ d'achat</li>
                </ul>

                <h3>Europe</h3>
                <ul>
                    <li>💶 <strong>7,99€</strong> pour toute commande inférieure à 100€</li>
                    <li>🎁 <strong>Gratuit</strong> dès 100€ d'achat</li>
                </ul>

                <p className={styles.info}>
                    📅 Les délais de livraison sont estimés entre 3 et 5 jours ouvrés.
                </p>
            </section>
        </div>
    );
}
