import api from "./api";

async function getProducts() {
  const response = await api.get("/api/products");
  return response.data;
}

async function getProductById(productId) {
  const response = await api.get(`/api/products/${productId}`);
  return response.data;
}

export { getProducts, getProductById };
