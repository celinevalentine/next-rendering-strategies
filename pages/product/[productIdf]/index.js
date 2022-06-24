import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <div>
      <h2>ProductDetails of product</h2>
    </div>
  );
};

export default ProductDetails;
