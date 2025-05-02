import Button from '../../../elements/buttons/Btn';
import styles from './shippingFree.module.css';

export default function ShippingFree() {
    return (
        <div className={styles.container}>
            <p className={styles.patch}>Livraison Gratuite</p>{/* Patch rond incliné */}
            <div className={styles.content}>
                <p><strong>Livraison gratuite</strong> pour toute commande supérieure à <strong className={styles.highlight}>50€</strong>.</p>
            </div>
        </div>
    );
}
