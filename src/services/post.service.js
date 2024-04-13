import { storageService } from "./async-storage.service"
// import { userService } from "./user.service"
import { utilService } from "./util.service"

const STORAGE_KEY = 'post'

export const postService = {
  query,
  getById,
  remove,
  save,
  getEmptyPost
}

const gPosts = [
  {
    _id: "s101",
    txt: "The best way to cross a bridge is by running 🤣",
    imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712645917/insta-project/post%20imgs/4_bfnff0.jpg",
    by: {
      _id: "u101",
      fullname: "James Smith",
      username: "james_smith",
      imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646609/insta-project/users/James_Smith_fq1zpt.jpg"
    },
    comments: [
      // {
      //   _id: "c1001",
      //   by: {
      //     _id: "u101",
      //     fullname: "James Smith",
      //     username: "james_smith",
      //     imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646609/insta-project/users/James_Smith_fq1zpt.jpg"
      //   },
      //   txt: "The best way to cross a bridge is by running 🤣"
      // },
      {
        _id: "c1001",
        by: {
          _id: "u105",
          fullname: "Michael Williams",
          username: "michael_williams",
          imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646606/insta-project/users/Michael_Williams_p5umiy.jpg"
        },
        txt: "Be carful bro!!",
      },
    ],
    likedBy: [
      {
        _id: "u105",
        fullname: "Michael Williams",
        username: "michael_williams",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646606/insta-project/users/Michael_Williams_p5umiy.jpg"
      },
      {
        _id: "u102",
        fullname: "Emily Davis",
        username: "emily_davis",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646603/insta-project/users/Emily_Davis_aumnv0.jpg"
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
      // {
      //   _id: "c1003",
      //   by: {
      //     _id: "u102",
      //     fullname: "Emily Davis",
      //     username: "emily_davis",
      //     imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646603/insta-project/users/Emily_Davis_aumnv0.jpg"
      //   },
      //   txt: "In the tranquil embrace of nature's symphony, every whisper of the wind and dance of the leaves reminds us of the beauty that surrounds us, offering solace to weary souls and inspiration to wandering hearts."

      // },
      {
        _id: "c1002",
        by: {
          _id: "u107",
          fullname: "Jessica Wilson",
          username: "jessica_wilson",
          imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646612/insta-project/users/Jessica_Wilson_ghro83.jpg"
        },
        txt: "WOW!!",
      },
      {
        _id: "c1003",
        by: {
          _id: "u106",
          fullname: "Robert Jones",
          username: "robert_jones",
          imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646607/insta-project/users/Robert_Jones_ovrwnr.jpg"
        },
        txt: "Emily, its breathtaking!",
      },
      {
        _id: "c1004",
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
    _id: "s103",
    txt: "Manarola Cliff in Italy offers breathtaking views of the Ligurian Sea, attracting visitors with its rugged beauty and charm.",
    imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712645921/insta-project/post%20imgs/6_fneeqm.jpg",
    by: {
      _id: "u103",
      fullname: "Ashley Taylor",
      username: "ashley_taylor",
      imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646602/insta-project/users/Ashley_Taylor_by00jo.jpg"
    },
    comments: [
      // {
      //   _id: "c1007",
      //   by: {
      //     _id: "u103",
      //     fullname: "Ashley Taylor",
      //     username: "ashley_taylor",
      //     imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646602/insta-project/users/Ashley_Taylor_by00jo.jpg"
      //   },
      //   txt: "Manarola Cliff in Italy offers breathtaking views of the Ligurian Sea, attracting visitors with its rugged beauty and charm.",
      // }
    ],
    likedBy: [
      {
        _id: "u106",
        fullname: "Robert Jones",
        username: "robert_jones",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646607/insta-project/users/Robert_Jones_ovrwnr.jpg"
      },
    ],
    tags: []
  },
  {
    _id: "s104",
    txt: "Amazing morning in the nature..",
    imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712645922/insta-project/post%20imgs/3_uofiqr.jpg",
    by: {
      _id: "u104",
      fullname: "David Johnson",
      username: "david_johnson",
      imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646604/insta-project/users/David_Johnson_vcvhgl.jpg"
    },
    comments: [
      // {
      //   _id: "c1008",
      //   by: {
      //     _id: "u104",
      //     fullname: "David Johnson",
      //     username: "david_johnson",
      //     imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646604/insta-project/users/David_Johnson_vcvhgl.jpg"
      //   },
      //   txt: "Amazing morning in the nature.."
      // }
    ],
    likedBy: [],
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
    comments: [
      // {
      //   _id: "c1009",
      //   by: {
      //     _id: "u105",
      //     fullname: "Michael Williams",
      //     username: "michael_williams",
      //     imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646606/insta-project/users/Michael_Williams_p5umiy.jpg"
      //   },
      //   txt: "Getting ready for my daily swim 🐳🐠"
      // }
    ],
    likedBy: [],
    tags: []
  },
  {
    _id: "s106",
    txt: "Another day in the office...",
    imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712645919/insta-project/post%20imgs/5_hlzrle.jpg",
    by: {
      _id: "u106",
      fullname: "Robert Jones",
      username: "robert_jones",
      imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646607/insta-project/users/Robert_Jones_ovrwnr.jpg"
    },
    comments: [
      // {
      //   _id: "c1010",
      //   by: {
      //     _id: "u106",
      //     fullname: "Robert Jones",
      //     username: "robert_jones",
      //     imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646607/insta-project/users/Robert_Jones_ovrwnr.jpg"
      //   },
      //   txt: "Another day in the office..."
      // }
    ],
    likedBy: [],
    tags: []
  },
  {
    _id: "s107",
    txt: "On my way to work",
    imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712645925/insta-project/post%20imgs/1_ws507f.jpg",
    by: {
      _id: "u107",
      fullname: "Jessica Wilson",
      username: "jessica_wilson",
      imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646612/insta-project/users/Jessica_Wilson_ghro83.jpg"
    },
    comments: [
      // {
      //   _id: "c1011",
      //   by: {
      //     _id: "u107",
      //     fullname: "Jessica Wilson",
      //     username: "jessica_wilson",
      //     imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712646612/insta-project/users/Jessica_Wilson_ghro83.jpg"
      //   },
      //   txt: "On my way to work"
      // }
    ],
    likedBy: [],
    tags: []
  }
]

// _createPosts()

async function query() {
  var posts = await storageService.query(STORAGE_KEY)
  return posts
}

function getById(postId) {
  return storageService.get(STORAGE_KEY, postId)
}

async function remove(postId) {
  // throw new Error('Nope')
  await storageService.remove(STORAGE_KEY, postId)
}

async function save(post) {
  var savedPost;
  if (post._id) {
    savedPost = await storageService.put(STORAGE_KEY, post);
  } else {
    // post.host = userService.getLoggedinUser();
    post.comments.forEach(comment => {
      if (!comment.timestamp) {
        comment.timestamp = Date.now() - (24 * 60 * 60 * 1000); // 1 jour en millisecondes
      }
    });

    savedPost = await storageService.post(STORAGE_KEY, post);
  }
  return savedPost;
}

function _createPosts() {
  let posts = utilService.loadFromStorage(STORAGE_KEY);
  if (!posts || !posts.length) {
    posts = gPosts;

    posts.forEach(post => {
      post.comments.forEach(comment => {
        comment.timestamp = Date.now() - (24 * 60 * 60 * 1000);
      });
    });

    utilService.saveToStorage(STORAGE_KEY, posts);
  }
}

function getEmptyPost() {
  return {
    // _id: utilService.makeId(),
    txt: '',
    imgUrl: '',
    by: {
      _id: '',
      fullname: '',
      username: '',
      imgUrl: ''
    },
    comments: [],
    likedBy: [],
    tags: []
  }
}




