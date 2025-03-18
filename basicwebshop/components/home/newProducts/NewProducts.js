"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

import Chocolait from '@/assets/images/products/chocolait.png';
import Caramel from '@/assets/images/products/caramel.png';
import Pistache from '@/assets/images/products/pistache.png';
import BuenoBlanc from '@/assets/images/products/buenoblanc.png';
import ChocoBlanc from '@/assets/images/products/chocoblanc.png';

import styles from './NewProducts.module.css';

const newProducts = [
    {
        id: 1,
        name: "Chocolait",
        image: Chocolait,
        price: "29.99€"
    },
    {
        id: 2,
        name: "Pistache",
        image: Pistache,
        price: "39.99€"
    },
    {
        id: 3,
        name: "Chocoblanc",
        image: ChocoBlanc,
        price: "49.99€"
    },
    {
        id: 4,
        name: "Caramel",
        image: Caramel,
        price: "59.99€"
    },
    {
        id: 5,
        name: "BuenoBlanc",
        image: BuenoBlanc,
        price: "69.99€"
    }
];

export default function NewProducts() {
    return (
        <div className={styles.bestSeller}>
        <h2 className={styles.title}>🔥 New Products 🔥</h2>

        <Swiper
                modules={[Autoplay]}
                spaceBetween={3}
                slidesPerView={3}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {newProducts.map(product => (
                    <SwiperSlide key={product.id}>
                        <div className={styles.card}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                className={styles.image}
                                width={100}
                                height={50}

                            />
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.price}>à partir de {product.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}