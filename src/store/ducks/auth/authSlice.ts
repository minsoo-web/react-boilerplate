import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface authSliceType {
  userInfo: null;
}

const initialState: authSliceType = {
  userInfo: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    }
  }
});

export const { setUserInfo } = authSlice.actions;

export default authSlice.reducer;
