/* eslint-disable import/no-anonymous-default-export */
import { CREATE_POSTS } from "../actions/types.jsx";
export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_POSTS:
            return { data: action.payload };
        default:
            return state;
    } //if the action type is CREATE_POSTS return the data as the action payload else return the state
}