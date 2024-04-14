import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { postService } from "../services/post.service";
import { userService } from "../services/user.service"; // Assurez-vous d'importer userService si vous l'utilisez
import { PostMenu } from "./PostMenu";

export function PostPreview({ post, currentUser, onRemovePost, onUpdatePost }) {
    // const [likesCount, setLikesCount] = useState(post.likedBy.length);
    const likedByIndex = post.likedBy.findIndex(user => user._id === currentUser._id);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isPostMenuOpen, setIsPostMenuOpen] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [isSaved, setIsSaved] = useState(currentUser.savedPostsIds.includes(post._id));

    const location = useLocation();

    useEffect(() => {
        if (likedByIndex !== -1 && likedByIndex !== null) {
            setIsLiked(true);
        }
    }, [likedByIndex]);

    function togglePostMenu() {
        setIsPostMenuOpen(!isPostMenuOpen);
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
            const index = updatedPost.likedBy.findIndex(user => user._id === "u101");
            if (index !== -1) {
                updatedPost.likedBy.splice(index, 1);
            }
        }

        postService.save(updatedPost);
    }

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
                    alert('Post removed from saved posts.');
                })
                .catch(error => {
                    alert('Error removing post.');
                });
        }
    };

    return (
        // ... (le reste de votre JSX reste inchangé)

        <div className="btn-container flex align-center">
            <div className="like" onClick={handleLikeClick} style={{ color: isLiked ? 'red' : 'black' }}>
                {!isLiked ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart like"></i>}
            </div>
            <Link className="clean-link" to={`/post/${post._id}`} state={{ previousLocation: location }}>
                <i className="fa-regular fa-comment"></i>
            </Link>
            <i className="fa-regular fa-paper-plane share-post-btn"></i>
            <i className={`fa-regular fa-bookmark${isSaved ? ' saved' : ''}`} onClick={handleSaveClick}></i> {/* Utilisation de l'état isSaved pour conditionner l'affichage de l'icône "Save" ou "Saved" */}
        </div>

        // ... (le reste de votre JSX reste inchangé)
    );
}
