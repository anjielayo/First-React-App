import axios from "axios";
import {CREATE_POSTS} from "./types";

export const createPosts=()=>{
    return (dispatch)=>{
        return axios.get("https://jsonplaceholder.typicode.com/posts").then(({data})=>{
            dispatch(setPosts(data));
            //data="https://jsonplaceholder.typicode.com/posts"
            //dispatch(type:CREATE_POSTS,payload:data)
        });
    };
}

function setPosts(info){
    return{
        type:CREATE_POSTS,
        payload:info
    };
}//sets the payload and type of action