import api from "./api";

async function login({ email, password }) {
  const response = await api.post("/api/auth/login", { email, password });
  return response;
}

export { login };
