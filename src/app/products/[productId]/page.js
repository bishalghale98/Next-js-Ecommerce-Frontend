import BackButton from "@/components/BackButton";
import React from "react";

const ProductById = async ({ params }) => {
  const { productId } = await params;

  if (parseInt(productId) > 100) {
    throw new Error(`Product with id "${productId}" not found`);
  }

  return (
    <div>
      <BackButton />
      <h1 className="text-2xl ">Get Product of "{productId}" id</h1>
    </div>
  );
};

export default ProductById;
