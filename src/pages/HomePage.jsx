
import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import { useSelector } from 'react-redux'
import { loadPosts, removePost } from '../store/actions/post.actions.js'
import { PostList } from '../cmps/PostList.jsx'
import { AddPost } from '../cmps/AddPost.jsx'
import { userService } from '../services/user.service.js'


export function HomePage() {
    const posts = useSelector(storeState => storeState.postModule.posts)
    const loggedinUser = userService.getLoggedinUser()
    const location = useLocation()

    useEffect(() => {
        const fetchData = async () => {
            try {
                await loadPosts()
            } catch (err) {
                console.log('err:', err)
            }
        }
        fetchData()
    }, [location])
    
    async function onRemovePost(postId) {
        try {
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