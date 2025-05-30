import React from "react";

const ProductById = async ({ params }) => {
  const { productId } = await params;

  return <div>Get Product of "{productId}" id</div>;
};

export default ProductById;
