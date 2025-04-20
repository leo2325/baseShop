// app/api/payment/session/route.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { cartItems, form } = await req.json();

  const line_items = cartItems.map(item => ({
    price_data: {
      currency: 'eur',
      product_data: {
        name: item.name,
        // image: [item.image] // tu peux l’ajouter si tu veux une miniature dans Stripe
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    customer_email: form.email,
    success_url: 'https://tonsite.com/success',
    cancel_url: 'https://tonsite.com/cancel',
    metadata: {
      name: `${form.firstName} ${form.lastName}`,
      address: form.address,
      city: form.city,
      zip: form.zip,
    }
  });

  return Response.json({ url: session.url });
}
