import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import Cart from '../components/orders';
import '../assets/styles/Shop.css';


const Shop = () => {
  const [items, setItems] = useState([]);
  const [orderedItems, setOrderedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/shop');
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
        setLoading(false);
      }
    };
    const fetchOrderedItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders');
        setOrderedItems(response.data);
      } catch (error) {
        console.error('Error fetching ordered items:', error);
      }
    };

    fetchItems();
    fetchOrderedItems();
  }, []);

  const handleAddToCart = async (itemId) => {
    try {
      await axios.post('http://localhost:5000/api/cart/add', { itemId, quantity: 1 });
      alert('Item added to cart successfully!');
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  // Calculate price of ordered items
  const calculateOrderedItemsPrice = (orderedItems) => {
    let totalPrice = 0;
    orderedItems.forEach((order) => {
      order.items.forEach((item) => {
        totalPrice += item.quantity * item.itemId.price;
      });
    });
    return totalPrice;
  };
  

  return (
    <div className="shop-container">
      <h1>Shop Items</h1>
      {loading ? (
        <p>Loading items...</p>
      ) : (
        <div className="items-grid">
          {items.map(item => (
            <div key={item._id} className="item-card">
              <img src={item.imageUrl} alt={item.name} />
              <h2>{item.name} </h2>
              <p>{item.description}</p>
              <p>${item.price}</p>
            <button onClick={() => handleAddToCart(item._id)}>Add to Cart</button>
           
            
            </div>
          ))}
           {/* Display ordered items and total price */}
      <section className="ordered-items">
        <h2>Ordered Items</h2>
        <ul>
          {orderedItems.map((order) => (
            <li key={order._id}>
              <h3>Order ID: {order._id}</h3>
              <ul>
                {order.items.map((item) => (
                  <li key={item.itemId._id}>
                    {item.itemId.name} - Quantity: {item.quantity} - Price: ${item.itemId.price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <h3>Total Price of Ordered Items: {calculateOrderedItemsPrice(orderedItems)}</h3>
      </section>
        </div>
      )}
    </div>
  );
};


export default Shop;
