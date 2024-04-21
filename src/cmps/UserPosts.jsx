import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { postService } from "../services/post.service";

export function UserPosts({ user, posts }) {

    const [userPosts, setUserPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [gridRows, setGridRows] = useState(10); // Initial value pour le nombre de lignes
    const [isHovered, setIsHovered] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if (user && user.posts) {
            const postsToShow = user.posts.map(postId => {
                const post = posts.find(p => p._id === postId);
                if (!post) {
                    console.log(`Post with ID ${postId} not found`);
                    return null; // Ignore IDs of posts not found
                }
                return post
            }).filter(Boolean);

            setUserPosts(postsToShow)

            // Calculer le nombre de lignes nécessaires
            const rowCount = Math.ceil(user.posts.length / 3);
            setGridRows(rowCount);

            // Mettre à jour la variable CSS
            document.documentElement.style.setProperty('--grid-rows', rowCount);
        } else {
            setUserPosts([]); // Réinitialiser les posts si aucun post n'est disponible
        }
        setIsLoading(false)
    }, [user]);

    if (!user) {
        return <div>Loading...</div>;
    }

    if (isLoading) {
        // Créer des cases de chargement en fonction du nombre attendu de posts
        const loaderItems = Array.from({ length: 3 * gridRows }, (_, i) => (
            <div key={i} className="post-loader"></div>
        ));

        return <div className='user-post-loader'>{loaderItems}</div>;
    }

    return (
        <div className="gallery-container">
            {userPosts.length > 0 ? (
                userPosts.map(post => (
                    <Link key={post._id} to={`/post/${post._id}`} state={{ previousLocation: location }}>
                        <div className="gallery-item" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <img src={post.imgUrl} alt="post" className="gallery-image" />
                            {isHovered && (
                                <div className="img-overlay">
                                    <div className="likes-on-hover">
                                        <span><i className="fa-solid fa-heart" aria-hidden="true"></i></span>
                                        <span>{post.likedBy.length}</span>
                                    </div>
                                    <div className="comments-on-hover">
                                        <span><i className="fa-solid fa-comment" aria-hidden="true"></i></span>
                                        <span>{post.comments.length}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Link>
                ))
            ) : (
                <div>No posts available.</div>
            )}
        </div>
    );
}
