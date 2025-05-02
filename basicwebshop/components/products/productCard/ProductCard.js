import { useDispatch } from 'react-redux';
import { selectProduct } from '@/app/store/productSlice';
import Image from 'next/image';
import Button from '../../elements/buttons/Btn';

// Import du fichier de styles spécifique à ProductCard
import styles from './productCard.module.css';

export default function ProductCard({ product, size = 'medium' }) {
    const dispatch = useDispatch();

    const sizeClass = size === 'small' 
        ? styles['card--small'] 
        : size === 'large' 
        ? styles['card--large'] 
        : styles['card--medium'];

    const handleClick = () => {
        dispatch(selectProduct(product)); // Stocke le produit sélectionné dans Redux
    };

    const basePrice = product.prices?.find(p => p.format === "100g");

    return (
        <div className={`${styles.card} ${sizeClass}`} onClick={handleClick}>
            <Image 
                src={product.images?.[0] || '/images/default-image.jpg'} 
                alt={product.name} 
                width={100} 
                height={100} 
                className={styles.image}
            />
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.price}>
                <strong className={styles.priceStrong}>{basePrice?.price}€</strong> 
                /{basePrice?.format}
            </p>            
            <p className={styles.span}>Découvrir</p>
        </div>
    );
}
