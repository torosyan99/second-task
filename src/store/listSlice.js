import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "LIST",
  initialState: JSON.parse(localStorage.getItem("list")) || {
    id: 1,
    data: [],
    newState: {
      title: "",
      description: "",
      data: "",
    },
    edit: null,
  },
  reducers: {
    addListItem: (state, action) => {
      state.newState.id = state.id;
      state.data = [...state.data, state.newState];
      state.newState = {
        title: "",
        description: "",
        data: "",
      };
      state.id++;

      localStorage.setItem("list", JSON.stringify(state, null, 1));
      return state;
    },
    deleteListItem: (state, action) => {
      state.data = state.data.filter((node) => node.id !== action.payload);
      localStorage.setItem("list", JSON.stringify(state, null, 1));
      return state;
    },
    editListItem: (state) => {
      const findItemIndex = state.data.findIndex(
        (node) => node.id === state.edit
      );

      state.data[findItemIndex] = state.newState;
      state.newState = {
        title: "",
        description: "",
        data: "",
      };
      state.edit = null;
      localStorage.setItem("list", JSON.stringify(state, null, 1));

      return state;
    },
    findEditListItem: (state, action) => {
      const findItem = state.data.find((node) => node.id === action.payload);
      state.newState = findItem;
      state.edit = action.payload;
      return state;
    },
    closeEdit: (state) => {
      state.newState = {
        title: "",
        description: "",
        data: "",
      };
      state.edit = null;
      return state;
    },
    changeState: (state, action) => {
      const { key, value } = action.payload;
      state.newState[key] = value;
      return state;
    },
  },
});

export const {
  addListItem,
  deleteListItem,
  findEditListItem,
  changeState,
  editListItem,
  closeEdit,
} = listSlice.actions;
export default listSlice.reducer;
