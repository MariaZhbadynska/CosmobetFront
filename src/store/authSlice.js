import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/httpcommon";

const readUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user") || "null");
  } catch {
    return null;
  }
};

const initialState = {
  token: localStorage.getItem("token") || null,
  user: readUser(),
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/auth/login", body);
      const token = data.access_token || data.token;
      const user = data.user || null;
      if (!token) throw new Error("Missing access token");
      localStorage.setItem("token", token);
      if (user) localStorage.setItem("user", JSON.stringify(user));
      return { token, user };
    } catch (e) {
      return rejectWithValue(e?.response?.data?.message || "Login failed");
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (
    { firstName, lastName, age, email, password },
    { rejectWithValue }
  ) => {
    try {
      const payload = {
        email: (email || "").trim(),
        password,
        name: (firstName || "").trim(),
        surname: (lastName || "").trim(),
        age: Number(age),
      };

      const { data } = await api.post("/auth/register", payload);
      const token = data.access_token || data.token;
      localStorage.setItem("token", token);
      if (data.user) localStorage.setItem("user", JSON.stringify(data.user));
      return { token, user: data.user || null };
    } catch (e) {
      return rejectWithValue(e?.response?.data?.message || "Register failed");
    }
  }
);

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (b) => {
    const start = (s) => {
      s.loading = true;
      s.error = null;
    };
    const ok = (s, a) => {
      s.loading = false;
      s.token = a.payload.token;
      s.user = a.payload.user;
    };
    const fail = (s, a) => {
      s.loading = false;
      s.error = a.payload;
    };

    b.addCase(login.pending, start)
      .addCase(login.fulfilled, ok)
      .addCase(login.rejected, fail)
      .addCase(register.pending, start)
      .addCase(register.fulfilled, ok)
      .addCase(register.rejected, fail);
  },
});

export const { logout } = slice.actions;
export default slice.reducer;
