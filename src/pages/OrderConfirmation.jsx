import { Link, useLocation } from "react-router-dom";

function OrderConfirmation() {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <main className="confirmation-page">
        <h1>Order details unavailable</h1>
        <p>Please place an order through checkout to view your confirmation.</p>
        <Link to="/products" className="continue-link">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="confirmation-page">
      <section className="confirmation-success">
        <div className="success-icon">✓</div>
        <p className="section-subtitle">THANK YOU FOR SHOPPING WITH US</p>
        <h1>Order Placed Successfully!</h1>
        <p>Your order has been confirmed. We appreciate your purchase!</p>
        <p className="order-id">Order ID: {order.id}</p>
      </section>

      <div className="confirmation-details">
        <section className="order-info">
          <h2>Order Information</h2>
          <p>
            <strong>Order Date:</strong> {order.orderDate}
          </p>
          <p>
            <strong>Payment Method:</strong> {order.paymentMethod}
          </p>
        </section>

        <section className="order-info">
          <h2>Shipping Details</h2>
          <p>
            <strong>Name:</strong> {order.shipping.name}
          </p>
          <p>
            <strong>Email:</strong> {order.shipping.email}
          </p>
          <p>
            <strong>Phone:</strong> {order.shipping.phone}
          </p>
          <p>
            <strong>Address:</strong> {order.shipping.address}
          </p>
          <p>
            <strong>City:</strong> {order.shipping.city}
          </p>
          <p>
            <strong>PIN Code:</strong> {order.shipping.pincode}
          </p>
        </section>
      </div>

      <section className="order-info ordered-products-section">
        <h2>Products Ordered</h2>

        {order.products.map((item) => (
          <div key={item.id} className="ordered-product">
            <div>
              <h3>{item.name}</h3>
              <p>
                ₹{item.price} × {item.quantity}
              </p>
            </div>

            <strong>₹{item.price * item.quantity}</strong>
          </div>
        ))}

        <div className="order-total">
          <span>Total Payable on Delivery</span>
          <strong>₹{order.total}</strong>
        </div>
      </section>

      <Link to="/products" className="continue-link">
        Continue Shopping
      </Link>
    </main>
  );
}

export default OrderConfirmation;
