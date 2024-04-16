import { postService } from "../../services/post.service.js";
import { ADD_POST, REMOVE_POST, SET_POSTS, UPDATE_POST, SET_CURR_POST } from "../reducers/post.reducer.js";
import { store } from "../store.js";

export async function loadPosts() {
    try {
        const posts = await postService.query()
        store.dispatch({
            type: SET_POSTS,
            posts
        })
    } catch (err) {
        console.log('Cannot load posts', err)
        throw err
    }

}

export async function removePost(postId) {

    try {
        await postService.remove(postId)
        store.dispatch({
            type: REMOVE_POST,
            postId
        })
    } catch (err) {
        console.log('Cannot remove post', err)
        throw err
    }
}


export async function addPost(post) {
    try {
        const savedPost = await postService.save(post)
        console.log('savedpost:', savedPost)
        store.dispatch({
            type: ADD_POST,
            savedPost
        })
        return savedPost
    } catch (err) {
        console.log('Cannot add post', err)
        throw err
    }
}

export async function updatePost(post) {
    try {
        const savedPost = await postService.save(post)
        store.dispatch({
            type: UPDATE_POST,
            savedPost
        })
        return savedPost
    } catch (err) {
        console.log('Cannot save post', err)
        throw err
    }
}

export async function setCurrPost(postId = null) {
    var currPost
    try {
        if (postId === null) {
            currPost = null
        }
        else {
            const posts = await postService.query()
            currPost = posts.find(post => post._id === postId)
        }
        store.dispatch({ type: SET_CURR_POST, currPost: currPost })
        return currPost
    } catch (err) {
        console.log('Cannot set post', err)
        throw err
    }

}


