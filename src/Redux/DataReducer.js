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
  ExploreGroup: [
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
  Testimonials: [
    {
      id: 1,
      name: "swayam",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0exUKpwo_bZh4gvbG8iXr8To3Rr18X10pZPU_N6ePVzOxSRd4f15ejgVaDJVtBbzl9U&usqp=CAU",
      desc: "Swayam op Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, autem, unde perferendis quos veniam minus tempore nobis recusandae, odio harum totam voluptatum fugiat alias iusto saepe beatae quas! Ullam adipisci placeat soluta?",
      opc: "100",
      course: "Web App Development",
      rating: 5,
    },
    {
      id: 2,
      name: "chandan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0exUKpwo_bZh4gvbG8iXr8To3Rr18X10pZPU_N6ePVzOxSRd4f15ejgVaDJVtBbzl9U&usqp=CAU",
      desc: "Chandan op Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, autem, unde perferendis quos veniam minus tempore nobis recusandae, odio harum totam voluptatum fugiat alias iusto saepe beatae quas! Ullam adipisci placeat soluta?",
      opc: "0",
      course: "Android App Development",
      rating: 5,
    },
    {
      id: 3,
      name: "samartha",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0exUKpwo_bZh4gvbG8iXr8To3Rr18X10pZPU_N6ePVzOxSRd4f15ejgVaDJVtBbzl9U&usqp=CAU",
      desc: "Samartha op Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, autem, unde perferendis quos veniam minus tempore nobis recusandae, odio harum totam voluptatum fugiat alias iusto saepe beatae quas! Ullam adipisci placeat soluta?",
      opc: "0",
      course: "Flutter Development",
      rating: 5,
    },
  ],
};

const dataSlice = createSlice({
  name: "dataReducer",
  initialState,
  reducers: {
    setData: (state, action) => {
      //   console.log(action.payload.section, action.payload.data);
      state[action.payload.section] = action.payload.data;
    },
  },
});

export default dataSlice.reducer;
export const { setData } = dataSlice.actions;
export const getData = (state) => state.dataReducer;
