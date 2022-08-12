import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import votes from "./votes";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        votes,
        
    }
})
