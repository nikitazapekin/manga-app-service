import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface AuthModalSliceTypes {
    isOpen: boolean
}
const initialState: AuthModalSliceTypes = {
    isOpen: false
};
const AuthModalSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsOpen(state) {
            console.log("opp")
            state.isOpen = !state.isOpen
        },

    }
}
);
export const {
setIsOpen
} = AuthModalSlice.actions;
export default AuthModalSlice.reducer;