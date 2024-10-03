import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from '@/shared/ui/ThemeBtn/slice/ThemeSlice';
import AuthModalSlice from '@/widgets/AuthModal/AuthModal.slice';
const store = configureStore({
  reducer: {
    ThemeSlice: ThemeSlice,
    AuthModalSlice: AuthModalSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
