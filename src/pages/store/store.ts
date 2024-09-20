import { configureStore } from '@reduxjs/toolkit';
//import appReducer from './features/appSlice'; // Example slice
import ThemeSlice from '@/features/ThemeBtn/slice/ThemeSlice';
const store = configureStore({
  reducer: {
    ThemeSlice: ThemeSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
