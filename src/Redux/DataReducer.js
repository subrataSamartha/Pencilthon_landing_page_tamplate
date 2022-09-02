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
  ExploreGroup: {
    cards: [
      {
        id: 1,
        groupName: "Javascript Community",
        groupDesc:
          "Learn and help from each other. It doesn't matter from where you are learning",
        image: "./images/1.jpg",
      },
      {
        id: 2,
        groupName: "Javascript Community",
        groupDesc:
          "Learn and help from each other. It doesn't matter from where you are learning",
        image: "./images/2.jpg",
      },
      {
        id: 3,
        groupName: "Javascript Community",
        groupDesc:
          "Learn and help from each other. It doesn't matter from where you are learning",
        image: "./images/3.jpg",
      },
      {
        id: 4,
        groupName: "Javascript Community",
        groupDesc:
          "Learn and help from each other. It doesn't matter from where you are learning",
        image: "./images/4.jpg",
      },
    ],
  },
};

const dataSlice = createSlice({
  name: "dataReducer",
  initialState,
  reducers: {
    setData: (state, action) => {
      console.log(action.payload.section, action.payload.data);
      state[action.payload.section] = action.payload.data;
    },
  },
});

export default dataSlice.reducer;
export const { setData } = dataSlice.actions;
export const getData = (state) => state.dataReducer;
