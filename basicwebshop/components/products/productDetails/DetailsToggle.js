"use client";
import React, { useState } from 'react';

import styles from './productDetails.module.css';

const Products_detailsToggle = ({ product }) => {
    const [openSections, setOpenSections] = useState({}); // Gère l'état ouvert/fermé de chaque section

    if (!product) {
        return <p className={styles.errorMessage}>Produit introuvable.</p>;
    }

    // Fonction pour gérer l'ouverture/fermeture des sections
    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    // Données dynamiques pour chaque section
    const sections = [
        {
            title: 'Ingrédients',
            content: product.ingredients?.map((ingredient, index) => (
                <li key={index} className={styles.toggleDescription_Item}>
                    {ingredient}
                </li>
            )),
        },
        {
            title: 'Conservation',
            content: [
                'Veuillez vous référer à l\'emballage pour connaître la date de péremption de vos produits.',
                'Conserver à l\'air libre à température fraîche.'
            ],
        },
        {
            title: 'Allergènes et traces',
            content: [
                'Présence de gluten, œuf, poisson, lait.',
                'Traces possibles d\'arachide, soja, fruits à coque et sésame.'
            ],
        },
        {
            title: 'Livraison',
            content: ['Livraison rapide disponible.'],
        },
        {
            title: 'Modes de paiement',
            content: [
                'Paiement sécurisé en ligne.',
                'Paiement à la livraison possible.'
            ],
        }
    ];

    return (
        <section className={styles.productDetails_section}>
            {sections.map((section, index) => (
                <div key={index} className={styles.sectionContent}>
                    <h3
                        className={styles.toggleDescription_title}
                        onClick={() => toggleSection(section.title)}
                    >
                        {section.title}
                    </h3>

                    {openSections[section.title] && (
                        <div className={styles.toggleDescription_Content}>
                            {Array.isArray(section.content) ? (
                                section.content.map((item, i) => (
                                    <p key={i} className={styles.ToggleDescription_Item}>
                                        {item}
                                    </p>
                                ))
                            ) : (
                                <p className={styles.ToggleDescription_Item}>
                                    {section.content}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Products_detailsToggle;
