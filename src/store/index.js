import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import votes from "./votes";
import comments from "./comment";

export const store = configureStore({
        reducer: {
                auth: authReducer,
                votes,
                comments

        }
})
