import { PostPreview } from './PostPreview'

export function PostList({ posts, loggedinUser }) {
    return (
        <section >
            <ul className="post-list clean-list">
                {posts.map(post =>
                    <li key={post._id}>
                        <PostPreview post={post} loggedinUser={loggedinUser} />
                    </li>
                )}
            </ul>
        </section>
    )
}