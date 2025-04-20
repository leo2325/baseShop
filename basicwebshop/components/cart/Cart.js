'use client';

import { useRouter } from 'next/navigation'; // ✅ Ajout de useRouter
import { useCart } from '../../hooks/useCart';
import { TrashIcon } from '@heroicons/react/24/outline';
import Button from '../elements/buttons/Btn';
import styles from './cart.module.css';

export default function Cart() {
    const router = useRouter(); // ✅ Initialisation du router
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
    const remaining = Math.max(FREE_DELIVERY_THRESHOLD - total, 0).toFixed(2);

    const handleCheckout = () => {
        if (!cartItems.length) {
            alert("Votre panier est vide !");
            return;
        }
        router.push("/checkout"); // ✅ Fonctionne maintenant
    };

    return (
        <div className={styles.cartContainer}>
            {cartItems.length === 0 ? (
                <>
                    <p>Votre panier est vide.</p>
                    <p>C'est le moment d'aller voir ce qu'on vous a mijoté</p>
                </>
            ) : (
                <ul>
                    <div className={styles.cartSummary}>
                        <p><span>{itemCount}</span> {itemCount > 1 ? "articles" : "article"} dans le panier.</p>
                        {total < FREE_DELIVERY_THRESHOLD ? (
                            <p>Plus que <span>{remaining} €</span> avant la livraison gratuite.</p>
                        ) : (
                            <p><span>Livraison offerte 🎉</span></p>
                        )}
                    </div>

                    {cartItems.map((item) => (
                        <li key={`${item.id}-${item.format}`} className={styles.cartItem}>
                            <img className={styles.image} src={item.image} alt={item.name} />
                            <div className={styles.detailsCartItem}>
                                <h3>{item.name}</h3>
                                <p>{item.price} € /{item.format}.</p>
                                <div className={styles.quantityControls}>
                                    <button onClick={() => handleQuantityChange(item.id, item.format, item.quantity - 1)} className={styles.quantityBtn}>−</button>
                                    <span className={styles.quantityValue}>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, item.format, item.quantity + 1)} className={styles.quantityBtn}>+</button>
                                </div>
                            </div>

                            <div className={styles.detailsCartItem}>
                                <p className={styles.itemTotalPrice}>{(item.price * item.quantity).toFixed(2)} €</p>
                                <TrashIcon className={styles.deleteBtn} onClick={() => handleRemoveItem(item.id, item.format)} />
                            </div>
                        </li>
                    ))}
                    <Button variant="link" onClick={handleClearCart}>Vider le panier</Button>
                </ul>
            )}

            <div className={styles.totalContainer}>
                <p>Total :</p>
                <p><span></span>{total} € TTC</p>
            </div>

            {cartItems.length > 0 && (
                <div className={styles.cartActions}>
                    <Button onClick={handleCheckout} variant="validationStyle">Finaliser la commande</Button>
                    <p>ou</p>
                    <Button variant="link">Continuer mes achats</Button>
                </div>
            )}
        </div>
    );
}
