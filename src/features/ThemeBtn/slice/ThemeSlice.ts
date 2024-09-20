import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  value: number;
}
const initialState: AppState = {
  value: 0,
};
const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = ThemeSlice.actions;

export default ThemeSlice.reducer;
