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
    getDemoUser(),
    
        {
        _id: "u101",
        fullname: "James Smith",
        username: "james_smith",
        password: "password123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646609/insta-project/users/James_Smith_fq1zpt.jpg",
        following: ["6D8xF", "2H9zJ",],
        followers: ["5K1pM", "4C6qN"],
        savedPostIds: [],
        posts: [],
        description: "Lover of adventure, food, and coding."
    },
    {
        _id: "u102",
        fullname: "Emily Davis",
        username: "emily_davis",
        password: "pass123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646603/insta-project/users/Emily_Davis_aumnv0.jpg",
        following: ["3A7bE", "2H9zJ", "4C6qN"],
        followers: ["5K1pM", "1F2gH"],
        savedPostIds: [],
        posts: [],
        description: "Dreamer and believer in kindness."
    },
    {
        _id: "u103",
        fullname: "Ashley Taylor",
        username: "ashley_taylor",
        password: "abc123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646602/insta-project/users/Ashley_Taylor_by00jo.jpg",
        following: ["3A7bE", "6D8xF", "4C6qN", "5K1pM"],
        followers: ["1F2gH", "7B3rD"],
        savedPostIds: [],
        posts: [],
        description: "Passionate about technology and sports."
    },
    {
        _id: "u104",
        fullname: "David Johnson",
        username: "david_johnson",
        password: "emilypass",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646604/insta-project/users/David_Johnson_vcvhgl.jpg",
        following: ["janesmith", "michaelj", "4C6qN"],
        followers: ["1F2gH", "7B3rD"],
        savedPostIds: [],
        posts: [],
        description: "Explorer and coffee enthusiast."
    },
    {
        _id: "u105",
        fullname: "Michael Williams",
        username: "michael_williams",
        password: "wilson123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646606/insta-project/users/Michael_Williams_p5umiy.jpg",
        following: ["3A7bE", "janesmith", "4C6qN", "1F2gH"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Creative thinker with a love for music."
    },
    {
        _id: "u106",
        fullname: "Robert Jones",
        username: "robert_jones",
        password: "sarahpass",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646607/insta-project/users/Robert_Jones_ovrwnr.jpg",
        following: ["3A7bE", "janesmith", "emilyb"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Passionate about photography and nature."
    },
    {
        _id: "u107",
        fullname: "Jessica Wilson",
        username: "jessica_wilson",
        password: "martinez1",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646612/insta-project/users/Jessica_Wilson_ghro83.jpg",
        following: ["janesmith", "michaelj", "4C6qN"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Adventurous soul with a love for food."
    },
    {
        _id: "9H4fG",
        fullname: "Jessica Anderson",
        username: "jessicaa",
        password: "jessicapw",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713194414/insta-project/users/Jessica_Anderson_mhrqf5.jpg",
        following: ["janesmith", "michaelj", "4C6qN"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Art lover and aspiring traveler."
    },
    {
        _id: "8E5dF",
        fullname: "Christopher Lee",
        username: "chrisl",
        password: "leechris",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713195999/insta-project/users/Christopher_Lee_xi3cyy.jpg",
        following: ["janesmith", "michaelj", "4C6qN"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Tech enthusiast and gaming aficionado."
    },
    {
        _id: "3T2sK",
        fullname: "Amanda Perez",
        username: "amandap",
        password: "perezamanda",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713194420/insta-project/users/Amanda_Perez_m7oriu.jpg",
        following: ["janesmith", "michaelj", "4C6qN"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Bookworm and tea lover."
    },
    {
        _id: utilService.makeId(),
        fullname: "Kelsey Murphy",
        username: "kelsey_murphy",
        password: "kelsey123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713196602/insta-project/users/Kelsey_Murphy_dbsjbb.jpg",
        following: ["janesmith", "michaelj", "4C6qN"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Wanderlust-filled soul exploring the world, one adventure at a time 🌍✈️"
    },
    {
        _id: utilService.makeId(),
        fullname: "Jeremy Stewart",
        username: "jeremy_stewart",
        password: "jer123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197388/insta-project/users/Jeremy_Stewart_pyl1o5.jpg",
        following: ["janesmith", "michaelj", "4C6qN"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Dreamer, believer, and occasional overthinker 💭✨"
    },
    {
        _id: utilService.makeId(),
        fullname: "Angela Chang",
        username: "angela_chang",
        password: "angel123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197445/insta-project/users/Angela_Chang_f2tlnd.jpg",
        following: ["janesmith", "michaelj", "4C6qN"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Lover of books, coffee, and rainy days ☕📚☔"
    },
    {
        _id: utilService.makeId(),
        fullname: "Steven Turner",
        username: "steven_turner",
        password: "stevee123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197508/insta-project/users/Steven_Turner_t8x73r.jpg",
        following: ["janesmith", "michaelj", "4C6qN"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Creating my own sunshine on cloudy days"
    },
    {
        _id: utilService.makeId(),
        fullname: "Cassandra Adams",
        username: "cassy_adams",
        password: "cassy123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197553/insta-project/users/Cassandra_Adams_fhwlzt.jpg",
        following: ["janesmith", "michaelj", "4C6qN"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Just a girl with a passion for fashion and a love for life"
    },
    {
        _id: utilService.makeId(),
        fullname: "Anthony Carter",
        username: "anthony carter",
        password: "anton123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197616/insta-project/users/Anthony_Carter_cx2ond.jpg",
        following: ["janesmith", "michaelj", "4C6qN"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Adventure seeker | Coffee enthusiast | Dog lover"
    },
    {
        _id: utilService.makeId(),
        fullname: "Heather Li",
        username: "heather_li",
        password: "heather123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197654/insta-project/users/Heather_Li_czmmgp.jpg",
        following: ["janesmith", "michaelj", "4C6qN"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Forever wandering, forever wondering 🌌🚀"
    },
    {
        _id: utilService.makeId(),
        fullname: "Kevin Nelson",
        username: "kevin_nelson",
        password: "kev123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197696/insta-project/users/Kevin_Nelson_zpkgp1.jpg",
        following: ["janesmith", "michaelj", "4C6qN"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Making memories around the world, one passport stamp at a time"
    },
    {
        _id: utilService.makeId(),
        fullname: "Vanessa Patel",
        username: "vanessa_patel",
        password: "vanessa123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197752/insta-project/users/Vanessa_Patel_hpqnwi.jpg",
        following: ["janesmith", "michaelj", "4C6qN"],
        followers: ["7B3rD", "5K1pM"],
        savedPostIds: [],
        posts: [],
        description: "Slightly obsessed with sunsets and good vibes ✌️✌️"
    },
];



_createUsers()

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

async function update(updatedUser) {
    const userFromStorage = await getById(updatedUser._id);

    if (userFromStorage) {
        // Créez une copie de l'utilisateur depuis le stockage
        const updatedUserInStorage = { ...userFromStorage };

        // Mettez à jour la copie de l'utilisateur avec les données mises à jour
        updatedUserInStorage.savedPostsIds = updatedUser.savedPostsIds;

        // Mettez à jour l'utilisateur dans le stockage avec la copie mise à jour
        await storageService.put('user', updatedUserInStorage);
        saveLocalUser(updatedUser)

        return updatedUserInStorage;
    } else {
        throw new Error('User not found');
    }
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

function _createUsers() {
    const usersWithIds = gUsers.map(user => ({
        ...user,
        _id: utilService.makeId()
    }));

    utilService.saveToStorage('user', usersWithIds);
    saveUsersToStorage(usersWithIds);
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
        posts: ["s101", "s102", "s105"]
    }
}