'use client';

import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import styles from './checkout.module.css';
import Button from '@/components/elements/buttons/Btn';
import Input from '@/components/elements/inputs/Input';

export default function CheckoutPage() {
  const { cartItems, calculateTotal } = useCart();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  });

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
      body: JSON.stringify({ form, cartItems }),
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
      
      <h1>Finaliser votre commande</h1>

      <div className={styles.checkoutContent}>
        {/* Infos client */}
        <form className={styles.form}>
          <Input name="firstName" placeholder="Prénom" value={form.firstName} onChange={handleChange} />
          <Input name="lastName" placeholder="Nom" value={form.lastName} onChange={handleChange} />
          <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <Input name="address" placeholder="Adresse" value={form.address} onChange={handleChange} />
          <Input name="city" placeholder="Ville" value={form.city} onChange={handleChange} />
          <Input name="zip" placeholder="Code postal" value={form.zip} onChange={handleChange} />
        </form>

        {/* Récap panier */}
        <div className={styles.summary}>
          <h2>Récapitulatif:</h2>
          <ul>
            {cartItems.map(item => (
              <li key={`${item.id}-${item.format}`}>
                <p>{item.name}{item.format} - {item.quantity}x{item.price}</p>
                <p>{(item.price * item.quantity).toFixed(2)}€</p>
              </li>
            ))}
          </ul>
          <p className={styles.totalCheckout}>Total : {calculateTotal()} €</p>

          <Button onClick={handleCheckout} variant="validationStyle">
              Payer maintenant
          </Button>
        </div>
      </div>
    </div>
  );
}
