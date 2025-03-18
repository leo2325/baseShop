const Cart = () => {
    const cartItems = [
      { id: 1, name: 'Produit 1', price: 20, quantity: 2 },
      { id: 2, name: 'Produit 2', price: 40, quantity: 1 },
    ];
  
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    return (
      <div>
        <h2>Votre Panier</h2>
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Prix : ${item.price}</p>
              <p>Quantité : {item.quantity}</p>
            </div>
          ))}
        </div>
        <h3>Total : ${total}</h3>
        <button>Passer à la caisse</button>
      </div>
    );
  };
  export default Cart;
  