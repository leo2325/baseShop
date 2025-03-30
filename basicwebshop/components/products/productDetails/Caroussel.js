"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './productDetails.module.css';

const Products_ImgsCaroussel = ({ product }) => {
    if (!product || !product.images || product.images.length === 0) {
        return <p className={styles.errorMessage}>Produit introuvable.</p>;
    }

    return (
        <section className={styles.productDetails_section}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={2}
                    slidesPerView={1}
                    className={styles.swiperContainer}
                >
                    {product.images.map((imgSrc, index) => (
                        <SwiperSlide key={index} className={styles.ProductDetails_img}>
                            <Image
                                src={imgSrc}
                                alt={`${product.name} - Image ${index + 1}`}
                                width={320}
                                height={320}
                                className={styles.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
        </section>    
    );
};

export default Products_ImgsCaroussel;
