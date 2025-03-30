"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/app/store/cartSlice';
import { clearSelectedProduct } from '@/app/store/productSlice';

import Button from '../elements/buttons/Btn';
import ToggleDetails from './productDetails/DetailsToggle';
import Description from './productDetails/Description';
import FormatSelector from './productDetails/FormatSelector';
import Caroussel from './productDetails/Caroussel';
import styles from './ProductsCards.module.css';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const selectedProduct = useSelector((state) => state.product.selectedProduct);

    const [selectedFormat, setSelectedFormat] = useState('100g');
    const [quantity, setQuantity] = useState(1);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleCloseModal = () => {
        dispatch(clearSelectedProduct());
    };
    
    if (!selectedProduct) {
        return <p className={styles.errorMessage}>Produit introuvable.</p>;
    }

    const handleFormatChange = (format) => setSelectedFormat(format);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: selectedProduct.id,
            name: selectedProduct.name,
            image: selectedProduct.image,   
            price: selectedProduct.price,
            format: selectedFormat,
            quantity
        }));

        setConfirmationMessage(`${quantity} x ${selectedProduct.name} (${selectedFormat}) ajouté(s) au panier.`);
        setTimeout(() => setConfirmationMessage(''), 3000);
    };

    return (
        <div className={styles.modalBackdrop}>
            {confirmationMessage && (
                <p className={styles.confirmationMessage}>{confirmationMessage}</p>
            )}

            <div className={styles.modaleHeader_container}>
                <Button variant="closeModal" onClick={handleCloseModal}>
                    <p>Revenir aux produits</p>
                    <FontAwesomeIcon icon={faXmark} className="icon"/> 
                </Button>
            </div>

            <div className={styles.ProductDetails_container}>
                <Caroussel product={selectedProduct} />
                <Description product={selectedProduct} />
                <FormatSelector product={selectedProduct} />
            {/*
                <Button variant="addToCart" size="large" onClick={handleAddToCart}>
                    <FontAwesomeIcon icon={faPlus} className={styles.icon} /> 
                    <p>Ajouter au panier</p>
                </Button>
            */}
                <ToggleDetails product={selectedProduct} />
            </div>
        </div>
    );
};

export default ProductDetails;
