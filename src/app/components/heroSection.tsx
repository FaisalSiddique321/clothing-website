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
      <h2 className="hero-title">Men&apos;s Collection</h2>
      <p className="hero-description">&quot;Wear the Trend&quot; &quot;Fashion that Dares&quot; &quot;Make Heads Turn&quot; &quot;Dress to Impress&quot;</p>
      <button className="hero-button">See Menu</button>
    </div>
  </section>
);

export default HeroSection;
