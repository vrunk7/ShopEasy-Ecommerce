
import { Link, useParams } from "react-router-dom";

function OrderDetails() {
  const { orderId } = useParams();

  const orders = JSON.parse(localStorage.getItem("orders") || "[]");

  const order = orders.find((item) => item.id === orderId);

  if (!order) {
    return (
      <main className="orders-page empty-orders">
        <div className="empty-orders-content">
          <h1>Order Not Found</h1>
          <p>We couldn't find this order.</p>
          <Link to="/orders" className="orders-button">
            Back to My Orders
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="orders-page">
      <Link to="/orders" className="back-orders-link">
        ← Back to My Orders
      </Link>

      <div className="orders-heading">
        <p className="section-subtitle">YOUR PURCHASE</p>
        <h1>Order Details</h1>
        <p>Order #{order.id}</p>
      </div>

      <div className="order-details-grid">
        <section className="order-section">
          <h2>Order Summary</h2>
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Order Date:</strong> {order.orderDate}</p>
          <p><strong>Payment:</strong> {order.paymentMethod}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span className="order-status">Order Placed</span>
          </p>
        </section>

        <section className="order-section">
          <h2>Shipping Details</h2>
          <p><strong>Name:</strong> {order.shipping.name}</p>
          <p><strong>Email:</strong> {order.shipping.email}</p>
          <p><strong>Phone:</strong> {order.shipping.phone}</p>
          <p><strong>Address:</strong> {order.shipping.address}</p>
          <p><strong>City:</strong> {order.shipping.city}</p>
          <p><strong>PIN Code:</strong> {order.shipping.pincode}</p>
        </section>

        <section className="order-section order-products-section">
          <h2>Products Ordered</h2>

          {order.products.map((item) => (
            <div className="order-product" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>

              <strong>₹{item.price * item.quantity}</strong>
            </div>
          ))}

          <div className="order-total">
            <span>Total</span>
            <strong>₹{order.total}</strong>
          </div>
        </section>
      </div>
    </main>
  );
}

export default OrderDetails;