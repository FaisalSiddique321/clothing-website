import './testimonials.css'; 

const Testimonials = () => (
  <section id="testimonials" className="testimonials-section">
    <h3 className="testimonials-title">What Our Customers Say</h3>
    <div className="testimonials-container">
      <div className="testimonial-card">
        <img src="/R.jpeg" alt="John Doe" className="testimonial-image" />
        <p className="testimonial-text">Hello, I got my hoodie yesterday and it's exactly what I was looking for. The delivery was also very fast. Thanks for the excellent service!</p>
        <div className="rating">
          <span className="rating-stars">★ ★ ★ ★ ★</span>
        </div>
        <h4 className="testimonial-name">Adeel</h4>
      </div>

      <div className="testimonial-card">
        <img src="/R.jpeg" alt="Jane Smith" className="testimonial-image" />
        <p className="testimonial-text">Hi, I just received my hoodie and I love it! The quality is great and it fits perfectly. Thanks for the great service</p>
        <div className="rating">
          <span className="rating-stars">★ ★ ★ ★ ★</span>
        </div>
        <h4 className="testimonial-name">Shayan</h4>
      </div>

      <div className="testimonial-card">
        <img src="/R.jpeg" alt="Alex Lee" className="testimonial-image" />
        <p className="testimonial-text">Hi, I received my hoodie today and I'm really happy with it. However, I noticed a small defect in the stitching. Can you please help me with a replacement or refund</p>
        <div className="rating">
          <span className="rating-stars">★ ★ ★ ★ ★</span>
        </div>
        <h4 className="testimonial-name">Mehmood</h4>
      </div>
    </div>
  </section>
);

export default Testimonials;
