import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PublishManagement = () => {
  const [books, setBooks] = useState([]); // initial empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPendingBooks = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('http://localhost:5000/api/publish/pending', { withCredentials: true, });
 // changed here
      if (Array.isArray(data)) {
        setBooks(data);
        setError('');
      } else {
        setError('Unexpected response format from server');
        setBooks([]);
      }
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch books');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingBooks();
  }, []);

  const handleApprove = async (id) => {
    try {
     await axios.put(`http://localhost:5000/api/publish/${id}/approve`, {}, { withCredentials: true, }); // changed here
      fetchPendingBooks();
    } catch (err) {
      alert('Failed to approve book');
    }
  };

  const handleReject = async (id) => {
    try {
     await axios.put(`http://localhost:5000/api/publish/${id}/reject`, {}, { withCredentials: true, }); // changed here
      fetchPendingBooks();
    } catch (err) {
      alert('Failed to reject book');
    }
  };

  if (loading) return <p>Loading pending books...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  if (!Array.isArray(books)) {
    return <p className="text-danger">Data format error: Expected an array</p>;
  }

  return (
    <div className="container mt-3">
      <h2>Publish Management (Pending Books)</h2>
      {books.length === 0 ? (
        <p>No pending books found.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Publish Year</th>
              <th>Submitted By</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.description}</td>
                <td>{new Date(book.publishYear).getFullYear()}</td>
                <td>
                  {book.user?.name} ({book.user?.email})
                </td>
                <td>
                  {book.image ? (
                    <img
                      src={book.image}
                      alt="cover"
                      style={{ width: '80px' }}
                    />
                  ) : 'No Image'}
                </td>
                <td>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => handleApprove(book._id)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleReject(book._id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PublishManagement;
