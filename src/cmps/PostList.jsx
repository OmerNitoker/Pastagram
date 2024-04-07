import { userService } from '../services/user.service'
import { PostPreview } from './PostPreview'

export function PostList({ posts, loggedinUser }) {
    return (
        <section >
            <ul className="post-list clean-list">
                {posts.map(post =>
                    <li key={post._id}>
                        <PostPreview post={post} currentUser={loggedinUser} />

                    </li>
                )}
            </ul>
        </section>
    )
}