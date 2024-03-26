import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faHome,
  faShoppingCart,
  faDollarSign,
  faBox,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import "./Order.css";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    items: "",
    price: "",
    quantity: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="order-container">
      <h2 className="order-title">Order Now</h2>
      <p>
        To place an order, please fill out the form below with your details and
        the items you'd like to purchase.
      </p>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            <FontAwesomeIcon icon={faUser} className="icon" />
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">
            <FontAwesomeIcon icon={faHome} className="icon" />
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="items">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            Items:
          </label>
          <textarea id="items" name="items" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="price">
            <FontAwesomeIcon icon={faDollarSign} className="icon" />
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">
            <FontAwesomeIcon icon={faBox} className="icon" />
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">
            <FontAwesomeIcon icon={faCreditCard} className="icon" />
            Payment Method:
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            onChange={handleChange}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
            <option value="bank">Bank Transfer</option>
            <option value="gcash">GCash</option>
            <option value="paymaya">PayMaya</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Order;
