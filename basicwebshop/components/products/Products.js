const Products = () => {
    const products = [
      { id: 1, name: 'Produit 1', price: 20 },
      { id: 2, name: 'Produit 2', price: 40 },
    ];
  
    return (
      <div>
        <h2>Nos Produits</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button>Ajouter au panier</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default Products;
  