import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "LIST",
  initialState: JSON.parse(localStorage.getItem("list")) || {
    id: 1,
    data: [],
  },
  reducers: {
    addListItem: (state, action) => {
      state.data = [...state.data, action.payload];
      state.id++;

      localStorage.setItem("list", JSON.stringify(state, null, 1));
      return state;
    },
  },
});

export const { addListItem } = listSlice.actions;
export default listSlice.reducer;
