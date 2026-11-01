
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  Building2,
  MapPinned,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setShipping((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Remove the error for a field as the user edits it
    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  }

  function validateForm() {
    const newErrors = {};

    const name = shipping.name.trim();
    const email = shipping.email.trim();
    const phone = shipping.phone.trim();
    const address = shipping.address.trim();
    const city = shipping.city.trim();
    const pincode = shipping.pincode.trim();

    if (!/^[A-Za-z][A-Za-z\s.'-]{1,49}$/.test(name)) {
      newErrors.name = "Enter a valid full name (at least 2 characters).";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    if (address.length < 10) {
      newErrors.address = "Address must contain at least 10 characters.";
    }

    if (!/^[A-Za-z][A-Za-z\s.'-]{1,49}$/.test(city)) {
      newErrors.city = "Enter a valid city name.";
    }

    if (!/^\d{6}$/.test(pincode)) {
      newErrors.pincode = "PIN code must contain exactly 6 digits.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (cartItems.length === 0) return;

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const cleanedShipping = {
      name: shipping.name.trim(),
      email: shipping.email.trim(),
      phone: shipping.phone.trim(),
      address: shipping.address.trim(),
      city: shipping.city.trim(),
      pincode: shipping.pincode.trim(),
    };

    const order = {
      id: `ORD-${Date.now()}`,
      products: cartItems,
      shipping: cleanedShipping,
      total: totalPrice,
      paymentMethod: "Cash on Delivery",
      orderDate: new Date().toLocaleDateString(),
    };

    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    const updatedOrders = [...savedOrders, order];

    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    clearCart();

    navigate("/order-confirmation", {
      state: { order },
    });
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page checkout-empty">
        <h1>Your cart is empty</h1>
        <Link to="/products">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-heading">
        <p className="section-subtitle">ALMOST THERE</p>
        <h1>Complete Your Order</h1>
        <p>Enter your details to place your order.</p>
      </div>

      <div className="checkout-layout">
        <form
          className="checkout-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <h2>Shipping Details</h2>

          <label>
            <span className="field-label">
              <UserRound size={17} /> Full Name
            </span>
            <input
              type="text"
              name="name"
              value={shipping.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              aria-invalid={!!errors.name}
            />
            {errors.name && <small className="field-error">{errors.name}</small>}
          </label>

          <label>
            <span className="field-label">
              <Mail size={17} /> Email Address
            </span>
            <input
              type="email"
              name="email"
              value={shipping.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
              aria-invalid={!!errors.email}
            />
            {errors.email && <small className="field-error">{errors.email}</small>}
          </label>

          <label>
            <span className="field-label">
              <Phone size={17} /> Phone Number
            </span>
            <input
              type="tel"
              name="phone"
              value={shipping.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
              autoComplete="tel"
              aria-invalid={!!errors.phone}
            />
            {errors.phone && <small className="field-error">{errors.phone}</small>}
          </label>

          <label>
            <span className="field-label">
              <MapPin size={17} /> Delivery Address
            </span>
            <textarea
              name="address"
              value={shipping.address}
              onChange={handleChange}
              placeholder="Enter your complete delivery address"
              autoComplete="street-address"
              aria-invalid={!!errors.address}
            />
            {errors.address && <small className="field-error">{errors.address}</small>}
          </label>

          <div className="checkout-form-row">
            <label>
              <span className="field-label">
                <Building2 size={17} /> City
              </span>
              <input
                type="text"
                name="city"
                value={shipping.city}
                onChange={handleChange}
                placeholder="City"
                autoComplete="address-level2"
                aria-invalid={!!errors.city}
              />
              {errors.city && <small className="field-error">{errors.city}</small>}
            </label>

            <label>
              <span className="field-label">
                <MapPinned size={17} /> PIN Code
              </span>
              <input
                type="text"
                name="pincode"
                value={shipping.pincode}
                onChange={handleChange}
                placeholder="6-digit PIN"
                maxLength={6}
                inputMode="numeric"
                autoComplete="postal-code"
                aria-invalid={!!errors.pincode}
              />
              {errors.pincode && <small className="field-error">{errors.pincode}</small>}
            </label>
          </div>

          <div className="payment-method">
            <h2>
              <CreditCard size={19} /> Payment Method
            </h2>
            <p>Cash on Delivery (COD)</p>
            <span>
              <ShieldCheck size={15} /> Pay safely when your order arrives.
            </span>
          </div>

          <button type="submit" className="place-order-button">
            Place Order · ₹{totalPrice.toLocaleString("en-IN")}
          </button>
        </form>

        <aside className="checkout-summary">
          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div className="checkout-summary-item" key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <p>Qty: {item.quantity}</p>
              </div>
              <strong>
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </strong>
            </div>
          ))}

          <div className="checkout-total">
            <span>Total Amount</span>
            <strong>₹{totalPrice.toLocaleString("en-IN")}</strong>
          </div>

          <p className="cod-note">
            You will pay when your order is delivered.
          </p>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;