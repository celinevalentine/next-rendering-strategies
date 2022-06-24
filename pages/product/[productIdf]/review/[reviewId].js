import React from "react";
import { useRouter } from "next/router";

export const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h1>
      review {reviewId} of product {productId}
    </h1>
  );
};

export default Review;
