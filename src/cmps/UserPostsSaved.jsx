import { useState, useEffect } from 'react';
import { gPosts } from "../services/post.service";

export function UserPostsSaved({ currentUser }) {
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() => {
        if (currentUser && currentUser.savedPostsIds) {
          const posts = currentUser.savedPostsIds.map(postId => {
            const post = gPosts.find(p => p._id === postId);
            if (!post) {
              console.warn(`Post with ID ${postId} not found`);
              return null; // Ignore IDs of posts not found
            }
            return post;
          }).filter(Boolean);
      
          setSavedPosts(posts);
      
          // Calculer le nombre de lignes nécessaires pour la grille
          const rowCount = Math.ceil(posts.length / 3);
          
          // Mettre à jour la variable CSS
          document.documentElement.style.setProperty('--saved-grid-rows', rowCount);
        }
      }, [currentUser]);
      

    if (!savedPosts.length) {
        return <div>Loading saved posts...</div>;
    }

    return (
        <div>
            <div className="saved-posts-container">
                {savedPosts.map(post => (
                    <div key={post._id} className="saved-post-item">
                        <img src={post.imgUrl} alt={post.txt} className="saved-post-image" />
                    </div>
                ))}
            </div>
        </div>
    );
}
