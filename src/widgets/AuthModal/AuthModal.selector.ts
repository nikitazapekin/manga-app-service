import { RootState } from "@/pages/store/store";

export const AuthModalSelector = (state: RootState) => {
    const AuthModalSlice = state.AuthModalSlice || {}
    return AuthModalSlice.isOpen
//	const appSlice = state.appSlice || {};
	//return appSlice.params || { query: '', offset: 1, limit: 10, storedValue: '' };
};