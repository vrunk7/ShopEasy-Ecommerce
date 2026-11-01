
import { Link } from "react-router-dom";

function OrderHistory() {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");

  if (orders.length === 0) {
    return (
      <main className="orders-page empty-orders">
        <div className="empty-orders-content">
          <p className="section-subtitle">YOUR SHOPPING JOURNEY</p>
          <h1>My Orders</h1>
          <p>You haven't placed any orders yet.</p>
          <Link to="/products" className="orders-button">
            Start Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="orders-page">
      <div className="orders-heading">
        <p className="section-subtitle">YOUR SHOPPING JOURNEY</p>
        <h1>My Orders</h1>
        <p>Keep track of your recent purchases.</p>
      </div>

      <div className="orders-list">
        {orders.slice().reverse().map((order) => (
          <article className="order-card" key={order.id}>
            <div className="order-card-info">
              <p className="order-card-label">ORDER ID</p>
              <h2>{order.id}</h2>
              <p className="order-card-date">Placed on {order.orderDate}</p>
            </div>

            <div className="order-card-meta">
              <div>
                <p className="order-card-label">ITEMS</p>
                <strong>{order.products.length} product types</strong>
              </div>
              <div>
                <p className="order-card-label">TOTAL</p>
                <strong>₹{order.total}</strong>
              </div>
              <div>
                <p className="order-card-label">STATUS</p>
                <span className="order-status">Order Placed</span>
              </div>
            </div>

            <Link to={`/orders/${order.id}`} className="view-order-button">
              View Details →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

export default OrderHistory;