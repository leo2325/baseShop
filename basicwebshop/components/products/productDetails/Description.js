"use client";

import React from 'react';

import styles from './productDetails.module.css';

const Products_Description = ({ product }) => {
    if (!product) {
        return <p className={styles.errorMessage}>Produit introuvable.</p>;
    }

    return (
        <section className={styles.productDetails_section}>
            <div className={styles.sectionContent}>
                <h2 className={styles.ProductDetails_title}>{product.name}</h2>
                <p className={styles.productDescription}>
                    {product.description || "Aucune description disponible."}
                </p>
            </div>
        </section>
    );
};

export default Products_Description;
