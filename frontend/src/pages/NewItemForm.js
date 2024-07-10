import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/NewItemForm.css';

const NewItemForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newItem = {
        name,
        description,
        price: parseFloat(price),
        imageUrl
      };

      const response = await axios.post('http://localhost:5000/api/shop', newItem);
      console.log('Item added:', response.data);
      alert('Item added successfully!');
      // Reset form fields
      setName('');
      setDescription('');
      setPrice('');
      setImageUrl('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <h2>Add New Item</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </label>
      <label>
        Image URL:
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default NewItemForm;
