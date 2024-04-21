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


// const gUsers = [
//     getDemoUser(),

//     {
//         _id: "u101",
//         fullname: "James Smith",
//         username: "james_smith",
//         password: "password123",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646609/insta-project/users/James_Smith_fq1zpt.jpg",
//         following: ["6D8xF", "2H9zJ",],
//         followers: ["5K1pM", "4C6qN"],
//         savedPostIds: [],
//         posts: [],
//         description: "Lover of adventure, food, and coding."
//     },
//     {
//         _id: "u102",
//         fullname: "Emily Davis",
//         username: "emily_davis",
//         password: "pass123",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646603/insta-project/users/Emily_Davis_aumnv0.jpg",
//         following: ["3A7bE", "2H9zJ", "4C6qN"],
//         followers: ["5K1pM", "1F2gH"],
//         savedPostIds: [],
//         posts: [],
//         description: "Dreamer and believer in kindness."
//     },
//     {
//         _id: "u103",
//         fullname: "Ashley Taylor",
//         username: "ashley_taylor",
//         password: "abc123",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646602/insta-project/users/Ashley_Taylor_by00jo.jpg",
//         following: ["3A7bE", "6D8xF", "4C6qN", "5K1pM"],
//         followers: ["1F2gH", "7B3rD"],
//         savedPostIds: [],
//         posts: [],
//         description: "Passionate about technology and sports."
//     },
//     {
//         _id: "u104",
//         fullname: "David Johnson",
//         username: "david_johnson",
//         password: "emilypass",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646604/insta-project/users/David_Johnson_vcvhgl.jpg",
//         following: ["janesmith", "michaelj", "4C6qN"],
//         followers: ["1F2gH", "7B3rD"],
//         savedPostIds: [],
//         posts: [],
//         description: "Explorer and coffee enthusiast."
//     },
//     {
//         _id: "u105",
//         fullname: "Michael Williams",
//         username: "michael_williams",
//         password: "wilson123",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646606/insta-project/users/Michael_Williams_p5umiy.jpg",
//         following: ["3A7bE", "janesmith", "4C6qN", "1F2gH"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Creative thinker with a love for music."
//     },
//     {
//         _id: "u106",
//         fullname: "Robert Jones",
//         username: "robert_jones",
//         password: "sarahpass",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646607/insta-project/users/Robert_Jones_ovrwnr.jpg",
//         following: ["3A7bE", "janesmith", "emilyb"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Passionate about photography and nature."
//     },
//     {
//         _id: "u107",
//         fullname: "Jessica Wilson",
//         username: "jessica_wilson",
//         password: "martinez1",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646612/insta-project/users/Jessica_Wilson_ghro83.jpg",
//         following: ["janesmith", "michaelj", "4C6qN"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Adventurous soul with a love for food."
//     },
//     {
//         _id: "9H4fG",
//         fullname: "Jessica Anderson",
//         username: "jessicaa",
//         password: "jessicapw",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713194414/insta-project/users/Jessica_Anderson_mhrqf5.jpg",
//         following: ["janesmith", "michaelj", "4C6qN"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Art lover and aspiring traveler."
//     },
//     {
//         _id: "8E5dF",
//         fullname: "Christopher Lee",
//         username: "chrisl",
//         password: "leechris",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713195999/insta-project/users/Christopher_Lee_xi3cyy.jpg",
//         following: ["janesmith", "michaelj", "4C6qN"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Tech enthusiast and gaming aficionado."
//     },
//     {
//         _id: "3T2sK",
//         fullname: "Amanda Perez",
//         username: "amandap",
//         password: "perezamanda",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713194420/insta-project/users/Amanda_Perez_m7oriu.jpg",
//         following: ["janesmith", "michaelj", "4C6qN"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Bookworm and tea lover."
//     },
//     {
//         _id: utilService.makeId(),
//         fullname: "Kelsey Murphy",
//         username: "kelsey_murphy",
//         password: "kelsey123",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713196602/insta-project/users/Kelsey_Murphy_dbsjbb.jpg",
//         following: ["janesmith", "michaelj", "4C6qN"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Wanderlust-filled soul exploring the world, one adventure at a time 🌍✈️"
//     },
//     {
//         _id: utilService.makeId(),
//         fullname: "Jeremy Stewart",
//         username: "jeremy_stewart",
//         password: "jer123",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197388/insta-project/users/Jeremy_Stewart_pyl1o5.jpg",
//         following: ["janesmith", "michaelj", "4C6qN"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Dreamer, believer, and occasional overthinker 💭✨"
//     },
//     {
//         _id: utilService.makeId(),
//         fullname: "Angela Chang",
//         username: "angela_chang",
//         password: "angel123",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197445/insta-project/users/Angela_Chang_f2tlnd.jpg",
//         following: ["janesmith", "michaelj", "4C6qN"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Lover of books, coffee, and rainy days ☕📚☔"
//     },
//     {
//         _id: utilService.makeId(),
//         fullname: "Steven Turner",
//         username: "steven_turner",
//         password: "stevee123",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197508/insta-project/users/Steven_Turner_t8x73r.jpg",
//         following: ["janesmith", "michaelj", "4C6qN"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Creating my own sunshine on cloudy days"
//     },
//     {
//         _id: utilService.makeId(),
//         fullname: "Cassandra Adams",
//         username: "cassy_adams",
//         password: "cassy123",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197553/insta-project/users/Cassandra_Adams_fhwlzt.jpg",
//         following: ["janesmith", "michaelj", "4C6qN"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Just a girl with a passion for fashion and a love for life"
//     },
//     {
//         _id: utilService.makeId(),
//         fullname: "Anthony Carter",
//         username: "anthony carter",
//         password: "anton123",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197616/insta-project/users/Anthony_Carter_cx2ond.jpg",
//         following: ["janesmith", "michaelj", "4C6qN"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Adventure seeker | Coffee enthusiast | Dog lover"
//     },
//     {
//         _id: utilService.makeId(),
//         fullname: "Heather Li",
//         username: "heather_li",
//         password: "heather123",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197654/insta-project/users/Heather_Li_czmmgp.jpg",
//         following: ["janesmith", "michaelj", "4C6qN"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Forever wandering, forever wondering 🌌🚀"
//     },
//     {
//         _id: utilService.makeId(),
//         fullname: "Kevin Nelson",
//         username: "kevin_nelson",
//         password: "kev123",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197696/insta-project/users/Kevin_Nelson_zpkgp1.jpg",
//         following: ["janesmith", "michaelj", "4C6qN"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Making memories around the world, one passport stamp at a time"
//     },
//     {
//         _id: utilService.makeId(),
//         fullname: "Vanessa Patel",
//         username: "vanessa_patel",
//         password: "vanessa123",
//         imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197752/insta-project/users/Vanessa_Patel_hpqnwi.jpg",
//         following: ["janesmith", "michaelj", "4C6qN"],
//         followers: ["7B3rD", "5K1pM"],
//         savedPostIds: [],
//         posts: [],
//         description: "Slightly obsessed with sunsets and good vibes ✌️✌️"
//     },
// ];

const gUsers = [
    {
        _id: "u100",
        fullname: "Guy Yaakov",
        username: "guy_yaakov",
        password: "guy123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646609/insta-project/pastagram%20users/James_Smith_fq1zpt.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ""
    },
    {
        _id: "u101",
        fullname: "Mug Life Cafe",
        username: "Mug Life Cafe",
        password: "mug123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713652832/insta-project/pasagram%20posts/flavor%20fiesta%20cafe/logo-png_w3ditr.png",
        following: new Array(72).fill({ _id: utilService.makeId() }),
        followers: new Array(9413).fill({ _id: utilService.makeId() }),
        savedPostIds: [],
        posts: ["s1001","s1002","s1003","s1004","s1005","s1006","s1007","s1008","s1009","s1010","s1011","s1012","s1013","s1014","s1015","s1016","s1017","s1018","s1019","s1020", "s1117", "s1118", "s1119", "s1120", "s1121", "s1122", "s1123", "s1124", "s1125", "s1126", "s1127", "s1128", "s1129", "s1130", "s1131", "s1132", "s1133", "s1134", "s1135", "s1136", "s1233", "s1234", "s1235", "s1236", "s1237", "s1238", "s1239", "s1240", "s1241", "s1242", "s1243", "s1244", "s1245", "s1246", "s1247", "s1248", "s1249", "s1250", "s1251", "s1252", "s1253", "s1254",],
        description: "בית הקפה 'מאג לייף' מציע חוויה קולינרית ייחודית ואיכותית. אנחנו מציעים תפריט מגוון של קפה איכותי, מאפים טריים, ארוחות בוקר וסנדוויצ'ים מפנקים."
    },
    {
        _id: "u102",
        fullname: "Gusto Italiano",
        username: "Gusto Italiano",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713467634/insta-project/pasagram%20posts/Gusto%20italiano/logo-png_roxwv0.png",
        password: "Gusto",
        following: new Array(112).fill({ _id: utilService.makeId() }),
        followers: new Array(2403).fill({ _id: utilService.makeId() }),
        savedPostIds: [],
        posts: ["s1021","s1022","s1023","s1024","s1025","s1026","s1027","s1028","s1029","s1030","s1031","s1032","s1033","s1034","s1035","s1036","s1037","s1038","s1039","s1040","s1041","s1042","s1043"],
        description: "Gusto Italiano invites you on a culinary journey to Italy. Indulge in our authentic dishes bursting with flavor, crafted with passion and tradition. Experience the true taste of Italy at Gusto Italiano."
    }, 
    {
        _id: "u103",
        fullname: "Secret Garden Winery",
        username: "Secret Garden Winery",
        password: "sgw123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713501732/insta-project/pasagram%20posts/Secret%20Garden%20Winery/logo-png_bs1pa2.png",
        following: new Array(41).fill({ _id: utilService.makeId() }),
        followers: new Array(11904).fill({ _id: utilService.makeId() }),
        savedPostIds: [],
        posts: ["s1044", "s1045", "s1046", "s1047", "s1048", "s1049", "s1050", "s1051", "s1052", "s1053", "s1054", "s1055", "s1056", "s1057", "s1058", "s1059", "s1060"],
        description: "Discover the hidden treasures of Secret Garden Winery, where each sip tells a story of craftsmanship and elegance. Nestled amidst lush vineyards, our wines are a reflection of nature's bounty and timeless passion."
    },
    {
        _id: "u104",
        fullname: "Blue Fin Sushi Bar",
        username: "Blue Fin Sushi Bar",
        password: "bluefinsushi",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713508775/insta-project/pasagram%20posts/Blue%20Fin%20Sush%20Bar/logo-png_lknkwl.png",
        following: new Array(37).fill({ _id: utilService.makeId() }),
        followers: new Array(8098).fill({ _id: utilService.makeId() }),
        savedPostIds: [],
        posts: ["s1061", "s1062", "s1063", "s1064", "s1065", "s1066", "s1067", "s1068", "s1069", "s1070", "s1071", "s1072", "s1073", "s1074", "s1075", "s1076", "s1077", "s1078", "s1079", "s1080", "s1081"],
        description: ''
    },
    {
        _id: "u105",
        fullname: "Rise and Shine Bakery",
        username: "Rise and Shine Bakery",
        password: "rns123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713510852/insta-project/pasagram%20posts/Rise%20n%20Shine%20Bakery/logo-png_yjj79j.png",
        following: new Array(904).fill({ _id: utilService.makeId() }),
        followers: new Array(6490).fill({ _id: utilService.makeId() }),
        savedPostIds: [],
        posts: ["s1082", "s1083", "s1085", "s1086", "s1087", "s1088", "s1089", "s1090", "s1091", "s1092", "s1093", "s1094", "s1095", "s1096", "s1097", "s1098", "s1099", "s1100", "s1101", "s1102", "s1103"],
        description: ''
    },
    {
        _id: "u106",
        fullname: "Crazy Cake",
        username: "Crazy Cake",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713531946/insta-project/pasagram%20posts/Crazy%20Cake/user_wngv70.jpg",
        password: "cc123",
        following: new Array(311).fill({ _id: utilService.makeId() }),
        followers: new Array(10306).fill({ _id: utilService.makeId() }),
        savedPostIds: [],
        posts: ["s1104", "s1105", "s1106", "s1107", "s1108", "s1109", "s1110", "s1111", "s1112", "s1113", "s1114", "s1115", "s1116"],
        description: ''
    },
    {
        _id: "u107",
        fullname: "Noa Avrahami",
        username: "noa_avrahami",
        password: "noa123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197752/insta-project/pastagram%20users/noaAvrahami_hpqnwi.jpg",
        following: new Array(1201).fill({ _id: utilService.makeId() }),
        followers: new Array(304).fill({ _id: utilService.makeId() }),
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u108",
        fullname: "Talia Ben-David",
        username: "talia_ben_david",
        password: "talia123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713581737/insta-project/pastagram%20users/edward-cisneros-_H6wpor9mjs-unsplash_gnj7lg.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u109",
        fullname: "Ariel Levy",
        username: "ariel_levy",
        password: "ariel123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713581724/insta-project/pastagram%20users/harps-joseph-tAvpDE7fXgY-unsplash_fkxzg7.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u110",
        fullname: "Ronit Bar",
        username: "ronit_bar",
        password: "ronit123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713581716/insta-project/pastagram%20users/marivi-pazos-cvpk5Y4ZWUs-unsplash_fndijz.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u111",
        fullname: "Orly Ben-Ari",
        username: "orly_ben_ari",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713581707/insta-project/pastagram%20users/christina-wocintechchat-com-SJvDxw0azqw-unsplash_mdbgsf.jpg",
        password: "orly123",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u112",
        fullname: "Crazy Cake",
        username: "Crazy Cake",
        password: "cc123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713581700/insta-project/pastagram%20users/artem-beliaikin-j5almO1E8rU-unsplash_dmo7dn.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: ["s1104", "s1105", "s1106", "s1107", "s1108", "s1109", "s1110", "s1111", "s1112", "s1113", "s1114", "s1115", "s1116"],
        description: ''
    },
    {
        _id: "u113",
        fullname: "Leah Harel",
        username: "leah_harel",
        password: "leah123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713531946/insta-project/pasagram%20posts/Crazy%20Cake/user_wngv70.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u114",
        fullname: "Amir Carmel",
        username: "amir_carmel",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713581687/insta-project/pastagram%20users/foto-sushi-6anudmpILw4-unsplash_bf9ynl.jpg",
        password: "amir123",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u115",
        fullname: "Maya Shachar",
        username: "maya_shachar",
        password: "maya123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713581675/insta-project/pastagram%20users/rachel-mcdermott-0fN7Fxv1eWA-unsplash_mrqwad.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u116",
        fullname: "Avraham Katz",
        username: "avraham_katz",
        password: "avi123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713581669/insta-project/pastagram%20users/ashwini-chaudhary-monty-qBmvwGsxqlc-unsplash_hgjj6t.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u117",
        fullname: "Oren Goldstein",
        username: "oren_goldstein",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713581662/insta-project/pastagram%20users/brooke-cagle-Nm70URdtf3c-unsplash_gs5ljq.jpg",
        password: "oren123",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u118",
        fullname: "Matan Avraham",
        username: "matan_avraham",
        password: "mati123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197696/insta-project/pastagram%20users/Kevin_Nelson_zpkgp1.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u119",
        fullname: "Shani Ben-Shalom",
        username: "shani_ben_shalom",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197654/insta-project/pastagram%20users/Heather_Li_czmmgp.jpg",
        password: "shani123",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u120",
        fullname: "Elad Mizrahi",
        username: "elad_mizrahi",
        password: "elad123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713197616/insta-project/pastagram%20users/Anthony_Carter_cx2ond.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u121",
        fullname: "Omri Stein",
        username: "omri_stein",
        password: "omri123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713195999/insta-project/pastagram%20users/Christopher_Lee_xi3cyy.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u122",
        fullname: "Neta Yosef",
        username: "neta_yosef",
        password: "neta123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1713194420/insta-project/pastagram%20users/Amanda_Perez_m7oriu.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u123",
        fullname: "Amitai Carmel",
        username: "amitai_carmel",
        password: "amitai123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646609/insta-project/pastagram%20users/James_Smith_fq1zpt.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u124",
        fullname: "Guy Ben-David",
        username: "guy_ben_david",
        password: "guy123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646604/insta-project/pastagram%20users/David_Johnson_vcvhgl.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u125",
        fullname: "Inbar Mizrahi",
        username: "inbar_mizrahi",
        password: "inbar123",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646603/insta-project/pastagram%20users/Emily_Davis_aumnv0.jpg",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
    {
        _id: "u126",
        fullname: "Mor Ben-Ami",
        username: "mor_ben_ami",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646602/insta-project/pastagram%20users/Ashley_Taylor_by00jo.jpg",
        password: "mor123",
        following: [],
        followers: [],
        savedPostIds: [],
        posts: [],
        description: ''
    },
]



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
    // ... (le reste du code)
    
    await storageService.put('user', updatedUser);
    saveLocalUser(updatedUser);

    // Mettez à jour sessionStorage également
    // sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(updatedUserInStorage));

    return updatedUser;
}




async function login(userCred) {
    const loggedInUser = getLoggedinUser();

    // Vérifiez si un utilisateur est déjà connecté
    if (loggedInUser) {
        throw new Error('User already logged in');
    }

    const users = await storageService.query('user');
    const user = users.find(user => user.username === userCred.username && user.password === userCred.password);

    if (user) {
        saveLocalUser(user);
        return user;
    } else {
        throw new Error('Invalid credentials');
    }
}


async function signup(userCred) {
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png';
    const userToSignup = {...userCred}
    userToSignup.description = ''
    userToSignup.followers = []
    userToSignup.following = []
    userToSignup.posts = []
    userToSignup.savedPostIds = []

    const newUser = await storageService.post('user', userToSignup);
    
    if (newUser) {
        console.log('newUser:',newUser)
        saveLocalUser(newUser);
        return newUser;
    } else {
        throw new Error('Signup failed');
    }
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
        savedPostIds: user.savedPostIds,
        posts: user.posts,
        description: user.description,
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    // alert('Utilisateur sauvegardé dans le localStorage');
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
    // saveUsersToStorage(usersWithIds);
}


function saveUsersToStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
}


function getDemoUser() {
    return {
        username: "johnny_johnson",
        password: "password123",
        fullname: "John Johnson",
        description: "I'm a 📸 lover, always on the hunt for the perfect shot! Whether it's a breathtaking 🏞️ or a candid 😄, I've got my camera ready to capture the magic!",
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
        savedPostIds: [],
        posts: ["s101", "s102", "s105"]
    }
}