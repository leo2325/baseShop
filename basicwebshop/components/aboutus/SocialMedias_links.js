"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './AboutUs.module.css';

export default function SocialMedias_links() {
  return (
    <div className={styles.socialMedias_container}>
      <h3>Retrouvez-nous sur les réseaux</h3>
      <div className={styles.socialsIcons_container}>
        <a
          href="https://www.instagram.com/037chocolats"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          Instagram
        </a>
        <a
          href="https://www.facebook.com/037chocolats"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          Facebook
        </a>
        <a
          href="https://twitter.com/037chocolats"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          Twitter
        </a>
      </div>
    </div>
  );
}