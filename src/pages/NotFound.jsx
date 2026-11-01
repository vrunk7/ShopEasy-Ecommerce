
import { Link } from "react-router-dom";
import { ShoppingBag, Home } from "lucide-react";

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <p className="section-subtitle">OOPS! PAGE NOT FOUND</p>

        <h1>404</h1>

        <h2>Looks like you're lost.</h2>

        <p>
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to shopping.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-home">
            <Home size={17} />
            Back to Home
          </Link>

          <Link to="/products" className="not-found-products">
            <ShoppingBag size={17} />
            Browse Products
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
