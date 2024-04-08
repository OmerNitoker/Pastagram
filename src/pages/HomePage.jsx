
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadPosts } from '../store/actions/post.actions.js'

import { PostList } from '../cmps/PostList.jsx'
import { Suggestions } from '../cmps/Suggestions.jsx'
import { Stories } from '../cmps/Stories.jsx'
import { loginDemo } from '../store/actions/user.actions.js'

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

    return (
        <section className="home-container">
            
            <PostList posts={posts} loggedinUser={loggedinUser} />
            {/* <Suggestions /> */}
        </section>
    )
}