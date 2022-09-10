import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Hero: {
    image: "./images/boy.jpg",
    heading: "Hi, I’m Jone Lee UI/UX Designer.",
    paragraph:
      "I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.",
  },
  Community: {
    image: "./images/jhia.png",
    heading: "I’m John Lee, Teacher by ♥️ and programmer by profession.",
    paragraph:
      "I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.",
    facebook: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    github: "https://www.github.com/",
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
      groupName: "Mobile App Development",
      groupDesc:
        "Learn and help from each other. It doesn't matter from where you are learning",
      image: "./images/phone1.jpg",
    },
    {
      id: 3,
      groupName: "UI/UX Community",
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
  FrequentlyAskedQuestion: [
    {
      id: 1,
      question: "Is there free trail available?",
      answer:
        "Yes, u can try for 30 days login to the site and apply for trail without card",
    },
    {
      id: 2,
      question: "Can I allow my friend to access content?",
      answer:
        "Yes, u can try for 30 days login to the site and apply for trail without card",
    },
    {
      id: 3,
      question: "How to ask questions in the group?",
      answer:
        "Yes, u can try for 30 days login to the site and apply for trail without card",
    },
  ],
  Testimonials: [
    {
      id: 1,
      name: "swayam Prakash Sahoo",
      image: "/images/jhia.png",
      desc: "Swayam op Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, autem, unde perferendis quos veniam minus tempore nobis recusandae, odio harum totam voluptatum fugiat alias iusto saepe beatae quas! Ullam adipisci placeat soluta?",
      opc: "100",
      course: "Web App Development",
      rating: 5,
    },
    {
      id: 2,
      name: "chandan Sahoo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0exUKpwo_bZh4gvbG8iXr8To3Rr18X10pZPU_N6ePVzOxSRd4f15ejgVaDJVtBbzl9U&usqp=CAU",
      desc: "Chandan op Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, autem, unde perferendis quos veniam minus tempore nobis recusandae, odio harum totam voluptatum fugiat alias iusto saepe beatae quas! Ullam adipisci placeat soluta?",
      opc: "0",
      course: "Android App Development",
      rating: 5,
    },
    {
      id: 3,
      name: "Subrata Samartha",
      image: "/images/phone1.jpg",
      desc: "Samartha op Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, autem, unde perferendis quos veniam minus tempore nobis recusandae, odio harum totam voluptatum fugiat alias iusto saepe beatae quas! Ullam adipisci placeat soluta?",
      opc: "0",
      course: "Flutter Development",
      rating: 5,
    },
  ],
  CommunityLive: {
    heading: "Community Live Feed",
    color: "#1a0e9b",
    embed: `<embed
        height="400px"
        width="100%"
        src="https://embed.pensil.in/group/6092210f6b4e221d682a8a72/feed/61d5f19b76ba16db0c7e7de0"
        type="text/html"
    ></embed>`,
  },
  CommunityDescription: {
    heading: "👋 Welcome to Coders community",
    paragraph:
      "Welcome to coder community. You might be learning from any place, company or resource, we are here to help you. Post any of your doubt and there are other fellow coders along with our team to solve your doubts.",
  },
  TextHighlight: {
    heading: "Join Designers Community and unlock new opportunity",
    color: "#d11414",
  },
  NavbarDetails: {
    image: "./images/design-community-logo.png",
    logo: "Design Community",
  },
  Footer: {
    paragraph: "© 2022 Coder Community™. All Rights Reserved.",
  },
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
