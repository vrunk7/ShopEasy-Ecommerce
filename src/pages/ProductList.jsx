import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import products from "../data/products";

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [maxPrice, setMaxPrice] = useState(200000);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const categoryFromUrl = searchParams.get("category");
  const selectedCategory = categories.includes(categoryFromUrl)
    ? categoryFromUrl
    : "All";

  function handleCategoryChange(event) {
    const category = event.target.value;
    const updatedParams = new URLSearchParams(searchParams);

    if (category === "All") {
      updatedParams.delete("category");
    } else {
      updatedParams.set("category", category);
    }

    setSearchParams(updatedParams);
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesPrice = product.price <= maxPrice;

    return matchesCategory && matchesPrice;
  });

  function clearFilters() {
    setSearchParams({});
    setMaxPrice(200000);
  }

  return (
    <main className="products-page">
      <div className="products-heading">
        <div>
          <p className="section-subtitle">EXPLORE OUR COLLECTION</p>
          <h1>Discover something you'll love.</h1>
        </div>
        <p className="product-count">
          Showing {filteredProducts.length} products
        </p>
      </div>

      <div className="products-layout">
        <aside className="filter-sidebar">
          <h3>Filters</h3>

          <label>
            Category
            <select value={selectedCategory} onChange={handleCategoryChange}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <div className="price-filter">
            <label htmlFor="price-range">Maximum Price</label>
            <strong>₹{maxPrice.toLocaleString("en-IN")}</strong>

            <input
              id="price-range"
              type="range"
              min="500"
              max="200000"
              step="500"
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
            />
          </div>

          <button className="clear-filters" onClick={clearFilters}>
            Clear Filters
          </button>
        </aside>

        <section className="product-results">
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="product-card"
                >
                  <img src={product.image} alt={product.name} />
                  <div className="product-card-info">
                    <p className="product-category">{product.category}</p>
                    <h2>{product.name}</h2>
                    <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="empty-products">No products match your filters.</p>
          )}
        </section>
      </div>
    </main>
  );
}

export default ProductList;
