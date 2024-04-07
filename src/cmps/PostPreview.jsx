import { Link } from "react-router-dom";
import { useState } from "react";

export function PostPreview({ post, loggedinUser }) {
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(post.likedBy.length);
    const likedByIndex = post.likedBy.findIndex(user => user._id === "ID_OF_CURRENT_USER");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLikeClick = () => {
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
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    function onOpenPostMenu() {
        if (loggedinUser._id !== post.by._id) return
    }

    return (
        <article className="post-preview flex column fs14">



            <section className="post-header flex align-center">
                <img className="user-avatar" src={post.by.imgUrl} />
                <Link className="clean-link fw600">{post.by.username}</Link>
                <div className="post-time">• 1h</div>
                <i onClick={onOpenPostMenu} className="fa-solid fa-ellipsis "></i>
            </section>

            <img className="post-img" src={post.imgUrl} alt="post-img" onClick={toggleModal} />

            <section className="post-footer flex column">


                <div className="btn-container flex align-center">
                    <div className="Like" onClick={handleLikeClick} style={{ color: isLiked ? 'red' : 'black' }}>
                        {!isLiked ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i>}
                    </div>
                    <i className="fa-regular fa-comment"></i>
                    <i className="fa-regular fa-paper-plane share-post-btn"></i>
                    <i className="fa-regular fa-bookmark save-btn" aria-hidden="true"></i>
                </div>

                {post.likedBy.length ? <span>{post.likedBy.length} {post.likedBy.length === 1 ? 'Like' : 'Likes'}</span> : <span></span>}
                <div>
                    <Link className="clean-link fw600">{post.by.username}</Link>
                    <span className="story-txt">{post.txt}</span>
                </div>
                {post.comments.length ? <span>{post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'}</span> : <span></span>}
                <textarea name="add-comment" id="add-comment" placeholder="Add a comment..."></textarea>
            </section>

            {isModalOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content-wrapper">
                            <img className="modal-post-img" src={post.imgUrl} alt="post-img" />
                            <div className="comments-section">
                                <section className="post-header flex align-center">
                                    <img className="user-avatar" src={post.by.imgUrl} />
                                    <Link className="clean-link">{post.by.username}</Link>
                                    <div className="post-time">•1h</div>
                                    <i className="fa-solid fa-ellipsis "></i>
                                </section>
                                <ul className="comments-list">
                                    {post.comments.map(comment => (
                                        <li key={comment.id} className="comment-item">
                                            <img src={comment.by.imgUrl} alt={comment.by.fullname} className="comment-avatar" />
                                            <span className="comment-text">{comment.txt}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="comment-input-container">
                                    <input type="text" placeholder="Add a comment..." className="comment-input" />
                                    <button className="comment-btn">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </article>
    )
}
