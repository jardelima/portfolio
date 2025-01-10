import { createSlice } from "@reduxjs/toolkit";

export const pagesSlice = createSlice({
    name: "pages",
    initialState: {
        page: "home",
    },
    reducers: {
        changePage(state, { payload }) {
            return { ...state, page: payload };
        },
    }
});

export const { changePage } = pagesSlice.actions;

export const selectCurrentPage = (state) => state.page;

export default pagesSlice.reducer;
