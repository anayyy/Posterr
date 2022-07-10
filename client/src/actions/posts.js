import { FETCH_ALL, CREATE, UPDATE,DELETE } from '../constants/actionTypes';

import * as api from '../api';



//action creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }


}


export const createPost=(post)=> async (dispatch)=>{
    try {
        const {data} = await api.createPost(post);
        dispatch({type:CREATE, paylaod:data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id,post)=> async (dispatch) =>{
    try {
       const {data} = await api.updatePost(id, post);
       dispatch({type:UPDATE,paylaod:data});

    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async(dispatch)=>{
    try {
        await api.deletePost(id);
        dispatch({type:DELETE, paylaod: id});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async(dispatch)=>{
    try {
        const {data} = await api.likePost(id);
       dispatch({type:UPDATE,paylaod:data});
    } catch (error) {
        console.log(error);
    }
}