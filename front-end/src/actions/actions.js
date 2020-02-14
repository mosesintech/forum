import axios from 'axios';
const API = "http://localhost:3333";

export const FETCH_SMURF_START = "FETCH_DATA_START";
export const FETCH_SMURF_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_DATA_FAIL";
export const getSmurf = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    return axios
        .get(`${API}`)
        .then(res => {
        console.log("I love smurfs", res);
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
        })
        .catch(err => {
        console.log("Kill them all!", err);
        dispatch({ type: FETCH_SMURF_FAIL, payload: err });
        });
}; 