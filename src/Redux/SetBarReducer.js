import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: "off",
  formNo: 1,
};

const SideBarSlice = createSlice({
  name: "setBarRed",
  initialState,
  reducers: {
    setSideBarShow: (state, action) => {
      //   console.log("sidebarshow");
      //   console.log(state);
      state.show = action.payload;
      //   console.log(state.show);
    },
    setFormNo: (state, action) => {
      state.formNo = action.payload;
    },
  },
});

export const { setSideBarShow, setFormNo } = SideBarSlice.actions;
export const getShow = (state) => state.sideBarReducer.show;
export const getFormNo = (state) => state.sideBarReducer.formNo;
export default SideBarSlice.reducer;
