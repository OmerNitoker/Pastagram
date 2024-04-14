import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function UserPosts({ user }) {
    console.log("currentUser", user);

    const [userPosts, setUserPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const location = useLocation();

    useEffect(() => {
        if (user && user.posts) {
            setUserPosts(user.posts);
            setIsLoading(false);
        } else {
            setUserPosts([]); // Réinitialiser les posts si aucun post n'est disponible
            setIsLoading(false);
        }
    }, [user]);

    if (!user) {
        return <div>Loading...</div>;
    }

    if (isLoading) {
        // Créer des cases de chargement en fonction du nombre attendu de posts
        const loaderItems = Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="post-loader"></div>
        ));

        return <div className='user-post-loader'>{loaderItems}</div>;
    }

    return (
        <div className="gallery-container">
            {userPosts.length > 0 ? (
                userPosts.map(post => (
                    <Link key={post._id} to={`/post/${post._id}`} state={{ previousLocation: location }}>
                        <div className="gallery-item">
                            <img src={post.imgUrl} alt="post" className="gallery-image" />
                        </div>
                    </Link>
                ))
            ) : (
                <div>No posts available.</div>
            )}
        </div>
    );
}
