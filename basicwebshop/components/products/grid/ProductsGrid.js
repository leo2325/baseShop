import ProductCard from '../productCard/ProductCard';
import styles from './productsGrid.module.css';

export default function ProductsGrid({ products }) {
    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} size="medium" />
            ))}
        </div>
    );
}
