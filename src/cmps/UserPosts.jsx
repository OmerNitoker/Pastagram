import { userService } from '../services/user.service';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function UserPosts() {
    const [userPosts, setUserPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadUserPosts();
    }, []);

    async function loadUserPosts() {
        const loggedInUser = userService.getDemoUser();
        if (loggedInUser && loggedInUser.posts) {
            setUserPosts(loggedInUser.posts);
            setIsLoading(false);
        }
    }

    return (
        <div className="gallery-container">
            {userPosts.map(post => (
                <Link key={post._id} to={`/post/${post._id}`}>
                    <div className="gallery-item" style={{ backgroundColor: isLoading ? '#333' : 'transparent' }}>
                        {!isLoading && (
                            <img src={post.imgUrl} alt="post" className="gallery-image" />
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
}
