import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Guest',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    deleteName: (state) => {
      state.name = 'Guest';
    },
  },
});

export const { setName, deleteName } = userSlice.actions;

export default userSlice.reducer;
