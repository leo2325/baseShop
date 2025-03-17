"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './BestSeller.module.css';

const bestSellers = [
  {
    id: 1,
    name: "Produit 1",
    image: "/assets/images/produit1.jpg",
    price: "29.99€"
  },
  {
    id: 2,
    name: "Produit 2",
    image: "/assets/images/produit2.jpg",
    price: "39.99€"
  },
  {
    id: 3,
    name: "Produit 3",
    image: "/assets/images/produit3.jpg",
    price: "49.99€"
  },
  {
    id: 4,
    name: "Produit 4",
    image: "/assets/images/produit4.jpg",
    price: "59.99€"
  },
  {
    id: 5,
    name: "Produit 5",
    image: "/assets/images/produit5.jpg",
    price: "69.99€"
  }
];

export default function BestSeller() {
  return (
    <div className={styles.bestSeller}>
      <h2 className={styles.title}>🔥 Meilleures ventes</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {bestSellers.map(product => (
          <SwiperSlide key={product.id}>
            <div className={styles.card}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
              />
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.price}>{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}