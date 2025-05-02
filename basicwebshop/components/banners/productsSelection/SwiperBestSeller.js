"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "@/app/store/productSlice";
import ProductCard from "../../products/productCard/ProductCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from "@fortawesome/free-solid-svg-icons";
import styles from "./productsSelection.module.css";

export default function BestSeller() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    
    // State local pour suivre les produits
    const [bestSellers, setBestSellers] = useState([]);

    // Vérifie si les produits sont bien chargés
    useEffect(() => {
        console.log("Produits dans Redux:", products); // Vérifier si Redux contient des produits
        if (products.length > 0) {
            setBestSellers(products.filter(product => product.isBestSeller));
        }
    }, [products]); // Exécuter quand Redux change

    // Si Redux ne contient rien, afficher un message temporaire
    if (bestSellers.length === 0) {
        return <p className={styles.loadingText}>Chargement des meilleurs vendeurs...</p>;
    }

    return (
        <div className={styles.promotionSwiper_container}>
            <h3 className={styles.title}>🔥Hot</h3>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={4}
                autoplay={{ delay: 5000 }}
                loop={true}
                breakpoints={{
                    0: { slidesPerView: 4 },
                    769: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }} 
            >
                {bestSellers.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div onClick={() => dispatch(selectProduct(product))}>
                            <ProductCard product={product} size="small" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
