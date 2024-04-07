import { storageService } from './async-storage.service'
// import { httpService } from './http.service'
import { utilService } from './util.service'


const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
    updateLocalUserFields,
    getDemoUser
}

window.userService = userService

const gUsers = [
    {
        fullname: 'Host',
        username: 'host',
        password: '123',
        isHost: true,
        _id: "SzgiV"
    },
    {
        fullname: 'Guest',
        username: 'guest',
        password: '123',
        isHost: false,
        _id: "dhbsb"
    }
]

// _createUsers()

function getUsers() {
    return storageService.query('user')
    // return httpService.get(`user`)
}

async function getById(userId) {
    const user = await storageService.get('user', userId)
    // const user = await httpService.get(`user/${userId}`)
    return user
}

function remove(userId) {
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update({ _id }) {
    const user = await storageService.get('user', _id)
    await storageService.put('user', user)

    // const user = await httpService.put(`user/${_id}`, {_id, score})
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    // const user = await httpService.post('auth/login', userCred)
    if (user) {
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    // userCred.score = 10000
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    const user = await storageService.post('user', userCred)
    // const user = await httpService.post('auth/signup', userCred)
    return saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // return httpService.post('auth/logout')
}

function saveLocalUser(user) {
    user = {
        _id: user._id,
        username: user.username,
        password: user.password,
        fullname: user.fullname,
        imgUrl: user.imgUrl,
        following: user.following,
        followers: user.followers,
        savedPostsIds: user.savedPostsIds
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function updateLocalUserFields(user) {
    const currUser = getLoggedinUser()
    const userToSave = { ...currUser, ...user }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(userToSave))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function _createUsers() {
    let users = utilService.loadFromStorage('user')
    if (!users || !users.length) {
        users = gUsers
        utilService.saveToStorage('user', users)
    }
}

function getDemoUser() {
    return {
        _id: "u101",
        username: "johnny_johnson",
        password: "pass123",
        fullname: "John Johnson",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712492656/1517034957463_hxarzp.jpg",
        following: [
            {
                _id: "u106",
                fullname: "Xi Xiang",
                imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712484508/aeecc22a67dac7987a80ac0724658493_csfop3.jpg"
            }
        ],
        followers: [
            {
                _id: "u105",
                fullname: "Peter Peterson",
                imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712484718/handsome-man-with-glasses_144627-18665_pykck1.avif"
            }
        ],
        savedPostsIds: []
    }
}


// ; (async () => {
//     await userService.signup({ fullname: 'Host', username: 'host', password: '123', isHost: true, _id: "SzgiV" })
//     await userService.signup({ fullname: 'Guest', username: 'guest', password: '123', isHost: false, _id: "dhbsb" })
// })()



