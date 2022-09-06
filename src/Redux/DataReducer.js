import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Hero: {
    heading: "Hi, I’m Jone Lee UI/UX Designer.",
    paragraph: "I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.",
  },
  Community: {
    image: "./images/jhia.png",
    heading: "Hi, I’m Jone Lee UI/UX Designer.",
    paragraph: "I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.",
  },
  ExploreGroup: [
    {
      id: 1,
      groupName: "Javascript Community",
      groupDesc:
        "Learn and help from each other. It doesn't matter from where you are learning",
      image: "./images/tea.jpg",
    },
    {
      id: 2,
      groupName: "Javascript Community",
      groupDesc:
        "Learn and help from each other. It doesn't matter from where you are learning",
      image: "./images/phone1.jpg",
    },
    {
      id: 3,
      groupName: "Javascript Community",
      groupDesc:
        "Learn and help from each other. It doesn't matter from where you are learning",
      image: "./images/phone2.jpg",
    },
    {
      id: 4,
      groupName: "Javascript Community",
      groupDesc:
        "Learn and help from each other. It doesn't matter from where you are learning",
      image: "./images/mic.jpg",
    },
  ],
  Testimonials: [
    {
      id: 1,
      name: "swayam",
      image:
        "/images/jhia.png",
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
        "/images/phone1.jpg",
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
