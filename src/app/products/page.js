import { getProducts } from "@/api/products";
import React from "react";
import ClientPage from "./clientPage";

const Product = async () => {
  const products = await getProducts();


  return <ClientPage products={products} />;
};

export default Product;
