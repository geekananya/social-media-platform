import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    userEmail: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.userEmail = action.payload.userEmail;
        },
        logout: state => {
            state.isAuthenticated = false;
            state.userEmail = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
