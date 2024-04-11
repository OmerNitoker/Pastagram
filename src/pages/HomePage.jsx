
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadPosts, removePost } from '../store/actions/post.actions.js'
import { PostList } from '../cmps/PostList.jsx'
import { AddPost } from '../cmps/AddPost.jsx'


export function HomePage() {
    const posts = useSelector(storeState => storeState.postModule.posts)
    console.log(posts)
    const loggedinUser = useSelector(storeState => storeState.userModule.loggedinUser)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await loadPosts()
                console.log('fetch:', posts)
            } catch (err) {
                console.log('err:', err)
            }
        }
        fetchData()
    }, [])

    
    async function onRemovePost(postId) {
        try {
            console.log('post to remove: ', postId)
            await removePost(postId)
        }
        catch (err) {
            console.log('Cannot delete post: ', err)
            throw err
        }
    }

    if (!posts.length) return <div>loading...</div>

    return (
        <section className="home-container">

            <PostList
                posts={posts}
                loggedinUser={loggedinUser}
                onRemovePost={onRemovePost} />
        </section>
    )
}