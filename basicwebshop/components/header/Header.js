import Link from 'next/link';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/solid'; 
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.headerTop}>
                <h1 className={styles.title}>037</h1>
                <ul className={styles.topNav}>
                    <li>
                        <Link href="/connexion">
                            <UserIcon className={styles.icon} />
                        </Link>
                    </li>
                    <li>
                        <Link href="/panier">
                            <ShoppingBagIcon className={styles.icon} />
                        </Link>
                    </li>
                </ul>
            </nav>
            <ul className={styles.nav}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/produits">Produits</Link>
                </li>
                <li>
                    <Link href="/panier">Contacts</Link>
                </li>
            </ul>
        </header>
    );
}