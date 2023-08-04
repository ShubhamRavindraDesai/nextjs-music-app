import { createSlice } from "@reduxjs/toolkit";

const initialState = { userData: { token: "", email: "" } };

const { actions, reducer: userReducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserToken(state, action) {
      state.userData.token = action.payload.token as string;
      state.userData.email = action.payload.email as string;
    },
  },
});
export const { saveUserToken } = actions;

export default userReducer;
