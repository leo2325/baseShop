'use client';

import { useRouter } from 'next/navigation';
import { useCart } from '../../hooks/useCart';
import { TrashIcon } from '@heroicons/react/24/outline';
import Button from '../elements/buttons/Btn';
import styles from './cart.module.css';

// ✅ Utilitaire pour formater les prix en français
const formatPrice = (value) =>
    new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
    }).format(value);

export default function Cart({ onCloseCart }) {
    const router = useRouter();
    const {
        cartItems,
        handleRemoveItem,
        handleClearCart,
        handleQuantityChange,
        calculateTotal,
        calculateItemCount
    } = useCart();

    const itemCount = calculateItemCount();
    const total = calculateTotal();
    const FREE_DELIVERY_THRESHOLD = 50;
    const remaining = Math.max(FREE_DELIVERY_THRESHOLD - total, 0);

    const handleCheckout = () => {
        if (!cartItems.length) {
            alert("Votre panier est vide !");
            return;
        }
        onCloseCart?.();
        router.push("/checkout");
    };

    const handleContinueShopping = () => {
        onCloseCart?.();
        router.push("/");
    };

    return (
        <div className={styles.cartContainer}>
            {cartItems.length === 0 ? (
                <div className={styles.emptyCart}>
                    <p>Votre panier est vide.</p>
                    <p>Allez voir notre sélection de produits</p>
                </div>
            ) : (
                <>
                    <ul className={styles.cartList}>
                        <div className={styles.cartSummary}>
                            <p>
                                <span>{itemCount}</span> {itemCount > 1 ? "articles" : "article"} dans le panier.
                            </p>
                            {total < FREE_DELIVERY_THRESHOLD ? (
                                <p>Plus que <span>{formatPrice(remaining)}</span> avant la livraison gratuite.</p>
                            ) : (
                                <p><span>Livraison offerte 🎉</span></p>
                            )}
                        </div>
                        {cartItems.map((item) => (
                            <li key={`${item.id}-${item.format}`} className={styles.cartItem}>
                                <img
                                    className={styles.image}
                                    src={item.image}
                                    alt={`Image de ${item.name}`}
                                />
                                <div className={styles.detailsCartItem}>
                                    <h3>{item.name}</h3>
                                    <p>{formatPrice(item.price)} / {item.format}</p>
                                    <div className={styles.quantityControls}>
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.format, item.quantity - 1)}
                                            className={styles.quantityBtn}
                                            disabled={item.quantity <= 1}
                                        >
                                            −
                                        </button>
                                        <span className={styles.quantityValue}>{item.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.format, item.quantity + 1)}
                                            className={styles.quantityBtn}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.detailsCartItem}>
                                    <p className={styles.itemTotalPrice}>
                                        {formatPrice(item.price * item.quantity)}
                                    </p>
                                    <button
                                        onClick={() => handleRemoveItem(item.id, item.format)}
                                        className={styles.deleteBtn}
                                        aria-label="Supprimer l'article"
                                    >
                                        <TrashIcon />
                                    </button>
                                </div>
                            </li>
                        ))}
                        <div className={styles.clearCartBtn}>
                            <Button variant="link" onClick={handleClearCart}>Vider le panier</Button>
                        </div>
                    </ul>
                    <div className={styles.totalContainer}>
                        <div>
                            <p>Total :</p>
                            <p><strong>{formatPrice(total)}</strong> TTC</p>
                        </div>
                        <span>+ Frais de port calculé à la prochaine étape.</span>
                    </div>
                </>
            )}

            {cartItems.length > 0 && (
                <div className={styles.cartActions}>
                    <Button onClick={handleCheckout} variant="validationStyle">
                        Finaliser la commande
                    </Button>
                    <p>ou</p>
                    <Button variant="link" onClick={handleContinueShopping}>
                        Continuer mes achats
                    </Button>
                </div>
            )}
        </div>
    );
}
