import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, updateQuantity } from "@/app/store/cartSlice";
import { useRouter } from "next/navigation";
import styles from "./Cart.module.css";
import Button from '../elements/buttons/Btn';

export default function Cart() {
    const dispatch = useDispatch();
    const router = useRouter();
    
    const cartItems = useSelector((state) => state.cart.cart) || [];
    console.log("Redux cart state :", cartItems);

    const handleRemoveItem = (id, format) => {
        dispatch(removeFromCart({ id, format }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleCheckout = () => {
        if (!cartItems.length) {
            alert("Votre panier est vide !");
            return;
        }
        router.push("/checkout");
    };

    const handleQuantityChange = (id, format, newQuantity) => {
        if (newQuantity < 1) return;
        dispatch(updateQuantity({ id, format, quantity: newQuantity }));
    };
    console.log("Rendu côté", typeof window !== "undefined" ? "client" : "serveur");

    return (
        <div className={styles.cartContainer}>
            <h2>Votre Panier</h2>
            {cartItems.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={`${item.id}-${item.format}`} className={styles.cartItem}>
                            <div className={styles.cartItemElement}>
                                <img src={item.image} alt={item.name} className={styles.image} />
                            </div>
                            
                            <div className={styles.cartItemElement}>
                                <h3>{item.name}</h3>
                                <p>{item.price} €</p>
                            </div>

                            <div className={styles.cartItemElement}>
                                <div className={styles.quantityControls}>
                                    <button onClick={() => handleQuantityChange(item.id, item.format, item.quantity - 1)} className={styles.quantityBtn}>−</button>
                                    <span className={styles.quantityValue}>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, item.format, item.quantity + 1)} className={styles.quantityBtn}>+</button>
                                </div>
                                <div onClick={() => handleRemoveItem(item.id, item.format)}>
                                    Supprimer
                                </div>
                            </div>
                            <div className={styles.itemTotalPrice}>
                                {(item.price * item.quantity).toFixed(2)} €
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <div className={styles.totalContainer}>
                <h3>Total :</h3>
                <p>
                    {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} €
                </p>
            </div>
            
            {cartItems.length > 0 && (
                <div className={styles.cartActions}>
                    <Button onClick={handleClearCart} variant="clear">Vider le panier</Button>
                    <Button onClick={handleCheckout} variant="addToCart">Finaliser la commande</Button>
                </div>
            )}
        </div>
    );
}
