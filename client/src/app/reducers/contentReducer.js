import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    current: 'posts'
};

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.current = 'posts';
        },
        setProfile: state => {
            state.current = 'profile';
        },
        setCreatePost: state => {
            state.current = 'createPost';
        }
    }
});

export const { setPosts, setCreatePost, setProfile } = contentSlice.actions;
export default contentSlice.reducer;
