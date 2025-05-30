import React from "react";

const ReviewByIdPage = async ({ params }) => {
  const { productId, reviewId } = await params;

  return (
    <div>
      Review of {productId} and {reviewId}
    </div>
  );
};

export default ReviewByIdPage;
