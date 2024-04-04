
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadPosts } from '../store/actions/post.actions.js'

import { PostList } from '../cmps/PostList.jsx'
import { Suggestions } from '../cmps/Suggestions.jsx'
import { Stories } from '../cmps/Stories.jsx'

export function HomePage() {

    const posts = useSelector(storeState => storeState.postModule.posts)

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

    return (
        <section className="home-container">
            
            <PostList posts={posts} />
            {/* <Suggestions /> */}
        </section>
    )
}