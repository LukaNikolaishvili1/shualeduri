import React, { useState } from "react";
import "./ProductPage.css";

const ProductPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [cart, setCart] = useState([]);

  const product = {
    id: 1,
    name: "Stylish Shoes",
    price: 100,
    images: ["/assets/img1.jpg", "/assets/img2.jpg", "/assets/img3.jpg"],
  };
  

  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    
    <div className="product-page">
      <div className="product-gallery">
        <img
          src={product.images[currentImage]}
          alt="Main Product"
          className="product-main-image"
        />
        <div className="product-thumbnails">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className="product-thumbnail"
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <button onClick={addToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
