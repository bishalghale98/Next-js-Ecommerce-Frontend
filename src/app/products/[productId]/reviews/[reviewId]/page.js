import React from "react";

const ReviewByIdPage = async ({ params }) => {
  const { productId, reviewId } = await params;

   if (parseInt(reviewId) > 100) {
    throw new Error(`Review with id "${reviewId}" not found`);
  }

  return (
    <div>
      Review of {productId} and {reviewId}
    </div>
  );
};

export default ReviewByIdPage;
