"use client";

// /app/products/page.tsx
import { useState } from 'react';
import ShippingFree from '../../components/banners/smallTop/shippingFree/ShippingFree';
import BannerOtherShop from '../../components/banners/bannersIntros/BannerOtherShop';

import styles from '../../components/banners/bannersIntros/Banners.module.css';

export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState(null); // État pour le produit sélectionné
    // Fonction pour gérer le clic sur un produit et afficher les détails
    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };
    // Fonction pour fermer la modale
    const handleCloseModal = () => {
        setSelectedProduct(null); // Ferme le modal en réinitialisant l'état
    };

    return (
        <div>
            <ShippingFree />
            <BannerOtherShop />
        </div>
    );
}
