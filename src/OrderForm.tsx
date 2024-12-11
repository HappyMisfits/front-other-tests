import React, { useState } from 'react';
import axios from 'axios';

export const OrderForm: React.FC = () => {
  const [customerName, setCustomerName] = useState('');
  const [items, setItems] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/orders', {
        customerName,
        items: items.split(','),
      });
      setMessage(`Order created with ID: ${response.data.id}`);
    } catch (error) {
      setMessage('Failed to create order.');
    }
  };

  return (
    <div>
      <h1>Create Order</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Customer Name:</label>
          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Items (comma-separated):</label>
          <input
            type="text"
            placeholder="Items (comma-separated)"
            value={items}
            onChange={(e) => setItems(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Order</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};