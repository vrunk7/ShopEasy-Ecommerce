
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="cart-page empty-cart">
        <div className="empty-cart-content">
          <h1>Your cart is empty</h1>
          <p>Looks like you haven't added anything yet.</p>
          <Link to="/products" className="checkout-button">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <p className="section-subtitle">YOUR SHOPPING BAG</p>
        <h1>Your Cart</h1>
        <p>{cartItems.length} different products in your cart</p>
      </div>

      <div className="cart-layout">
        {/* Cart Items */}
        <section className="cart-items-section">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="cart-item-info">
                <p className="cart-item-category">{item.category}</p>
                <h2>{item.name}</h2>
                <p className="cart-item-price">₹{item.price} each</p>

                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity === 1}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>

              <strong className="cart-item-subtotal">
                ₹{item.price * item.quantity}
              </strong>
            </div>
          ))}
        </section>

        {/* Order Summary */}
        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Products</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{totalPrice}</strong>
          </div>

          <Link to="/checkout" className="checkout-button">
            Proceed to Checkout
          </Link>

          <Link to="/products" className="continue-shopping">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default Cart;