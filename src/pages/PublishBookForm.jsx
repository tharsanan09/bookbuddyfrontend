import React, { useState } from 'react';
import axios from 'axios';

const PublishBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    publishYear: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!formData.image) {
      alert('Please select an image before submitting.');
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('author', formData.author);
    data.append('description', formData.description);
    data.append('publishYear', formData.publishYear);
    data.append('image', formData.image);

    try {
      await axios.post('http://localhost:5000/api/publish', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      alert('Book submitted for admin approval');

      // Reset form after success
      setFormData({
        title: '',
        author: '',
        description: '',
        publishYear: '',
        image: null,
      });

    } catch (error) {
      console.error('Submission error:', error.response?.data || error.message);
      alert('Error submitting book');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Publish a Book</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label>Title</label>
          <input
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Author</label>
          <input
            className="form-control"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Publish Year</label>
          <input
            type="date"
            className="form-control"
            name="publishYear"
            value={formData.publishYear}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Upload Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit for Review
        </button>
      </form>
    </div>
  );
};

export default PublishBookForm;
