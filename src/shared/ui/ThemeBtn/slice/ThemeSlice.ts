import { createSlice, //PayloadAction 

} from '@reduxjs/toolkit';

interface ThemeState {
isDark: boolean
}
const initialState: ThemeState = {
 isDark: false
};
const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {

    switchTheme: (state) => {
      state.isDark = !state.isDark
    }
    
  },
});

export const {switchTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
