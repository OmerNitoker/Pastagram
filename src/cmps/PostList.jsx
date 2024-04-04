import { PostPreview } from './PostPreview'

export function PostList({ posts }) {
    return (
        <section >
            <ul className="post-list clean-list">
                {posts.map(post =>
                    <li key={post._id}>
                        <PostPreview post={post} />
                    </li>
                )}
            </ul>
        </section>
    )
}