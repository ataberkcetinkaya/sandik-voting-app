import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import voteReducer from "./vote/voteSlice";
import comments from "./comment";

export const store = configureStore({
        reducer: {
                auth: authReducer,
                vote: voteReducer,
                comments
        }
})
