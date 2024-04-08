
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadPosts, removePost } from '../store/actions/post.actions.js'

import { PostList } from '../cmps/PostList.jsx'
import { Stories } from '../cmps/Stories.jsx'
import { loginDemo } from '../store/actions/user.actions.js'
import { AddPost } from '../cmps/AddPost.jsx'


export function HomePage() {
    const posts = useSelector(storeState => storeState.postModule.posts)
    const loggedinUser = useSelector(storeState => storeState.userModule.loggedinUser)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await loadPosts()
            } catch (err) {
                console.log('err:', err)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        loginDemo()
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


    return (
        <section className="home-container">
            
            <PostList 
            posts={posts} 
            loggedinUser={loggedinUser} 
            onRemovePost={onRemovePost} />
        </section>
    )
}