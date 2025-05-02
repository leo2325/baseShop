"use client";

import { useState } from 'react';
import styles from './AboutUs.module.css';

const faqData = [
    {
        question: "Quels sont vos horaires d'ouverture ?",
        answer: "Nous sommes ouverts du lundi au vendredi de 9h à 18h."
    },
    {
        question: "Livrez-vous à l'international ?",
        answer: "Oui, nous livrons dans toute l'Europe et bientôt dans le reste du monde."
    },
    {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer: "Nous acceptons les cartes bancaires, PayPal et les paiements en plusieurs fois."
    },
    {
        question: "Comment puis-je suivre ma commande ?",
        answer: "Un lien de suivi vous sera envoyé par e-mail dès l'expédition de votre commande."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>FAQ</h2>
            {faqData.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.faqItem} ${openIndex === index ? styles.open : ""}`}
                    onClick={() => toggleFAQ(index)}
                >
                    <div className={styles.question}>
                        {item.question}
                    </div>
                    {openIndex === index && (
                        <div className={styles.answer}>
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
