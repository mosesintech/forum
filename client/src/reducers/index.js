import { FETCH_SMURF_START } from '../actions/actions';
import initialState from '../store/store';

const reducers = (state = initialState, action) => {
    switch (action.type) {
       case FETCH_SMURF_START:
         return {
           ...state,
        };
        default:
           return state;
    }
}

export default reducers;