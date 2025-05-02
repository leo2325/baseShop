"use client";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, clearSelectedProduct } from '../store/productSlice';
import productsData from '../../datas/productsDatas';
import BannerPecanShop from '../../components/banners/bannersIntros/BannerPecanShop';
import ProductDetails from '../../components/products/ProductDetailsModal';
import ProductsGrid from '../../components/products/grid/ProductsGrid';
import ProductsFilters from '../../components/products/filters/ProductsFilters';

import useSortedProducts from '../../hooks/useSortedProducts';

export default function Products() {
    const dispatch = useDispatch();
    
    const products = useSelector((state) => state.product.products);
    const selectedProduct = useSelector((state) => state.product.selectedProduct);

    const [sortOrder, setSortOrder] = useState('name'); 
    const [hideUnavailable, setHideUnavailable] = useState(false);

    useEffect(() => {
        dispatch(setProducts(productsData));
    }, [dispatch]);

    const handleCloseModal = () => {
        dispatch(clearSelectedProduct());
    };

    const sortedProducts = useSortedProducts(products, sortOrder, hideUnavailable);

    return (
        <div>
            <BannerPecanShop />

            {selectedProduct && <ProductDetails onClose={handleCloseModal} />}

            <ProductsFilters
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                hideUnavailable={hideUnavailable}
                setHideUnavailable={setHideUnavailable}
            />

            <ProductsGrid products={sortedProducts} />
        </div>
    );
}
