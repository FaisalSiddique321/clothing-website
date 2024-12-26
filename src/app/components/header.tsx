import Link from 'next/link';
import './header.css'; 

const Header = () => (
  <header className="header">
    <div className="header-container">
      <h1 className="logo">Fashion Fusion</h1>
      <nav className="nav">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="#about us" className="nav-link">About Us</Link>
        <Link href="#menu" className="nav-link">Design</Link>
        <Link href="#contact" className="nav-link">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;
