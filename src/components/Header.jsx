
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <h2>ShopEasy</h2>
        <span>Shopping made simple</span>
      </Link>

      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">My Orders</Link>
        <Link to="/cart" className="cart-link">
          Cart <span>({cartCount})</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
