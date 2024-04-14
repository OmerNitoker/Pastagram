import { userService } from "../../services/user.service.js";
import { SET_USER } from "../reducers/user.reducer.js";
import { store } from "../store.js";



export function login(credentials) {
    return userService.login(credentials)
        .then(user => {
            store.dispatch({ type: SET_USER, user })
            return user
        })
        .catch(err => {
            console.log('user actions -> Cannot login', err)
            throw err
        })
}


export function signup(credentials) {
    return userService.signup(credentials)
        .then(user => {
            console.log('user from signup in action: ', user)
            store.dispatch({ type: SET_USER, user })
            return user
        })
        .catch(err => {
            console.log('user actions -> Cannot signup', err)
            throw err
        })
}


export function logout() {
    return userService.logout()
        .then(() => {
            store.dispatch({ type: SET_USER, user: null })
        })
        .catch(err => {
            console.error('user actions -> Cannot logout:', err)
            throw err
        })
}

export async function loginDemo() {
    try {
        const users = await userService.getUsers()
        if (users.length) {
            await login(users[users.length-1])
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



