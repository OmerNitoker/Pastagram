



export function UserPosts({ user }) {
    console.log("User in UserPosts:", user);



    return (
        <div className="post-gallery">
            {user.posts.length > 0 ? (
                user.posts.map(post => (
                    <div key={post._id} className="post-item">
                        <img src={post.imgUrl} alt={post.txt} className="post-image"/>
                    </div>

                ))
            ) : (
                <p>No posts to display.</p>
            )}
        </div>

    )
}
