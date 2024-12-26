import Image from 'next/image';
import './menu.css'; 

const Menu = () => {
  const dishes = [
    { name: 'Hoodie', description: 'Soft and comfortable fabric for ultimate relaxation', price: '$12.99', image: '/pic2.jpeg', width: 400, height: 200 },
    { name: 'Black Denim', description: 'good Stylish design to elevate your fashion sense', price: '$16.99', image: '/B.jpeg', width: 400, height: 250 },
    { name: 'Casual Shirt', description: 'Adjustable hood for a customizable fit fashion style', price: '$6.99', image: '/C.jpeg', width: 350, height: 200 },
    { name: 'Truker Denim Jacket', description: 'Front pocket to keep your hands warm and cozy', price: '$8.99', image: '/D.jpeg', width: 300, height: 200 },
    { name: 'Crop Hoodie', description: 'High-quality stitching and durable material for long-lasting wear', price: '$18.99', image: '/E.jpeg', width: 450, height: 250 },
    { name: 'Performance Hoodie', description: 'Soft, comfortable, and stylish - the perfect hoodie for everyday wear', price: '$7.99', image: '/F.jpeg', width: 400, height: 200 },
  ];

  return (
    <section id="menu" className="services-section">
      <h3 className="services-title">Our Design</h3>
      <div className="services-container">
        {dishes.map((dish, index) => (
          <div key={index} className="dish-card">
            <Image 
              src={dish.image} 
              alt={dish.name} 
              width={dish.width} 
              height={dish.height} 
              className="dish-image" 
            />
            <div className="dish-info">
              <h4 className="dish-name">{dish.name}</h4>
              <p className="dish-description">{dish.description}</p>
              <p className="dish-price">{dish.price}</p>
              <button className="buy-button">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
