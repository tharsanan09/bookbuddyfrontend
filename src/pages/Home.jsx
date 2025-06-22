
import React from 'react';
import book2 from '../assets/bookimage2.jpg';
import book5 from '../assets/book5.jpg';
import book6 from '../assets/book6.jpg';
import book7 from '../assets/book7.jpg';

import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {

  return (
    <>
    {/* section 1 */}

    <section className="hero-wrapper container mt-4 position-relative">
  <h2 className="text-center fw-bold" style={{ marginTop: '60px' }}>
    Welcome To Book Buddy
  </h2>

  {/* MAIN HERO IMAGE with hover effect */}
  <img
    src={book2}
    className="img-fluid rounded-4 mt-2 hero-img hover-scale"
    alt="Books"
  />

  {/* QUOTE CARD with hover effect */}
  <div className="quote-card p-4 text-center shadow-lg rounded hover-lift mt-3">
    <h5 className="fw-bold">Books are like<br />gifts from God…</h5>
    <p className="small mb-3">
      Each page can light a path,<br />
      heal a heart, or awaken a soul.
    </p>
    <button className="btn btn-purple">Read More</button>
  </div>
</section>

 {/* section 2 book card */}
    
    <section className="py-5">
      <div className="container2">
        <h2 className="text-center fw-bold mb-5">Discover Great Books</h2>

        <div className="row justify-content-center text-center">
          {/* Book 1 */}
          <div className=" col-md-4 mb-4">
            <img src={book5} alt="Book 1" className="img-fluid book-image rounded-start-top" />
            <h5 className="fw-bold mt-3">The Great Gatsby</h5>
            <p className="text-muted">F. Scott Fitzgerald</p>
            <button className="btn btn-purple px-4 py-1 rounded-pill">Details</button>
          </div>

          {/* Book 2 */}
          <div className="col-md-4 mb-4">
            <img src={book6} alt="Book 2" className="img-fluid book-image rounded-center" />
            <h5 className="fw-bold mt-3">Beautiful</h5>
            <p className="text-muted">Alice Feeney</p>
            <button className="btn btn-purple px-4 py-1 rounded-pill">Details</button>
          </div>

          {/* Book 3 */}
          <div className="col-md-4 mb-4">
            <img src={book7} alt="Book 3" className="img-fluid book-image rounded-end-top" />
            <h5 className="fw-bold mt-3">The Great Gatsby</h5>
            <p className="text-muted">F. Scott Fitzgerald</p>
            <button className="btn btn-purple px-4 py-1 rounded-pill">Details</button>
          </div>
        </div>

        <div className="text-center mt-4">
          <button id='btnmore' className="btn btn-dark rounded-pill px-4">More Books</button>
        </div>
      </div>
    </section>

       {/* section 3 */}
       <section className="borrow-highlight py-5" style={{ background: 'linear-gradient(to right, #f0f0f0, #e0e0e0)' }}>
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold text-dark">Borrow Books with Ease</h2>
      <p className="text-muted">Flexible rentals, instant approvals, and a library at your fingertips.</p>
    </div>

    <div className="row justify-content-center g-4">
      {/* Card 1 */}
      <div className="col-md-4">
        <div className="card glass-card p-4 h-100 shadow-lg border-0 text-center">
          <div className="mb-3">
            <i className="bi bi-journal-bookmark-fill fs-1 text-purple"></i>
          </div>
          <h5 className="fw-bold mb-2">Wide Book Collection</h5>
          <p className="text-muted">Choose from novels, biographies, comics, and more — all in one place.</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4">
        <div className="card glass-card p-4 h-100 shadow-lg border-0 text-center">
          <div className="mb-3">
            <i className="bi bi-clock-history fs-1 text-purple"></i>
          </div>
          <h5 className="fw-bold mb-2">Flexible Borrowing</h5>
          <p className="text-muted">Borrow for 14 days with easy extension options and minimal late fees.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4">
        <div className="card glass-card p-4 h-100 shadow-lg border-0 text-center">
          <div className="mb-3">
            <i className="bi bi-truck fs-1 text-purple"></i>
          </div>
          <h5 className="fw-bold mb-2">Home Delivery</h5>
          <p className="text-muted">Enjoy doorstep delivery and return options, hassle-free.</p>
        </div>
      </div>
    </div>

    <div className="text-center mt-5">
      <button className="btn btn-purple btn-lg rounded-pill px-5 shadow-sm">
        Get Started
      </button>
    </div>
  </div>
</section>

{/* section 4 */}

<section className="py-5 book-highlight-section">
  <div className="container">
    <div className="row align-items-center justify-content-between rounded-4 shadow-lg p-4 glass-card">
      
      {/* Book Image */}
      <div className="col-lg-5 mb-4 mb-lg-0 text-center">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          className="img-fluid rounded-4 hover-scale shadow"
          alt="Book to Borrow"
        />
      </div>

      {/* Book Info */}
      <div className="col-lg-6">
        <h2 className="fw-bold text-purple mb-3">📚 Ready to Borrow Your Next Read?</h2>
        <p className="text-muted mb-4 fs-5">
          Dive into our vast collection of books – from timeless classics to modern favorites. Enjoy a seamless borrowing experience with flexible rental periods and easy returns.
        </p>

        <ul className="list-unstyled fs-6 mb-4 text-secondary">
          <li className="mb-2">✅ 14-Day Rental with Extensions</li>
          <li className="mb-2">✅ ₹50/day Late Fee (only if delayed)</li>
          <li className="mb-2">✅ Doorstep Delivery & Pickup</li>
        </ul>

        <button className="btn btn-purple px-4 py-2 rounded-pill shadow-sm">
          Borrow Now
        </button>
      </div>
    </div>
  </div>
</section>


    


    {/* section 5 */}
    <section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center fw-bold mb-4">📖 Popular Books You Can Borrow</h2>
    
    <div id="bookCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner rounded-4 shadow-lg">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" className="img-fluid rounded-4" alt="Book 1" />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold text-purple">Thirukkural</h3>
              <p className="text-muted">By Thiruvalluvar</p>
              <p>
                A timeless Tamil classic that blends philosophy, ethics, and wisdom in poetic form. A must-read for every reader.
              </p>
              <button className="btn btn-purple mt-2 rounded-pill px-4">Borrow Now</button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383" className="img-fluid rounded-4" alt="Book 2" />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold text-purple">Ponniyin Selvan</h3>
              <p className="text-muted">By Kalki</p>
              <p>
                Travel back in time with this epic Tamil novel full of intrigue, valor, and history from the Chola dynasty.
              </p>
              <button className="btn btn-purple mt-2 rounded-pill px-4">Borrow Now</button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src="https://images.unsplash.com/photo-1476958526483-36efcaa80aa4" className="img-fluid rounded-4" alt="Book 3" />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold text-purple">The Alchemist</h3>
              <p className="text-muted">By Paulo Coelho</p>
              <p>
                An inspiring story of a shepherd’s journey to follow his dream. Perfect for motivation and self-discovery.
              </p>
              <button className="btn btn-purple mt-2 rounded-pill px-4">Borrow Now</button>
            </div>
          </div>
        </div>

      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#bookCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#bookCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>
</section>

   
    </>
  );
}

export default Home;