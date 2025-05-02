import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import styles from './AboutUs.module.css';

export default function Contacts() {
    return (
        <div className={styles.container}>
            <h2>Contacts</h2>

            <section className={styles.content}>
                
                <div className={styles.contactIntro_container}>
                    <p>Pour toute demande concernant une commande, nous vous remercions de bien vouloir contacter notre service client directement par mail.</p>
                    <p>Notre service client sera exceptionnellement fermé le samedi 22 mars.</p>
                </div>
                <div className={styles.contactItem}>
                    <MapPinIcon className={styles.icon} />
                    <p>123 Rue du Chocolat, 75000 Paris, France</p>
                </div>
            </section>
        </div>
    );
}
