
import React, { useState, useEffect } from 'react';
import '../styles/Books.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spinner, Alert } from 'react-bootstrap';

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState(['All']);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  // Fetch books from backend API
  useEffect(function() {
    async function fetchBooks() {
      try {
        const response = await axios.get('http://localhost:5000/api/books');
        
        // Handle response structure
        const booksData = response.data?.books || [];
        
        // Ensure books is always an array
        if (!Array.isArray(booksData)) {
          throw new Error('Invalid books data format');
        }
        
        setBooks(booksData);
        
        // Extract unique categories safely
        const uniqueCategories = ['All'];
        booksData.forEach(function(book) {
          if (book.category && !uniqueCategories.includes(book.category)) {
            uniqueCategories.push(book.category);
          }
        });
        
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setBooks([]);
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  function handleCategorySelect(category) {
    setSelectedCategory(category === 'All' ? '' : category);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  // Safe filtering with null checks
  const filteredBooks = books.filter(function(book) {
    try {
      const title = book.title?.toLowerCase() || '';
      const author = book.author?.toLowerCase() || '';
      const bookCategory = book.category || '';
      
      const matchesSearch = title.includes(searchTerm.toLowerCase()) || 
                          author.includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || bookCategory === selectedCategory;
      
      return matchesSearch && matchesCategory;
    } catch (filterErr) {
      console.error('Error filtering book:', book, filterErr);
      return false;
    }
  });

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Loading books...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <Alert variant="danger">
          <Alert.Heading>Error Loading Books</Alert.Heading>
          <p>{error}</p>
          <button 
            className="btn btn-secondary" 
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="sidebar shadow-sm p-3 rounded">
            <h5>Categories</h5>
            <ul className="nav flex-column">
              {categories.map(function(category, index) {
                const isActive = selectedCategory === (category === 'All' ? '' : category);
                return (
                  <li key={index} className="nav-item">
                    <button 
                      className={`nav-link text-start ${isActive ? 'active' : ''}`}
                      onClick={() => handleCategorySelect(category)}
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        cursor: 'pointer',
                        width: '100%',
                        textAlign: 'left'
                      }}
                    >
                      {category}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="col-md-9">
          <h4 className="text-center mt-3 mb-3 fw-bold">Explore Our Collection</h4>

          {/* Search */}
          <div className="search-bar mb-3">
            <input 
              type="text" 
              className="form-control search-input" 
              placeholder="Search books..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {/* Book Grid */}
          {filteredBooks.length === 0 ? (
            <Alert variant="info">
              No books found matching your criteria
              {selectedCategory && ` in category "${selectedCategory}"`}
              {searchTerm && ` with search term "${searchTerm}"`}
            </Alert>
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-3">
              {filteredBooks.map(function(book) {
                return (
                  <BookCard 
                   key={book.Book_id}
                    id={book.Book_id}
                    title={book.title} 
                    author={book.author}
                    image={book.imageUrl}
                    category={book.category}
                    available={book.isAvailable}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// BookCard Component
function BookCard({ id, title, author, image, category, available }) {
  const navigate = useNavigate();

 function handleView() {
  if (!id) {
    alert("Invalid book ID.");
    return;
  }
  const token = localStorage.getItem("token");
  if (token) {
    navigate(`/books/${id}`);
  } else {
    alert("Please log in to view book details.");
    navigate("/login", { state: { from: `/books/${id}` } });
  }
}


  return (
    <div className="col">
      <div className="card book-card h-80 shadow-sm ">
        {image ? (
          <img 
            src={image} 
            className="card-img-top book-img" 
            alt={title} 
            style={{ 
              height: '150px', 
              objectFit: 'cover',
              borderBottom: '1px solid rgba(0,0,0,0.1)'
            }}
          />
        ) : (
          <div className="book-img-placeholder d-flex align-items-center justify-content-center bg-light"
            style={{ height: '200px' }}>
            <span className="text-muted">No Image Available</span>
          </div>
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">by {author}</p>
          {category && (
            <span className="badge bg-secondary mb-2 align-self-start">
              {category}
            </span>
          )}
          <p className="card-text">
            Status: 
            <span className={`ms-2 badge ${available ? 'bg-success' : 'bg-danger'}`}>
              {available ? 'Available' : 'Borrowed'}
            </span>
          </p>
          <button
            className="btn btn-purple w-100 mt-auto"
            onClick={handleView}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Books;