import { storageService } from "./async-storage.service"
// import { userService } from "./user.service"
import { utilService } from "./util.service"

const STORAGE_KEY = 'post'

const gPosts = [
    {
        _id: "s101",
        txt: "Best trip ever",
        imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712175532/instagram-posts/1_m7hfqi.jpg", 
        by: {
          _id: "u101",
          fullname: "Jim Carrey",
          imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712175877/instagram-posts/jim_carrey_znnmxy.webp"
        },
        comments: [
          {
            id: "c1001",
            by: {
              _id: "u105",
              fullname: "Bob",
              imgUrl: "http://some-img"
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
              imgUrl: "http://some-img"
            },
            txt: "not good!",
          }
        ],
        likedBy: [
          {
            _id: "u105",
            fullname: "Bob",
            imgUrl: "http://some-img"
          },
          {
            _id: "u106",
            fullname: "Dob",
            imgUrl: "http://some-img"
          }
        ],
        tags: ["fun", "romantic"]
      }
]




