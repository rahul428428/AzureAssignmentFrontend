import React, { useState } from 'react';
import './AddProductForm.css'; 

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    imageUrl:'',
    processor: '',
    ram_size: '',
    storage: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error adding product');
      }

      // Reset the form after successful submission
      setFormData({
        brand: '',
        model: '',
        imageUrl:'',
        processor: '',
        ram_size: '',
        storage: '',
        price: ''
      });

      alert('Product added successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding product. Please try again later.');
    }
  };

  return (
    <div className="form-container"> {/* Added a container class */}
      <form onSubmit={handleSubmit}>
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </label>
        <label>
          Image Url:
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </label>
        <label>
          Processor:
          <input
            type="text"
            name="processor"
            value={formData.processor}
            onChange={handleChange}
          />
        </label>
        <label>
          RAM Size:
          <input
            type="text"
            name="ram_size"
            value={formData.ram_size}
            onChange={handleChange}
          />
        </label>
        <label>
          Storage:
          <input
            type="text"
            name="storage"
            value={formData.storage}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
