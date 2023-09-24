import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timezone: "",
  time: ""
};

const clockSlice = createSlice({
  name: "clock",
  initialState: initialState,
  reducers: {
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setTimeZone: (state, action) => {
      state.timezone = action.payload;
    }
  }
});

export const clockActions = clockSlice.actions;
export default clockSlice.reducer;