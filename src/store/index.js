import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import voteReducer from "./vote/voteSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        vote: voteReducer,
    }
})
