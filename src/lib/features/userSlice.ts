import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  name: string;
  isLoggedIn: boolean;
}

const initialState: IUserState = {
  name: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.isLoggedIn = action.payload.isLoggedIn;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(state));
      }
    },
    updateUser: (state, action: PayloadAction<{ name?: string; email?: string }>) => {
      if (action.payload.name !== undefined) {
        state.name = action.payload.name;
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(state));
      }
    },
    logout: (state) => {
      state.name = "";
      state.isLoggedIn = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
    },
  },
});

export const { setUser, updateUser, logout } = userSlice.actions;
export default userSlice.reducer;