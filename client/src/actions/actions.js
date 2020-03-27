import axios from 'axios';
const API = "http://localhost:9009/api";

// Begin Category Actions
// Retrieve all categories
export const FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAIL = "FETCH_CATEGORIES_FAIL";
export const getCategories = () => dispatch => {
    dispatch({ type: FETCH_CATEGORIES_START });
    return axios
        .get(`${API}/categories`)
        .then(res => {
        dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: res.data });
        })
        .catch(err => {
        console.log(`Did not receive categories: ${err}`);
        dispatch({ type: FETCH_CATEGORIES_FAIL, payload: err });
        });
};

// Retrieve all forums in one category
export const FETCH_CATFORUMS_START = "FETCH_CATFORUMS_START";
export const FETCH_CATFORUMS_SUCCESS = "FETCH_CATFORUMS_SUCCESS";
export const FETCH_CATFORUMS_FAIL = "FETCH_CATFORUMS_FAIL";
export const getCatForums = (id) => dispatch => {
    dispatch({ type: FETCH_CATFORUMS_START });
    return axios
        .get(`${API}/forums/${id}`)
        .then(res => {
        dispatch({ type: FETCH_CATFORUMS_SUCCESS, payload: res.data });
        })
        .catch(err => {
        console.log(`Did not receive forums in this category: ${err}`);
        dispatch({ type: FETCH_CATFORUMS_FAIL, payload: err });
        });
};