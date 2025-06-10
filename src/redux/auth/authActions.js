const { login } = require("@/api/auth");
const { createAsyncThunk } = require("@reduxjs/toolkit");

const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, { rejectWithValues }) => {
    try {
      const response = await login(data);

      if (response.data) {
        localStorage.setItem("authToken", response.data.token);
      }

      return response?.data;
    } catch (error) {
      return rejectWithValues(error.response.data);
    }
  }
);

export { loginUser };
