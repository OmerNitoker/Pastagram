import { Link } from "react-router-dom"
import { useState } from "react"
import { utilService } from "../services/util.service"
import { postService } from "../services/post.service"
import { useEffect } from 'react'
import { PostMenu } from "./PostMenu"
import { PostDetails } from "./PostDetails"


export function PostPreview({ post, currentUser, onRemovePost, onUpdatePost }) {
    const [likesCount, setLikesCount] = useState(post.likedBy.length);
    const likedByIndex = post.likedBy.findIndex(user => user._id === "u101");
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isPostMenuOpen, setIsPostMenuOpen] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        if (likedByIndex !== -1) {
            setIsLiked(true);
        }
    }, [likedByIndex]);


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    function togglePostMenu() {
        setIsPostMenuOpen(!isPostMenuOpen)
    }

    const handleLikeClick = () => {
        setIsLiked(!isLiked);

        const updatedPost = { ...post };

        if (!isLiked) {
            const likedUser = {
                _id: "u101",
                fullname: "John Johnson",
                imgUrl: "https://res.cloudinary.com/dmhaze3tc/image/upload/v1712178735/instagram-posts/bob_uaojqj.jpg",
            };

            updatedPost.likedBy.push(likedUser);
        } else {
            const index = updatedPost.likedBy.findIndex(user => user._id === "u101"); // Recherchez l'utilisateur démo
            if (index !== -1) {
                updatedPost.likedBy.splice(index, 1);
            }
        }

        postService.save(updatedPost);
    }





    return (
        <article className="post-preview flex column fs14">



            <section className="post-header flex align-center">
                <img className="user-avatar" src={post.by.imgUrl} />
                <Link className="clean-link fw600">{post.by.username}</Link>
                <div className="post-time">• 1h</div>
                <i onClick={togglePostMenu} className="fa-solid fa-ellipsis "></i>
            </section>

            <img className="post-img" src={post.imgUrl} alt="post-img" />

            <section className="post-footer flex column">


                <div className="btn-container flex align-center">
                    <div className="like" onClick={handleLikeClick} style={{ color: isLiked ? 'red' : 'black' }}>
                        {!isLiked ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart like"></i>}
                    </div>
                    <i className="fa-regular fa-comment" onClick={toggleModal} ></i>
                    <i className="fa-regular fa-paper-plane share-post-btn"></i>
                    <i className="fa-regular fa-bookmark save-btn" ></i>
                </div>

                {post.likedBy.length ? <span>{post.likedBy.length} {post.likedBy.length === 1 ? 'Like' : 'Likes'}</span> : <span></span>}
                <div>
                    <Link className="clean-link fw600">{post.by.username}</Link>
                    <span className="story-txt">{post.txt}</span>
                </div>
                {post.comments.length ? <span className="clr-gray cp" onClick={toggleModal} >{post.comments.length > 1 ? `View all ${post.comments.length} comments` : `View 1 comment`}</span> : <span></span>}
                <textarea name="add-comment" id="add-comment" placeholder="Add a comment..."></textarea>
            </section>

            {isModalOpen &&
                <PostDetails
                    post={post}
                    toggleModal={toggleModal}
                    currentUser={currentUser}
                    handleLikeClick={handleLikeClick}
                    isLiked={isLiked}
                />}
            {isPostMenuOpen &&
                <PostMenu
                    post={post}
                    setIsPostMenuOpen={setIsPostMenuOpen}
                    onRemovePost={onRemovePost}
                    onUpdatePost={onUpdatePost}
                />}
        </article>
    )
}
