import { 
   FETCH_CATEGORIES_START,
   FETCH_CATEGORIES_SUCCESS,
   FETCH_CATEGORIES_FAIL,
   FETCH_CATFORUMS_START,
   FETCH_CATFORUMS_SUCCESS,
   FETCH_CATFORUMS_FAIL } 
   from '../actions/actions';
import initialState from '../store/store';

const reducers = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_CATEGORIES_START:
         return {
            ...state,
            isFetching: true,
            error: null
         };
      case FETCH_CATEGORIES_SUCCESS:
         return {
            ...state,
            isFetching: false,
            error: null,
            categories: action.payload
         };
      case FETCH_CATEGORIES_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         };
      case FETCH_CATFORUMS_START:
         return {
            ...state,
            isFetching: true,
            error: null
         };
      case FETCH_CATFORUMS_SUCCESS:
         return {
            ...state,
            isFetching: false,
            error: null,
            catChildren: action.payload
         };
      case FETCH_CATFORUMS_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         };
      default:
         return state;
   }
}

export default reducers;