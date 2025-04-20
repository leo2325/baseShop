"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import products from '@/datas/productsDatas';
import ProductCard from '../../products/productCard/ProductCard';

import styles from './productsSelection.module.css';

export default function NewProducts() {
    const newProducts = products.filter(product => product.isNew);

    return (
        <div className={styles.promotionSwiper_container}>
            <h3 className={styles.title}>Nouveautes</h3>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={4}
                slidesPerView={3}
                autoplay={{ delay: 5000 }}
                loop={true}
            >
                {newProducts.map(product => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product} size="medium" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
