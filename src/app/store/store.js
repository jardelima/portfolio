

import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pagesSlice";

export default configureStore({
    reducer: {
        page: pageReducer
    }
});
