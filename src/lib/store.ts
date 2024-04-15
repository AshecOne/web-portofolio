import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

export const makeStore = () => {
  let preloadedState;

  if (typeof window !== "undefined") {
    // Only access localStorage when in the client-side environment
    const storedUserData = localStorage.getItem("user");
    preloadedState = {
      user: storedUserData ? JSON.parse(storedUserData) : {
        name: "",
        isLoggedIn: false,
      }
    };
  } else {
    // Provide a default initial state if on the server-side
    preloadedState = {
      user: {
        name: "",
        isLoggedIn: false,
      }
    };
  }

  return configureStore({
    reducer: {
      user: userReducer,
    },
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
