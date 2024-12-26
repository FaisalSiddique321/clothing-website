import './footer.css'; 

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h4 className="footer-title">Contact Us</h4>
        <p>Fashion Fusion Street</p>
        <p>City, State, 77742</p>
        <p>Email: info@fashionfusion.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">Follow Us</h4>
        <ul>
          <li><a href="#" className="footer-link">Facebook</a></li>
          <li><a href="#" className="footer-link">Twitter</a></li>
          <li><a href="#" className="footer-link">Instagram</a></li>
          <li><a href="#" className="footer-link">TikTok</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">Quick Links</h4>
        <ul>
          <li><a href="#" className="footer-link">Home</a></li>
          <li><a href="#" className="footer-link">About Us</a></li>
          <li><a href="#" className="footer-link">Menu</a></li>
          <li><a href="#" className="footer-link">Contact</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2024 Fashion Fusion All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
