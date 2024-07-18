import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "LIST",
  initialState: JSON.parse(localStorage.getItem("list")) || [],
  reducers: {
    addListItem: (state, action) => {
        console.log(action)
      state = [...state, action.payload];
      return state;
    },
  },
});

export const { addListItem } = listSlice.actions;
export default listSlice.reducer;
