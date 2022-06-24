import React from "react";
import Link from "next/link";
const ProductList = ({ productId = 100 }) => {
  return (
    <div>
      <h1>products</h1>
      <h2>
        <Link href={`/product/${productId}`}>
          <a>product {productId}</a>
        </Link>
      </h2>
      <h2>
        <Link href={"/'"}>back to home</Link>
      </h2>
    </div>
  );
};

export default ProductList;
