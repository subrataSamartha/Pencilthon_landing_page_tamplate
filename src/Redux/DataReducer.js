import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Hero: {
    heading: "Default",
    paragraph: "Default",
  },
  Community: {
    image: "./images/person-image.jpg",
    heading: "Default",
    paragraph: "Default",
  },
};

const dataSlice = createSlice({
  name: "dataReducer",
  initialState,
  reducers: {
    setData: (state, action) => {
      state[action.payload.section] = action.payload.data;
    },
  },
});

export default dataSlice.reducer;
export const { setData } = dataSlice.actions;
export const getData = (state) => state.dataReducer;
