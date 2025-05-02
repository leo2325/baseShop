"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import products from '@/datas/productsDatas';
import ProductCard from '../../products/productCard/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from './productsSelection.module.css';

export default function NewProducts() {
    const newProducts = products.filter(product => product.isNew);

    return (
        <div className={styles.promotionSwiper_container}>
            <h3 className={styles.title}>❤️New</h3>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={4}
                autoplay={{ delay: 5000 }}
                loop={true}
                breakpoints={{
                    0: { slidesPerView: 3 },
                    769: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}  
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
