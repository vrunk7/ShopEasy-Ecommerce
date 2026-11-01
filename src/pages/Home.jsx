import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Upgrade your everyday.",
      description: "Discover products that make life better.",
      offer: "Explore our latest collection",
      button: "Shop Now",
      image: "/banners/allp.png",
    },
    {
      title: "Style meets comfort.",
      description: "Find your perfect everyday essentials.",
      offer: "Explore fashion",
      button: "Explore Now",
      image: "/banners/fashion.png",
    },
    {
      title: "Technology made simple.",
      description: "Discover gadgets for your daily life.",
      offer: "Explore electronics",
      button: "Discover More",
      image: "/banners/tech.png",
    },
  ];

  const currentSlide = slides[activeSlide];

  const featuredProducts = products.slice(0, 3);

  function nextSlide() {
    setActiveSlide((previousSlide) => (previousSlide + 1) % slides.length);
  }

  function previousSlide() {
    setActiveSlide(
      (previousSlide) => (previousSlide - 1 + slides.length) % slides.length,
    );
  }

  return (
    <main className="home-page">
      {/* Hero Carousel */}
      <section className="hero-section">
        <div className="hero-image">
          <img src={currentSlide.image} alt="Featured collection" />
        </div>

        <div className="hero-content">
          <p className="hero-offer">{currentSlide.offer}</p>
          <h1>{currentSlide.title}</h1>
          <p>{currentSlide.description}</p>

          <Link to="/products" className="primary-button">
            {currentSlide.button}
          </Link>

          <div className="carousel-controls">
            <button onClick={previousSlide}>←</button>

            <span>
              {activeSlide + 1} / {slides.length}
            </span>

            <button onClick={nextSlide}>→</button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="section-subtitle">OUR PICKS</p>
            <h2>Featured Products</h2>
          </div>

          <Link to="/products">View All →</Link>
        </div>

        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              className="featured-card"
              key={product.id}
            >
              <img src={product.image} alt={product.name} />

              <div className="featured-card-info">
                <p>{product.category}</p>
                <h3>{product.name}</h3>
                <strong>₹{product.price}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}

      <section className="category-section">
        <p className="section-subtitle">EXPLORE</p>
        <h2>Shop by Category</h2>

        <div className="category-grid">
          {[...new Set(products.map((product) => product.category))].map(
            (category) => {
              const categoryProduct = products.find(
                (product) => product.category === category,
              );

              return (
                <Link
                  to={`/products?category=${encodeURIComponent(category)}`}
                  className="category-card"
                  key={category}
                >
                  <img src={categoryProduct.image} alt={category} />
                  <span>{category}</span>
                  <small>Explore Collection →</small>
                </Link>
              );
            },
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
