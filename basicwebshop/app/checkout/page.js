'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCart } from '@/hooks/useCart';
import { useCartPricing } from '@/hooks/useCartPricing';
import styles from './checkout.module.css';
import Button from '@/components/elements/buttons/Btn';
import Input from '@/components/elements/inputs/Input';

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    zip: ''
  });

  const { cartTotal, deliveryFee, totalWithDelivery } = useCartPricing({
    cartItems,
    user,
    isAuthenticated
  });

  useEffect(() => {
    if (isAuthenticated && user) {
      setForm({
        firstName: user.name || '',
        lastName: user.familyName || '',
        username: user.userName || '',
        email: user.mail || '',
        mobile: user.mobile || '',
        address: user.address || '',
        city: user.city || '',
        zip: user.zip || ''
      });
    }
  }, [isAuthenticated, user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    if (!cartItems.length) {
      alert("Votre panier est vide !");
      return;
    }

    const res = await fetch('/api/payment/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form, cartItems, deliveryFee }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Erreur lors de la redirection vers la page de paiement.");
    }
  };

  return (
    <div className={styles.checkoutContainer}>
      <h1>Finalisez votre commande</h1>

      <div className={styles.checkoutContent}>
        <form className={styles.form}>
          <section className={styles.formSection}>
            <h3>Vos informations : </h3>
            <p>Vous êtes connecté en tant que :</p>
            <Input name="username" placeholder="Nom d'utilisateur" value={form.username} disabled={isAuthenticated} />
            <Input name="email" placeholder="Email" value={form.email} disabled={isAuthenticated} />
            <Input name="mobile" placeholder="Téléphone" value={form.mobile} disabled={isAuthenticated} />
          </section>

          <section className={styles.formSection}>
            <h3>Adresse de livraison :</h3>
            <Input name="firstName" placeholder="Prénom" value={form.firstName} onChange={handleChange} />
            <Input name="lastName" placeholder="Nom" value={form.lastName} onChange={handleChange} />
            <Input name="address" placeholder="Adresse" value={form.address} onChange={handleChange} />
            <Input name="city" placeholder="Ville" value={form.city} onChange={handleChange} />
            <Input name="zip" placeholder="Code postal" value={form.zip} onChange={handleChange} />
          </section>
        </form>

        <div className={styles.summary}>
          <h2>Récapitulatif :</h2>
          <ul>
            {cartItems.map(item => (
              <li key={`${item.id}-${item.format}`}>
                <p>{item.name} {item.format} - {item.quantity} x {item.price.toFixed(2)}€</p>
                <p>{(item.price * item.quantity).toFixed(2)}€</p>
              </li>
            ))}
          </ul>

          <p className={styles.deliveryLine}>
            + Frais de livraison : <strong>{deliveryFee === 0 ? "Offerts 🎉" : `${Number(deliveryFee).toFixed(2)}€`}</strong>
          </p>

          <p className={styles.totalCheckout}>
            Total : <strong>{Number(totalWithDelivery).toFixed(2)}€ TTC</strong>
          </p>

          <Button onClick={handleCheckout} variant="validationStyle">
            Payer
          </Button>
        </div>
      </div>
    </div>
  );
}
