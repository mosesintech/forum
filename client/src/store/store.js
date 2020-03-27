import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {
    categories: [],
    forums: [],
    threads: [],
    posts: [],
    users: [],
    toMessages: [],
    fromMessages: [],
    reputation: [],
    error: '',
    isFetching: false
};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware)); 

export default store;