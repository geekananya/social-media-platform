import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tag: ''
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setTag: (state, action) => {
            state.tag = action.payload.searchText;
        },
        // setProfile: state => {
        //     state.current = 'profile';
        // },
        // setCreatePost: state => {
        //     state.current = 'createPost';
        // }
    }
});

export const { setTag } = searchSlice.actions;
export default searchSlice.reducer;
