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
        txt: "Best trip ever",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712175532/instagram-posts/1_m7hfqi.jpg", 
        by: {
          _id: "u101",
          fullname: "Jim Carrey",
          username: "jim123",
          imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712175877/instagram-posts/jim_carrey_znnmxy.webp"
        },
        comments: [
          {
            id: "c1001",
            by: {
              _id: "u105",
              fullname: "Bob",
              imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712178735/instagram-posts/bob_uaojqj.jpg"
            },
            txt: "good one!",
            // likedBy: [ // Optional
            //   {
            //     "_id": "u105",
            //     "fullname": "Bob",
            //     "imgUrl": "http://some-img"
            //   }
            // ]
          },
          // {
          //   id: "c1002",
          //   by: {
          //     _id: "u106",
          //     fullname: "Dob",
          //     imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712178840/instagram-posts/smash-or-pass-this-random-guy-i-saw-on-the-internet-v0-ta86yyu1m5lb1_rg1yfa.webp"
          //   },
          //   txt: "not good!",
          // }
        ],
        likedBy: [
          {
            _id: "u105",
            fullname: "Bob",
            imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712178735/instagram-posts/bob_uaojqj.jpg"
          },
          {
            _id: "u106",
            fullname: "Dob",
            imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712178840/instagram-posts/smash-or-pass-this-random-guy-i-saw-on-the-internet-v0-ta86yyu1m5lb1_rg1yfa.webp"
          }
        ],
        tags: ["fun", "romantic"]
      },
      {
        _id: "s102",
        txt: "went hiking",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712175596/instagram-posts/2_qytjzt.jpg", 
        by: {
          _id: "u101",
          fullname: "Jim Carrey",
          username: "jim123",
          imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712175877/instagram-posts/jim_carrey_znnmxy.webp"
        },
        comments: [
          {
            id: "c1001",
            by: {
              _id: "u105",
              fullname: "Bob",
              imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712178735/instagram-posts/bob_uaojqj.jpg"
            },
            txt: "good one!",
            // likedBy: [ // Optional
            //   {
            //     "_id": "u105",
            //     "fullname": "Bob",
            //     "imgUrl": "http://some-img"
            //   }
            // ]
          },
          {
            id: "c1002",
            by: {
              _id: "u106",
              fullname: "Dob",
              imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712178840/instagram-posts/smash-or-pass-this-random-guy-i-saw-on-the-internet-v0-ta86yyu1m5lb1_rg1yfa.webp"
            },
            txt: "not good!",
          }
        ],
        likedBy: [
          {
            _id: "u105",
            fullname: "Bob",
            imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712178735/instagram-posts/bob_uaojqj.jpg"
          },
          {
            _id: "u106",
            fullname: "Dob",
            imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712178840/instagram-posts/smash-or-pass-this-random-guy-i-saw-on-the-internet-v0-ta86yyu1m5lb1_rg1yfa.webp"
          }
        ],
        tags: ["fun", "romantic"]
      }
]

_createPosts()

async function query() {
  var stays = await storageService.query(STORAGE_KEY)
  return stays
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
  console.log('posts:', posts);
}

function getEmptyPost() {
  return {
    // _id: utilService.makeId(),
    txt: '',
    imgUrl: '', 
    by: {
      _id: "u101",
      fullname: "Jim Carrey",
      username: "jim123",
      imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712175877/instagram-posts/jim_carrey_znnmxy.webp"
    },
    comments: [],
    likedBy: [],
    tags: []
  }
}




