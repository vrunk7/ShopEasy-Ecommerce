import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function ProductDetails() {
  const { productId } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product not found!</h1>
        <Link to="/products">Back to Products</Link>
      </main>
    );
  }

  const [addedMessage, setAddedMessage] = useState(false);

  function handleAddToCart() {
    addToCart(product);
    setAddedMessage(true);
  }

  return (
    <main className="product-details-page">
      <Link to="/products" className="back-link">
        ← Back to Products
      </Link>

      <section className="product-details">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details-info">
          <p className="product-details-category">{product.category}</p>

          <h1>{product.name}</h1>

          <h2>₹{product.price}</h2>

          <p className="product-description">{product.description}</p>

          <button className="add-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>

          {addedMessage && (
            <p className="cart-success-message" aria-live="polite">
              ✓ Added to cart successfully!
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
