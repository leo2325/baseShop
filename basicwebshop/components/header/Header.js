"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Import Redux pour récupérer l'utilisateur
import Link from 'next/link';
import AuthToggle from '../user/AuthToggle';
import SocialMedias_links from './aboutus/SocialMedias_links';
import { ShoppingBagIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; 
import Button from '../elements/buttons/Btn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

import Livraison from './aboutus/Livraison'; 
import FAQ from './aboutus/FAQ';  
import Contacts from './aboutus/Contacts';
import CartIcon from '../cart/CartIcon';

import styles from './Header.module.css';

export default function Header() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);
    
    const [showLivraison, setShowLivraison] = useState(false);
    const [showFAQ, setShowFAQ] = useState(false);
    const [showContacts, setShowContacts] = useState(false);

    const { user, isAuthenticated } = useSelector((state) => state.user); // Récupérer utilisateur connecté

    const toggleLoginModal = () => {
        setIsLoginOpen(!isLoginOpen);
    };
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    const closeNav = () => {
        setIsNavOpen(false);
    };
    const toggleUserIcon = () => {
        setIsUserOpen(!isUserOpen);
    };    

    const handleToggleLivraison = () => {
        setShowLivraison(!showLivraison);
        setShowFAQ(false);
        setShowContacts(false);
    };

    const handleToggleFAQ = () => {
        setShowFAQ(!showFAQ);
        setShowLivraison(false);
        setShowContacts(false);
    };

    const handleToggleContacts = () => {
        setShowContacts(!showContacts);
        setShowLivraison(false);
        setShowFAQ(false);
    };

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
                <Button onClick={toggleNav} className={styles.IconNav}>
                    {isNavOpen ? (
                        <XMarkIcon className={styles.icon} />
                    ) : (
                        <Bars3Icon className={styles.icon} />
                    )}
                </Button>

                <Link href="/">   
                    <Image 
                        src="/images/Logo.jpg" 
                        alt="Pécan enrobées"
                        width={50} 
                        height={50} 
                        className={styles.logo}
                    />
                </Link> 
                
                <nav className={styles.topNav}>    
                    {/* Si connecté, afficher "Hello {name}", sinon l'icône utilisateur */}
                    {isAuthenticated ? (
                        <span className={styles.welcomeMessage}>
                            <p>Hello</p>
                            <p>{user.name}</p> 
                        </span>
                    ) : (
                    
                    <Button className={styles.IconNav} onClick={() => { toggleLoginModal(); toggleUserIcon(); }}>
                        {isUserOpen ? (
                            <FontAwesomeIcon icon={faUserTie} />
                        ) : (
                            <FontAwesomeIcon icon={faUser} />
                        )}
                    </Button>
                    
                    )}
                    
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

                {showLivraison && <Livraison />}
                {showFAQ && <FAQ />}
                {showContacts && <Contacts />}
                
                <SocialMedias_links />
            </div>
            
            <AuthToggle isOpen={isLoginOpen} onClose={toggleLoginModal} />
        </header>
    );
}
