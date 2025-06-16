import Cookies from "js-cookie";
import { login } from "@/api/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { jsx } from "react/jsx-runtime";

const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);
      const { token, roles } = response.data || {};

      if (token) {
        Cookies.set("authToken", token, {
          secure: true,
          sameSite: "Strict",
          expires: 1,
          path: "/",
        });
      }

      if (roles && roles.length > 0) {
        if (roles && roles.length > 0) {
          const roleString = roles.join(", "); // e.g., "USER, MERCHANT, ADMIN"

          Cookies.set("role", roleString, {
            secure: true,
            sameSite: "Strict",
            expires: 1,
            path: "/",
          });
        }
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || "Login failed");
    }
  }
);

export { loginUser };
