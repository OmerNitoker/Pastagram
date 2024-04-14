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
        _id: utilService.makeId,
        username: "james_smith",
        password: "password123",
        fullname: "James Smith",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646609/insta-project/users/James_Smith_fq1zpt.jpg",
        following: [],
        followers: [],
        savedPostsIds: []
    },
    {
        _id: utilService.makeId,
        username: "emily_davis",
        password: "password123",
        fullname: "Emily Davis",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646603/insta-project/users/Emily_Davis_aumnv0.jpg",
        following: [],
        followers: [],
        savedPostsIds: []
    },
    {
        _id: utilService.makeId,
        username: "ashley_taylor",
        password: "password123",
        fullname: "Ashley Taylor",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646602/insta-project/users/Ashley_Taylor_by00jo.jpg",
        following: [],
        followers: [],
        savedPostsIds: []
    },
    {
        _id: utilService.makeId,
        username: "david_johnson",
        password: "password123",
        fullname: "David Johnson",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646604/insta-project/users/David_Johnson_vcvhgl.jpg",
        following: [],
        followers: [],
        savedPostsIds: []
    },
    {
        _id: utilService.makeId,
        username: "michael_williams",
        password: "password123",
        fullname: "Michael Williams",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646606/insta-project/users/Michael_Williams_p5umiy.jpg",
        following: [],
        followers: [],
        savedPostsIds: []
    },
    {
        _id: utilService.makeId,
        username: "robert_jones",
        password: "password123",
        fullname: "Robert Jones",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646607/insta-project/users/Robert_Jones_ovrwnr.jpg",
        following: [],
        followers: [],
        savedPostsIds: []
    },
    {
        _id: utilService.makeId,
        username: "jessica_wilson",
        password: "password123",
        fullname: "Jessica Wilson",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646612/insta-project/users/Jessica_Wilson_ghro83.jpg",
        following: [],
        followers: [],
        savedPostsIds: []
    },
    {
        _id: utilService.makeId,
        username: "johnny_johnson",
        password: "password123",
        fullname: "John Johnson",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712492656/1517034957463_hxarzp.jpg",
        following: [],
        followers: [],
        savedPostsIds: []
    }
];



// _createUsers()

function getUsers() {
    const usersFromStorage = storageService.query('user');
    
    // Vérifiez si des utilisateurs ont été trouvés dans le storageService
    if (usersFromStorage && usersFromStorage.length > 0) {
        return usersFromStorage;
    } else {
        // Retournez les utilisateurs pré-définis gUsers
        return gUsers;
    }
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
        savedPostsIds: user.savedPostsIds,
        posts: user.posts
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
//_createUsers()
function _createUsers() {
    const usersWithIds = gUsers.map(user => ({
        ...user,
        _id: utilService.makeId() // appel de la fonction makeId pour générer un ID unique
    }));
    
    utilService.saveToStorage('user', usersWithIds);
    saveUsersToStorage(usersWithIds);  // Ajoutez cette ligne
}


function saveUsersToStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
}


function getDemoUser() {
    return {
        username: "johnny_johnson",
        password: "password123",
        fullname: "John Johnson",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712492656/1517034957463_hxarzp.jpg",
        following: [
            {
                _id: "u101",
                fullname: "James Smith",
                username: "james_smith",
                imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646609/insta-project/users/James_Smith_fq1zpt.jpg"
            },
            {
                _id: "u102",
                fullname: "Emily Davis",
                username: "emily_davis",
                imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646603/insta-project/users/Emily_Davis_aumnv0.jpg"
            },
            {
                _id: "u103",
                fullname: "Ashley Taylor",
                username: "ashley_taylor",
                imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646602/insta-project/users/Ashley_Taylor_by00jo.jpg"
            }
        ],
        followers: [
            {
                _id: "u104",
                fullname: "David Johnson",
                username: "david_johnson",
                imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646604/insta-project/users/David_Johnson_vcvhgl.jpg"
            },
            {
                _id: "u105",
                fullname: "Michael Williams",
                username: "michael_williams",
                imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646606/insta-project/users/Michael_Williams_p5umiy.jpg"
            }
        ],
        savedPostsIds: [],
        posts: [{
            _id: "s108",
            txt: "Best trip ever",
            imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712650803/insta-project/post%20imgs/9_hd69bh.jpg",
            by: {
                _id: "u108",
                fullname: "John Johnson",
                username: "johnny_johnson",
                imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712492656/1517034957463_hxarzp.jpg"
            },
            comments: [
                {
                    id: "c1005",
                    by: {
                        _id: "u104",
                        fullname: "David Johnson",
                        username: "david_johnson",
                        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646604/insta-project/users/David_Johnson_vcvhgl.jpg"
                    },
                    txt: "have fun johnny! it looks amazing",
                },
            ],
            likedBy: [
                {
                    _id: "u104",
                    fullname: "David Johnson",
                    username: "david_johnson",
                    imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646604/insta-project/users/David_Johnson_vcvhgl.jpg"
                },
                {
                    _id: "u105",
                    fullname: "Michael Williams",
                    username: "michael_williams",
                    imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646606/insta-project/users/Michael_Williams_p5umiy.jpg"
                }
            ],
            tags: []
        },
        {
            _id: "s102",
            txt: "In the tranquil embrace of nature's symphony, every whisper of the wind and dance of the leaves reminds us of the beauty that surrounds us, offering solace to weary souls and inspiration to wandering hearts.",
            imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712645930/insta-project/post%20imgs/2_mjgro3.jpg",
            by: {
                _id: "u102",
                fullname: "Emily Davis",
                username: "emily_davis",
                imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646603/insta-project/users/Emily_Davis_aumnv0.jpg"
            },
            comments: [
                {
                    id: "c1002",
                    by: {
                        _id: "u107",
                        fullname: "Jessica Wilson",
                        username: "jessica_wilson",
                        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646612/insta-project/users/Jessica_Wilson_ghro83.jpg"
                    },
                    txt: "WOW!!",
                },
                {
                    id: "c1003",
                    by: {
                        _id: "u106",
                        fullname: "Robert Jones",
                        username: "robert_jones",
                        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646607/insta-project/users/Robert_Jones_ovrwnr.jpg"
                    },
                    txt: "Emily, its breathtaking!",
                },
                {
                    id: "c1004",
                    by: {
                        _id: "u104",
                        fullname: "David Johnson",
                        username: "david_johnson",
                        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646604/insta-project/users/David_Johnson_vcvhgl.jpg"
                    },
                    txt: "Have fun emily, looks great",
                }
            ],
            likedBy: [
                {
                    _id: "u104",
                    fullname: "David Johnson",
                    username: "david_johnson",
                    imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646604/insta-project/users/David_Johnson_vcvhgl.jpg"
                },
                {
                    _id: "u106",
                    fullname: "Robert Jones",
                    username: "robert_jones",
                    imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646607/insta-project/users/Robert_Jones_ovrwnr.jpg"
                }
            ],
            tags: []
        },
        {
            _id: "s105",
            txt: "Getting ready for my daily swim 🐳🐠",
            imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712645916/insta-project/post%20imgs/7_bm2tff.jpg",
            by: {
                _id: "u105",
                fullname: "Michael Williams",
                username: "michael_williams",
                imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646606/insta-project/users/Michael_Williams_p5umiy.jpg"
            },
            comments: [],
            likedBy: [],
            tags: []
        },
        ]
    }
}