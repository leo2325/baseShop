"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

import Link from 'next/link';
import AuthToggle from '../user/AuthToggle';
import SocialMedias_links from './aboutus/SocialMedias_links';
import { ShoppingBagIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; 
import Button from '../elements/buttons/Btn';

import Livraison from './aboutus/Livraison'; 
import FAQ from './aboutus/FAQ';  
import Contacts from './aboutus/Contacts';
import CartIcon from '../cart/CartIcon';

import styles from './Header.module.css';

export default function Header() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const [showLivraison, setShowLivraison] = useState(false); // État pour toggle Livraison
    const [showFAQ, setShowFAQ] = useState(false); // État pour toggle FAQ
    const [showContacts, setShowContacts] = useState(false); // État pour toggle Contacts

    const toggleLoginModal = () => {
        setIsLoginOpen(!isLoginOpen);
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    // Toggle pour afficher/masquer Livraison
    const handleToggleLivraison = () => {
        setShowLivraison(!showLivraison);
        setShowFAQ(false); // Fermer FAQ si on ouvre Livraison
        setShowContacts(false); // Fermer Contacts si on ouvre Livraison
    };

    // Toggle pour afficher/masquer FAQ
    const handleToggleFAQ = () => {
        setShowFAQ(!showFAQ);
        setShowLivraison(false); // Fermer Livraison si on ouvre FAQ
        setShowContacts(false); // Fermer Contacts si on ouvre FAQ
    };

    // Toggle pour afficher/masquer Contacts
    const handleToggleContacts = () => {
        setShowContacts(!showContacts);
        setShowLivraison(false); // Fermer Livraison si on ouvre Contacts
        setShowFAQ(false); // Fermer FAQ si on ouvre Contacts
    };

    // Bloquer le scroll du body lorsque le menu est ouvert
    useEffect(() => {
        if (isNavOpen) {
            document.body.classList.add(styles.noScroll);
        } else {
            document.body.classList.remove(styles.noScroll);
        }
    }, [isNavOpen]);

    return (
        <header className={styles.header}>  
            
            <div className={styles.headerTop}>    
                <button onClick={toggleNav}>
                    {isNavOpen ? (
                        <XMarkIcon className={styles.icon} />
                    ) : (
                        <Bars3Icon className={styles.icon} />
                    )}
                </button>

                <Link href="/">   
                    <Image 
                        src="/images/Logo.jpg" 
                        alt="Pécanrobées"
                        width={50} 
                        height={50} 
                        className={styles.logo}
                    />
                </Link> 
                
                <nav className={styles.topNav}>    
                    <Button onClick={toggleLoginModal}>
                        <UserIcon className={styles.icon} />
                    </Button>    
                    <CartIcon />
                </nav>
            </div>

            <div className={`${styles.navWrapper} ${isNavOpen ? styles.open : styles.closed}`}>
                <nav className={styles.nav}>
                    <Link href="/products" onClick={closeNav}>Pécan enrobées</Link>    
                    <Link href="/otherProducts" onClick={closeNav}>Autres</Link>
                    <div className={styles.subMenuWrapper}>
                        <button onClick={handleToggleLivraison} className={styles.link}>Livraison</button>
                        <button onClick={handleToggleFAQ} className={styles.link}>On répond à vos questions</button>
                        <button onClick={handleToggleContacts} className={styles.link}>Retrouvez-nous</button>
                    </div>
                </nav>   

                {/* Affichage conditionnel des composants Livraison, FAQ et Contacts */}
                {showLivraison && <Livraison />}
                {showFAQ && <FAQ />}
                {showContacts && <Contacts />} {/* Affiche le composant Contacts de manière conditionnelle */}
                
                <SocialMedias_links />
            </div>
            
            <AuthToggle isOpen={isLoginOpen} onClose={toggleLoginModal} />
        </header>
    );
}
