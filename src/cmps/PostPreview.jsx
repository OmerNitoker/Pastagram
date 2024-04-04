import { Link } from "react-router-dom";
import { useState } from "react";

export function PostPreview({ post }) {

    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(post.likedBy.length);
    const likedByIndex = post.likedBy.findIndex(user => user._id === "ID_OF_CURRENT_USER");

    const handleLikeClick = () => {
        console.log("Before Like Click - isLiked:", isLiked, "likesCount:", likesCount);
        setIsLiked(!isLiked);
        if (!isLiked) {
            if (likedByIndex === -1) {
                post.likedBy.push({
                    _id: "ID_OF_CURRENT_USER",
                    fullname: "Nale of the user",
                    imgUrl: "URL_IMG_USER"
                });
            }
        } else {
            if (likedByIndex !== -1) {
                post.likedBy.splice(likedByIndex, 1);
            }
        }
        console.log("After Like Click - isLiked:", !isLiked, "likesCount:", likesCount);
    };

    return (
        <article className="post-preview flex column">

            <section className="post-header flex align-center">

                <img className="user-avatar" src={post.by.imgUrl} />
                <Link className="clean-link">{post.by.username}</Link>
                <div className="post-time">•1h</div>
                <i className="fa-solid fa-ellipsis "></i>
            </section>

            <img className="post-img" src={post.imgUrl} alt="post-img" />

            <section className="post-footer flex column">

                <div className="btn-container flex">
                    <div className="Like" onClick={handleLikeClick} style={{ color: isLiked ? 'red' : 'black' }}>
                     { !isLiked ?  <i className="fa-regular fa-heart"></i>:<i className="fa-solid fa-heart"></i>}
                    </div>
                    <i className="fa-regular fa-comment"></i>
                    <i className="fa-regular fa-paper-plane share-btn"></i>
                    <i className="fa-regular fa-bookmark save-btn" aria-hidden="true"></i>
                </div>

                {post.likedBy.length && <span>{post.likedBy.length} {post.likedBy.length === 1 ? 'Like' : 'Likes'}</span>}
                <div>
                    <Link className="clean-link">{post.by.username}</Link>
                    <span className="story-text">{post.txt}</span>
                </div>
                {post.comments.length && <span>{post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'}</span>}
            </section>

        </article>
    )
}