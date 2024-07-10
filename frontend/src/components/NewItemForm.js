// frontend/src/components/NewItemForm.js
import React, { useState } from 'react';
import '../assets/styles/NewItemForm.css';
import axios from 'axios';

function NewItemForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      name,
      description,
      price: parseFloat(price),
      imageUrl
    };

    try {
      const response = await axios.post('http://localhost:5000/api/shop', newItem);
      console.log('Item Added:', response.data);
      alert('Item added successfully!');
      // Clear the form
      setName('');
      setDescription('');
      setPrice('');
      setImageUrl('');
    } catch (error) {
      console.error('There was an error adding the new item!', error);
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
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
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
}

export default NewItemForm;
