import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedProduct } from '@/app/store/productSlice';

import Button from '../elements/buttons/Btn';
import ToggleDetails from './productDetails/DetailsToggle';
import Description from './productDetails/Description';
import FormatSelector from './productDetails/FormatSelector';
import Caroussel from './productDetails/Caroussel';
import { useProductDetails } from '../../hooks/useProductDetails';
import styles from './Products.module.css';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const selectedProduct = useSelector((state) => state.product.selectedProduct);

    useEffect(() => {
        if (selectedProduct) {
            document.body.classList.add("modal-open");
        }
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [selectedProduct]);

    if (!selectedProduct) {
        return <p className={styles.errorMessage}>Produit introuvable.</p>;
    }

    const {
        selectedFormat,
        quantity,
        confirmationMessage,
        handleFormatChange,
        handleQuantityChange,
        handleAddToCart,
    } = useProductDetails(selectedProduct);

    const handleCloseModal = () => {
        dispatch(clearSelectedProduct());
    };

    return (
        <div className={styles.modalBackdrop}>
            {confirmationMessage && (
                <p className={styles.confirmationMessage}>{confirmationMessage}</p>
            )}

            <div className={styles.ProductDetails_container}>
                <Button variant="closeProductModal" onClick={handleCloseModal} aria-label="Fermer la modale">
                    <FontAwesomeIcon icon={faXmark} className="icon" />
                </Button>
                <Caroussel product={selectedProduct} />
                <Description product={selectedProduct} />
                <FormatSelector
                    product={selectedProduct}
                    selectedFormat={selectedFormat}
                    handleFormatChange={handleFormatChange}
                />
                <ToggleDetails product={selectedProduct} />
            </div>
        </div>
    );
};

export default ProductDetails;
