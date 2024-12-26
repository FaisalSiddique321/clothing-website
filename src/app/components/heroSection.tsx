import Image from "next/image";
import './heroSection.css'; 

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-image">
      <Image
        src="/pic1.jpg"
        alt="Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <div className="hero-content">
      <h2 className="hero-title">Men's Collection</h2>
      <p className="hero-description">"Wear the Trend" "Fashion that Dares" "Make Heads Turn" "Dress to Impress"</p>
      <button className="hero-button">See Menu</button>
    </div>
  </section>
);

export default HeroSection;
