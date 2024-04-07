import { userService } from '../services/user.service'
import { PostPreview } from './PostPreview'

export function PostList({ posts }) {
    var loggedInUser = userService.getDemoUser
    return (
        <section >
            <ul className="post-list clean-list">
                {posts.map(post =>
                    <li key={post._id}>
                        <PostPreview post={post} currentUser={loggedInUser} />

                    </li>
                )}
            </ul>
        </section>
    )
}