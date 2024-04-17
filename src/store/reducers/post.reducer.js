import { postService } from "../../services/post.service.js"

export const SET_POSTS = 'SET_POSTS'
export const REMOVE_POST = 'REMOVE_POST'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const SET_CURR_POST = 'SET_CURR_POST'
export const LOAD_DEMO_DATA = 'LOAD_DEMO_DATA'


const initialState = {
    posts: [],
    currPost: null
}

export function postReducer(state = initialState, action = {}) {
    //posts
    let posts
    let currPost

    switch (action.type) {
        case SET_POSTS:
            return { ...state, posts: action.posts }

        case REMOVE_POST:
            posts = state.posts.filter(post => post._id !== action.postId)
            return { ...state, posts }

        case ADD_POST:
            posts = [...state.posts, action.post]
            return { ...state, posts }

        case UPDATE_POST:
            posts = state.posts.map(post => post._id === action.post._id ? action.post : post)
            return { ...state, posts }

        case SET_CURR_POST:
            return { ...state, currPost: action.currPost }
            // currPost = { ...state.currPost, action.currPost }
            // return { ...state, currPost }

        case LOAD_DEMO_DATA:
            posts = [...state.posts, ...demoData]
            return {...state, posts}

        default:
            return state;
    }
}