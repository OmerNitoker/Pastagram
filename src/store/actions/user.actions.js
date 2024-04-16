import { Logger } from "sass";
import { userService } from "../../services/user.service.js";
import { SET_USER } from "../reducers/user.reducer.js";
import { store } from "../store.js";



export function loginUser(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials);
            dispatch({ type: SET_USER, user });
            sessionStorage.setItem('loggedinUser', JSON.stringify(user));  // Stocker l'utilisateur dans la session storage
            return user;
        } catch (err) {
            console.log('user actions -> Cannot login', err);
            throw err;
        }
    };
}

export function signupUser(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials);
            dispatch({ type: SET_USER, user });
            sessionStorage.setItem('loggedinUser', JSON.stringify(user));  // Stocker l'utilisateur dans la session storage
            return user;
        } catch (err) {
            console.log('user actions -> Cannot signup', err);
            throw err;
        }
    };
}



export function logoutUser() {
    return async (dispatch) => {
        try {
            await userService.logout();
            dispatch({ type: SET_USER, user: null });
        } catch (err) {
            console.error('user actions -> Cannot logout:', err);
            throw err;
        }
    };
}
       


export async function loginDemo() {
    try {
        const users = await userService.getUsers()
        if (users.length) {
            await login(users[0])
        } 
        else {
            const demoUser = userService.getDemoUser()
            console.log('demouser from logindemo 1: ', demoUser)
            await signup(demoUser)
        }
    }
    catch (err) {
        console.log ('had an error')
    }
}
    // const user = userService.getDemoUser()
    // userService.getUsers()
    // .then (users => {
    //     if (users.length) {
    //         login(users[0])
    //         .then(() =>{return}) 
    //     }
    //     signup(user)
    //     .then(() => {return})
    // })



