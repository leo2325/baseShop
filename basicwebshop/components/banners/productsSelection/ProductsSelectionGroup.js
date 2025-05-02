"use client";

import BestSeller from "./SwiperBestSeller";
import NewProducts from "./SwiperNewProducts";
import styles from "./productsSelection.module.css";

export default function ProductsSelectionGroup() {
  return (
    <section className={styles.container}>
      <div className={styles.swiperWrapper}>
        <BestSeller />
      </div>
      <div className={styles.swiperWrapper}>
        <NewProducts />
      </div>
    </section>
  );
}