import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import styles from './Contacts.module.css';

export default function Contacts() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contactez-nous</h2>

            <section className={styles.content}>
                <div className={styles.contactItem}>
                    <MapPinIcon className={styles.icon} />
                    <p>📍 123 Rue du Chocolat, 75000 Paris, France</p>
                </div>

                <div className={styles.contactItem}>
                    <EnvelopeIcon className={styles.icon} />
                    <p>📧 <a href="mailto:contact@037chocolats.com">contact@037chocolats.com</a></p>
                </div>

                <div className={styles.socials}>
                    <h3>🌐 Retrouvez-nous sur les réseaux :</h3>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/037chocolats" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/037chocolats" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/037chocolats" target="_blank" rel="noopener noreferrer">
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
