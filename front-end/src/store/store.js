import { createStore, applyMiddleware } from 'redux';
 import thunk from 'redux-thunk';
 import rootReducer from '../reducers';

 const initialState = {
     smurfs: [],
     error: '',
     isFetching: false
 };

 const middleware = [thunk];

 const store = createStore(rootReducer, initialState, applyMiddleware(...middleware)); 

 export default store; 