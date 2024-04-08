import { userService } from '../services/user.service'
import { PostPreview } from './PostPreview'

export function PostList({ posts, loggedinUser, onRemovePost }) {
    console.log('list user ', loggedinUser)
    return (
        <section >
            <ul className="post-list clean-list">
                {posts.map(post =>
                    <li key={post._id}>
                        <PostPreview
                        post={post}
                        currentUser={loggedinUser}
                        onRemovePost={onRemovePost} />

                    </li>
                )}
            </ul>
        </section>
    )
}