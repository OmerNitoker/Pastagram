import { Link } from "react-router-dom";
import { useState } from "react";
import { utilService } from "../services/util.service";
import { postService } from "../services/post.service";
import { useEffect } from 'react';
import { PostMenu } from "./PostMenu";


export function PostPreview({ post, currentUser, onRemovePost, onUpdatePost }) {
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(post.likedBy.length);
    const likedByIndex = post.likedBy.findIndex(user => user._id === "u101");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPostMenuOpen, setIsPostMenuOpen] = useState(false);
    const [newCommentText, setNewCommentText] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);
    const [commentTimestamp, setCommentTimestamp] = useState(Date.now());
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [commentToDelete, setCommentToDelete] = useState(null);
    const [hoveredComment, setHoveredComment] = useState(null);

    const emojis = ['😀', '😍', '👍', '❤️', '😂', '🎉', '🔥', '😊', '🙌', '😎'];

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
    };

    useEffect(() => {
        if (likedByIndex !== -1) {
            setIsLiked(true);
        }
    }, [likedByIndex]);


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const handleCommentSubmit = async () => {
        if (newCommentText.trim() === "") {
            return;
        }

        const newComment = {
            id: utilService.makeId(),
            by: {
                _id: currentUser._id,
                fullname: currentUser.fullname,
                imgUrl: currentUser.imgUrl
            },
            txt: newCommentText,
            timestamp: Date.now()
        };

        post.comments.push(newComment);
        setNewCommentText("");

        await postService.save(post);
    };


    const handleCommentChange = (e) => {
        setNewCommentText(e.target.value);
        setCommentTimestamp(Date.now());
    };

    const toggleEmojis = () => {
        setShowEmojis(!showEmojis);
    };

    const addEmojiToComment = (emoji) => {
        setNewCommentText((prevText) => prevText + emoji);
        toggleEmojis();
    };

    const getTimeAgo = (timestamp) => {
        const now = new Date();
        const commentDate = new Date(timestamp);
        const diff = now - commentDate;

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (years > 0) return `${years}y`;
        if (months > 0) return `${months}m`;
        if (days > 0) return `${days}d`;
        if (hours > 0) return `${hours}h`;
        if (minutes > 0) return `${minutes}m`;
        if (seconds > 0) return `${seconds}s`;

        return 'Just now';
    };

    const handleDeleteComment = (commentId) => {
        setCommentToDelete(commentId);
        setShowDeleteModal(true);
    };

    const confirmDeleteComment = async () => {
        if (commentToDelete) {
            const updatedPost = { ...post };
            const commentIndex = updatedPost.comments.findIndex(comment => comment.id === commentToDelete);

            if (commentIndex !== -1) {
                updatedPost.comments.splice(commentIndex, 1);
                await postService.save(updatedPost);
                setShowDeleteModal(false);
            }
        }
    };

    const cancelDeleteComment = () => {
        setShowDeleteModal(false);
        setCommentToDelete(null);
    };

    const handleCommentMouseEnter = (commentId) => {
        setHoveredComment(commentId);
    };

    const handleCommentMouseLeave = () => {
        setHoveredComment(null);
    };

    function togglePostMenu() {
        setIsPostMenuOpen(!isPostMenuOpen)
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
                    <div className="Like" onClick={handleLikeClick} style={{ color: isLiked ? 'red' : 'black' }}>
                        {!isLiked ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i>}
                    </div>
                    <i className="fa-regular fa-comment" onClick={toggleModal} ></i>
                    <i className="fa-regular fa-paper-plane share-post-btn"></i>
                    <i className="fa-regular fa-bookmark save-btn" aria-hidden="true"></i>
                </div>

                {post.likedBy.length ? <span>{post.likedBy.length} {post.likedBy.length === 1 ? 'Like' : 'Likes'}</span> : <span></span>}
                <div>
                    <Link className="clean-link fw600">{post.by.username}</Link>
                    <span className="story-txt">{post.txt}</span>
                </div>
                {post.comments.length ? <span onClick={toggleModal} >{post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'}</span> : <span></span>}
                <textarea name="add-comment" id="add-comment" placeholder="Add a comment..."></textarea>
            </section>

            {isModalOpen && (

                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                        <img className="modal-post-img" src={post.imgUrl} alt="post-img" />

                        <div className="comments-section">

                            <section className="post-modal-header flex align-center">
                                <img className="modal-user-avatar" src={post.by.imgUrl} />
                                <Link className="clean-link">{post.by.username}</Link>
                                <div className="modal-post-time">•1h</div>
                                <i className="fa-solid fa-ellipsis "></i>
                            </section>
                            <ul className="comments-list">
                                {post.comments.map(comment => (
                                    <li
                                        key={comment.id}
                                        className="comment-item"
                                        onMouseEnter={() => handleCommentMouseEnter(comment.id)}
                                        onMouseLeave={handleCommentMouseLeave}
                                    >
                                        <img src={comment.by.imgUrl} alt={comment.by.fullname} className="comment-avatar" />
                                        <div className="comment-content">
                                            <span className="comment-text">{comment.txt}</span>
                                            <div className="comment-actions">

                                                <span className="comment-time">{getTimeAgo(comment.timestamp)}</span>
                                                {hoveredComment === comment.id && (
                                                    <i className="fa-solid fa-ellipsis comment-delete-btn" onClick={() => handleDeleteComment(comment.id)}></i>
                                                )}
                                            </div>
                                        </div>
                                        <i className="fa-regular fa-heart comment-like-btn"></i>
                                    </li>
                                ))}

                            </ul>
                            {showDeleteModal && (
                                <div className="delete-modal">
                                    <button className="delete-definitivly-comments-btn" onClick={confirmDeleteComment}>Delete</button>
                                    <button className="cancel-delete-comments-btn" onClick={cancelDeleteComment}>Cancel</button>
                                </div>
                            )}
                            <div className="comment-input-container">
                                <div className="emojis">
                                    <i className="fa-regular fa-face-smile" onClick={toggleEmojis}></i>
                                    {showEmojis && (
                                        <div className="emoji-list">
                                            {emojis.map((emoji, index) => (
                                                <span key={index} onClick={() => addEmojiToComment(emoji)}>
                                                    {emoji}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    placeholder="Add a comment..."
                                    className="comment-input"
                                    value={newCommentText}
                                    onChange={handleCommentChange}
                                />
                                <button className="comment-btn" onClick={handleCommentSubmit}>Publish</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
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
