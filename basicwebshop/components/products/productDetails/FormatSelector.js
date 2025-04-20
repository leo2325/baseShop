"use client";

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/store/cartSlice';
import Button from '../../elements/buttons/Btn';

import styles from './productDetails.module.css';

const ProductFormatSelector = ({ product }) => {
    const dispatch = useDispatch();

    const [selectedFormat, setSelectedFormat] = useState(product.prices[0]?.format || '100g');
    const [quantity, setQuantity] = useState(1);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    // Fonction pour récupérer le prix correspondant au format choisi
    const getProductPrice = () => {
        const priceObj = product.prices.find(price => price.format === selectedFormat);
        return priceObj ? priceObj.price : 0;
    };

    // Gestion du changement de format
    const handleFormatChange = (format) => {
        setSelectedFormat(format);
    };

    // Gestion de l'ajout au panier
    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            name: product.name,
            image: product.images?.[0] || '/images/default-image.jpg',
            price: getProductPrice(),  // Mise à jour du prix selon le format
            format: selectedFormat,
            quantity
        }));

        setConfirmationMessage(`${quantity} x ${product.name} (${selectedFormat}) ajouté(s) au panier.`);
        setTimeout(() => setConfirmationMessage(''), 3000);
    };

    return (
        <section className={styles.productDetails_section}>
            
            {/* Message de confirmation */}
            {confirmationMessage && (
                <p className={styles.formatTitle}>{confirmationMessage}</p>
            )}

            {/* Affichage du prix */}
            <div className={styles.sectionContent}>
                
                <h3 className={styles.price}>{getProductPrice()} €</h3>

                {/* Liste dynamique des formats proposés */}
                <div className={styles.formatSelector}>
                    <div className={styles.formatList}>
                        {product.prices.map((priceObj) => (
                            <p
                                key={priceObj.format}
                                className={priceObj.format === selectedFormat ? styles.selectedFormat : ''}
                                onClick={() => handleFormatChange(priceObj.format)}
                            >
                                {priceObj.format}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Quantity Controls */}
                <div className={styles.quantityControls_container}>
                    <button className={styles.quantityBtn} onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>−</button>
                    <span className={styles.quantityValue}>{quantity}</span>
                    <button className={styles.quantityBtn} onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>

                {/* Bouton d'ajout au panier */}
                <Button onClick={handleAddToCart} variant="validationStyle" size="medium">
                    Ajouter au panier
                </Button>
            </div>
        </section>
    );
};

export default ProductFormatSelector;
