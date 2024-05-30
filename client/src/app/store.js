// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './reducers/authReducer';
import screenReducer from './reducers/screenReducer';
import contentReducer from './reducers/contentReducer';
import searchReducer from './reducers/searchReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        screen: screenReducer,
        content: contentReducer,
        search: searchReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;