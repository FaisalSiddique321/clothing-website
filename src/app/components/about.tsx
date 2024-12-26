import Link from 'next/link';
import './about.css'; 

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
        A clothing brand is a business or label that operates within the fashion industry, specializing in creating and selling clothing and apparel. It encompasses designing, manufacturing, marketing, and distributing garments, targeting specific customer segments or the target market.
        </p>
        <Link href="/menu" legacyBehavior>
          <a className="menu-button">
            Check Our Menu
          </a>
        </Link>
      </div>
    </section>
  );
};

export default About;
