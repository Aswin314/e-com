import React from "react";
import "./Product.css"; // Assuming you have a CSS file for styling

const Product = ({ Result }) => {
  return <section className="card-container">{Result}</section>;
};

export default Product;
