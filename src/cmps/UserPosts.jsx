import { userService } from '../services/user.service';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis 'react-router-dom'

export function UserPosts() {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        loadUserPosts();
    }, []);

    async function loadUserPosts() {
        const loggedInUser = userService.getDemoUser();
        if (loggedInUser && loggedInUser.posts) {
            setUserPosts(loggedInUser.posts);
        }
    }

    return (
        <div className="gallery-container"> {/* Ajoutez une classe pour la galerie */}
            {userPosts.length > 0 ? (
                userPosts.map(post => (
                    <Link key={post._id} to={`/post/${post._id}`}> {/* Utilisez Link pour le routage */}
                        <div className="gallery-item">
                            <img src={post.imgUrl} alt="post" className="gallery-image" />
                        </div>
                    </Link>
                ))
            ) : (
                <p>loading...</p>
            )}
        
        
        </div>
    );
    
}
