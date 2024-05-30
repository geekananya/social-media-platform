import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isMobile: false
};

const screenSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        setMobile: state => {
            state.isMobile = true;
        },
        setDesktop: state => {
            state.isMobile = false;
        }
    }
});

export const { setMobile, setDesktop } = screenSlice.actions;
export default screenSlice.reducer;
