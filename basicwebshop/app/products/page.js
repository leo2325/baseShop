"use client";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, clearSelectedProduct } from '../store/productSlice';
import productsData from '../../datas/productsDatas';
import ShippingFree from '../../components/banners/smallTop/shippingFree/ShippingFree';
import BannerPecanShop from '../../components/banners/bannersIntros/BannerPecanShop';
import ProductCard from '../../components/products/productCard/ProductCard';
import ProductDetails from '../../components/products/ProductDetailsView';
import styles from '../../components/products/ProductsCards.module.css';

export default function Products() {
    const dispatch = useDispatch();
    
    const products = useSelector((state) => state.product.products);
    const selectedProduct = useSelector((state) => state.product.selectedProduct);

    const [sortOrder, setSortOrder] = useState('name'); 
    const [hideUnavailable, setHideUnavailable] = useState(false);

    // Chargement initial des produits dans Redux
    useEffect(() => {
        dispatch(setProducts(productsData));
    }, [dispatch]);

    const handleCloseModal = () => {
        dispatch(clearSelectedProduct());
    };

    const sortedProducts = [...products]
        .filter(product => (hideUnavailable ? product.isAvailable : true))
        .sort((a, b) => {
            switch (sortOrder) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'rating':
                    return b.rating - a.rating;
                case 'new':
                    return b.isNew - a.isNew;
                case 'priceAsc':
                    return a.price - b.price;
                case 'priceDesc':
                    return b.price - a.price;
                default:
                    return 0;
            }
        });

    return (
        <div>
            <ShippingFree />
            <BannerPecanShop />

            {/* Affichage conditionnel de la modale */}
            {selectedProduct && <ProductDetails onClose={handleCloseModal} />}

            {/* Zone des filtres */}
            <div className={styles.filters}>
                <label>
                    Trier par :
                    <select 
                        value={sortOrder} 
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="name">Nom (A-Z)</option>
                        <option value="rating">Note la plus élevée</option>
                        <option value="new">Nouveauté</option>
                        <option value="priceAsc">Prix croissant</option>
                        <option value="priceDesc">Prix décroissant</option>
                    </select>
                </label>

                <label>
                    <input 
                        type="checkbox" 
                        checked={hideUnavailable} 
                        onChange={(e) => setHideUnavailable(e.target.checked)}
                    />
                    Cacher les produits indisponibles
                </label>
            </div>

            {/* Affichage des produits triés/filtrés */}
            <div className={styles.grid}>
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} size="medium"/>
                ))}
            </div>
        </div>
    );
}
