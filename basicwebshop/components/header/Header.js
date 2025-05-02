"use client";

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useModal } from '../../hooks/useModal';
import Link from 'next/link';
import Image from 'next/image';
import AuthToggle from '../user/AuthToggle';
import SocialMedias_links from '../aboutus/SocialMedias_links';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../elements/buttons/Btn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import CartIcon from '../cart/CartIcon';
import Modal from '../elements/modals/Modal';

import Livraison from '../aboutus/Livraison';
import FAQ from '../aboutus/FAQ';
import Contacts from '../aboutus/Contacts';

import styles from './Header.module.css';

export default function Header() {
  // Auth modal
  const {
    isOpen: isLoginOpen,
    openModal: openLoginModal,
    closeModal: closeLoginModal
  } = useModal();

  // Mobile drawer state
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(prev => !prev);
  const closeNav = () => setIsNavOpen(false);

  // Submenu states
  const [showLivraison, setShowLivraison] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  const handleToggleLivraison = () => {
    setShowLivraison(prev => !prev);
    setShowFAQ(false);
    setShowContacts(false);
  };
  const handleToggleFAQ = () => {
    setShowFAQ(prev => !prev);
    setShowLivraison(false);
    setShowContacts(false);
  };
  const handleToggleContacts = () => {
    setShowContacts(prev => !prev);
    setShowLivraison(false);
    setShowFAQ(false);
  };

  // User data
  const { user, isAuthenticated } = useSelector((state) => state.user);

  return (
    <header className={styles.header}>
      {/* Mobile header */}
      <div className={styles.headerTop}>
        <Button onClick={toggleNav} className={styles.IconNav}>
          {isNavOpen ? <XMarkIcon className={styles.icon} /> : <Bars3Icon className={styles.icon} />}
        </Button>
        <Link href="/">
          <Image src="/images/Logo.jpg" alt="Pécan enrobées" width={50} height={50} className={styles.logo} />
        </Link>
        <nav className={styles.topNav}>
          {isAuthenticated ? (
            <span className={styles.welcomeMessage} onClick={openLoginModal} role="button" tabIndex={0}>
              <p>Hello</p><p>{user.name}</p>
            </span>
          ) : (
            <Button className={styles.IconNav} onClick={openLoginModal}>
              <FontAwesomeIcon icon={faUser} />
            </Button>
          )}
          <CartIcon />
        </nav>
      </div>

      {/* Desktop header */}
      <div className={styles.headerInner}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image src="/images/Logo.jpg" alt="Pécan enrobées" width={60} height={60} className={styles.logo} />
          </Link>
        </div>
        <nav className={styles.desktopNav}>
          <Link href="/products">Pécan enrobées</Link>
          <Link href="/otherProducts">Autres</Link>
        </nav>
        <div className={styles.topNav}>
          {isAuthenticated ? (
            <span className={styles.welcomeMessage} onClick={openLoginModal} role="button" tabIndex={0}>
              <p>Hello</p><p>{user.name}</p>
            </span>
          ) : (
            <Button className={styles.IconNav} onClick={openLoginModal}>
              <FontAwesomeIcon icon={faUser} />
            </Button>
          )}
          <CartIcon />
        </div>
      </div>

      {/* Mobile drawer nav */}
      <div className={`${styles.navWrapper} ${isNavOpen ? styles.open : styles.closed}`}>  
        <nav className={styles.nav}>
          <Link href="/products" onClick={closeNav}>Pécan enrobées</Link>
          <Link href="/otherProducts" onClick={closeNav}>Autres</Link>
          <div className={styles.subMenuWrapper}>
            <button type="button" onClick={handleToggleLivraison} className={styles.link}>Livraison</button>
            <button type="button" onClick={handleToggleFAQ} className={styles.link}>On répond à vos questions</button>
            <button type="button" onClick={handleToggleContacts} className={styles.link}>Retrouvez-nous</button>
          </div>
        </nav>
        <SocialMedias_links />
        {showLivraison && <Livraison />}
        {showFAQ && <FAQ />}
        {showContacts && <Contacts />}
      </div>

      {/* Auth modal */}
      {isLoginOpen && (
          <AuthToggle isOpen={isLoginOpen} onClose={closeLoginModal} title="Authentification"/>
       
      )}
    </header>
  );
}
