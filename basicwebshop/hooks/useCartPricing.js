import { useEffect, useState } from 'react';

const EUROPEAN_COUNTRIES = [
  "allemagne", "autriche", "belgique", "bulgarie", "chypre", "croatie", "danemark",
  "espagne", "estonie", "finlande", "grèce", "hongrie", "italie", "lettonie", "lituanie",
  "luxembourg", "malte", "hollande", "pays-bas", "portugal", "république tchèque",
  "roumanie", "slovaquie", "slovénie", "suède"
];

export const useCartPricing = ({ cartItems, user, isAuthenticated }) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [totalWithDelivery, setTotalWithDelivery] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setCartTotal(total);

    let fee = 4.99;

    if (!isAuthenticated || !user?.address) {
      fee = 4.99;
    } else {
      const fullAddress = [
        user.address,
        user.city,
        user.zip,
        user.country,
        user.familyName
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      const isFrance = fullAddress.includes("france");
      const isEurope = EUROPEAN_COUNTRIES.some(country => fullAddress.includes(country));

      if (isFrance) {
        fee = total >= 50 ? 0 : 4.99;
      } else if (isEurope) {
        fee = total >= 100 ? 0 : 8.99;
      } else {
        alert("Désolé, nous ne livrons pas encore dans cette région.");
        fee = 0;
      }
    }

    setDeliveryFee(fee);
    setTotalWithDelivery(total + fee);
  }, [user, isAuthenticated, cartItems]);

  return { cartTotal, deliveryFee, totalWithDelivery };
};
