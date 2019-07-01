import React from 'react';
import './Book.scss';

const Book = () => (
  <div className="container">
    <div className="book-tour">
      <h2>Book a tour today</h2>
      <p>Schedule a visit with us.</p>
      <form>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Phone number" />
        <div className="input-group">
          <input type="text" placeholder="Move-in date" />
          <input type="text" placeholder="Team size" />
        </div>
        <button className="submit">Submit request</button>
      </form>
    </div>
  </div>
);

export default Book;
