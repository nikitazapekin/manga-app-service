import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { AppStatee, UserDataArray, SearchTypes } from '../types';
interface AuthModalSliceTypes {
    isOpen: boolean
}
const initialState: AuthModalSliceTypes = {
    isOpen: true
};
const AuthModalSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsOpen(state) {
            state.isOpen = !state.isOpen
        },

    }
}
);
export const {
setIsOpen
} = AuthModalSlice.actions;
export default AuthModalSlice.reducer;