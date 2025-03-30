import styles from './shippingFree.module.css';

export default function ShippingFree() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Livraison</h3>

            {/* Patch rond pour la mention "Livraison Gratuite" */}
            <div className={styles.patch}>
                Livraison Gratuite
            </div>

            {/* Texte explicatif */}
            <div className={styles.content}>
                <p>
                    <strong>Livraison gratuite</strong> pour toute commande
                    supérieure à <strong className={styles.highlight}>50€</strong> d'achat.
                </p>
                <p>
                    Valable jusqu'au <strong>30 avril</strong> Ne tardez pas !
                </p>
            </div>
        </div>
    );
}
