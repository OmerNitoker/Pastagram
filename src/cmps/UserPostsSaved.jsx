import { useState, useEffect } from 'react';
import { gPosts } from "../services/post.service";

export function UserPostsSaved({ currentUser }) {
  const [savedPosts, setSavedPosts] = useState([]);
  console.log("currentUser", currentUser)
  console.log("currentUser.savedPostIds:", currentUser.savedPostIds  );

  useEffect(() => {
    if (currentUser && currentUser.savedPostIds && currentUser.savedPostIds.length > 0) {
      const posts = currentUser.savedPostIds.map(postId => {
        const post = gPosts.find(p => p._id === postId);
        if (!post) {
          console.log(`Post with ID ${postId} not found`);
          return null;
        }
        return post;
      }).filter(Boolean);
  
      console.log("Filtered posts:", posts);
  
      setSavedPosts(posts);
  
      const rowCount = Math.ceil(posts.length / 3);
      document.documentElement.style.setProperty('--saved-grid-rows', rowCount);
    } else {
      console.log("currentUser.savedPostsIds is empty or currentUser is null:", currentUser);
      setSavedPosts([]);
    }
  }, [currentUser, gPosts]); // Assurez-vous de placer gPosts dans la liste de dépendances si cela pourrait changer
  

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
