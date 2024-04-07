import { userService } from '../services/user.service'
import { PostPreview } from './PostPreview'

<<<<<<< HEAD
export function PostList({ posts, loggedinUser }) {
=======
export function PostList({ posts }) {
    var loggedInUser = userService.getDemoUser
>>>>>>> 07dedb84aa9deda236cb98680daab7d9a80ffb31
    return (
        <section >
            <ul className="post-list clean-list">
                {posts.map(post =>
                    <li key={post._id}>
<<<<<<< HEAD
                        <PostPreview post={post} loggedinUser={loggedinUser} />
=======
                        <PostPreview post={post} currentUser={loggedInUser} />

>>>>>>> 07dedb84aa9deda236cb98680daab7d9a80ffb31
                    </li>
                )}
            </ul>
        </section>
    )
}