import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openChat: false,
  chatList: true,
  clientWall: false,
  mobileMenu: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setChat: (state) => {
      state.openChat = !state.openChat;
    },
    setChatList: (state, action) => {
      state.chatList = action.payload;
    },
    setClientWall: (state, action) => {
      state.clientWall = action.payload;
    },
    setMobileMenu: (state) => {
      state.mobileMenu = !state.mobileMenu;
    },
  },
});
export const { setChat, setChatList, setClientWall, setMobileMenu } =
  generalSlice.actions;
export const openChat = (state) => state.general.openChat;
export const chatList = (state) => state.general.chatList;
export const clientWall = (state) => state.general.clientWall;
export const mobileMenu = (state) => state.general.mobileMenu;
export default generalSlice.reducer;
