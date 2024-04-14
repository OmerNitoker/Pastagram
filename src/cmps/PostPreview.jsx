

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { postService } from "../services/post.service";
import { userService } from "../services/user.service"; // Assurez-vous d'importer userService si vous l'utilisez
import { PostMenu } from "./PostMenu";

export function PostPreview({ post, currentUser, onRemovePost, onUpdatePost }) {
    // const [likesCount, setLikesCount] = useState(post.likedBy.length);
    const likedByIdx = post.likedBy.findIndex(user => user._id === currentUser._id);
    // const [isModalOpen, setIsModalOpen] = useState(false)
    const [isPostMenuOpen, setIsPostMenuOpen] = useState(false)
    const [isLikePost, setIsLikePost] = useState(false)
    const [isSaved, setIsSaved] = useState(currentUser.savedPostsIds.includes(post._id));

    const location = useLocation();

    useEffect(() => {
        if (likedByIdx !== -1) {
            setIsLikePost(true);
        }
        else {
            setIsLikePost(false)
        }
    }, [likedByIdx]);

    function togglePostMenu() {
        setIsPostMenuOpen(!isPostMenuOpen);
    }

    const handleLikeClick = async () => {
        const updatedPost = { ...post };
        
        if (!isLikePost) {
            const likedUser = {
                _id: currentUser._id,
                fullname: currentUser.fullname,
                imgUrl: currentUser.imgUrl
            };
            
            updatedPost.likedBy.push(likedUser);
        } else {
            const index = updatedPost.likedBy.findIndex(user => user._id === currentUser._id); // Recherchez l'utilisateur démo
            if (index !== -1) {
                updatedPost.likedBy.splice(index, 1);
            }
        }
        
        try {
            await postService.save(updatedPost);
        }
        catch (err) {
            console.log('could not save updated post')
            throw err
        }
        finally {
            setIsLikePost(!isLikePost)
        }
    }

    // postService.save(updatedPost);
    // setIsLiked(!isLiked);

    const handleSaveClick = () => {
        const updatedUser = { ...currentUser };
        const postIndex = updatedUser.savedPostsIds.indexOf(post._id);

        if (postIndex === -1) {
            updatedUser.savedPostsIds.push(post._id);
            setIsSaved(true); // Met à jour l'état pour indiquer que le post est sauvegardé
            userService.update(updatedUser)
                .then(updatedUser => {
                    alert('Post saved successfully!');
                })
                .catch(error => {
                    alert('Error saving post.');
                });
        } else {
            updatedUser.savedPostsIds.splice(postIndex, 1);
            setIsSaved(false); // Met à jour l'état pour indiquer que le post n'est plus sauvegardé
            userService.update(updatedUser)
                .then(updatedUser => {
                    alert('Post removed from saved posts!');
                })
                .catch(error => {
                    alert('Error removing post.');
                });
        }
    };

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
                    <div className="like" onClick={handleLikeClick} style={{ color: isLikePost ? 'red' : 'black' }}>
                        {!isLikePost ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart like"></i>}
                    </div>
                    <Link className="clean-link" to={`/post/${post._id}`} state={{ previousLocation: location }}>
                        <i className="fa-regular fa-comment"></i>
                    </Link>
                    <i className="fa-regular fa-paper-plane share-post-btn"></i>
                    <i className={`fa-regular fa-bookmark${isSaved ? ' saved' : ''}`} onClick={handleSaveClick}></i> {/* Utilisation de l'état isSaved pour conditionner l'affichage de l'icône "Save" ou "Saved" */}
                </div>

                {post.likedBy.length ? <span>{post.likedBy.length} {post.likedBy.length === 1 ? 'Like' : 'Likes'}</span> : <span></span>}
                <div>
                    <Link className="clean-link fw600">{post.by.username}</Link>
                    <span className="story-txt">{post.txt}</span>
                </div>
                <Link
                    className="clean-link"
                    to={`/post/${post._id}`}
                    state={{ previousLocation: location }}>
                    {post.comments.length ? <span className="clr-gray cp">{post.comments.length > 1 ? `View all ${post.comments.length} comments` : `View 1 comment`}</span> : <span></span>}
                </Link>
                <textarea name="add-comment" id="add-comment" placeholder="Add a comment..."></textarea>
            </section>

            {/* {isModalOpen &&
                <PostDetails
                    handleLikeClick={handleLikeClick}
                    isLiked={isLiked}
                />} */}
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
