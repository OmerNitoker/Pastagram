import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import { UserPosts } from "../cmps/UserPosts";
import { UserPostsSaved } from "../cmps/UserPostsSaved";
import { UserTagged } from "../cmps/UserTagged";
import { SettingsIcon } from "../cmps/icons-cmps/SettingsIcon";
import { TaggedIcon } from "../cmps/icons-cmps/TaggedIcon";
import { userService } from '../services/user.service';
import { TableIcon } from '../cmps/icons-cmps/TableIcon';
import { SaveIcon } from '../cmps/icons-cmps/SaveIcon';
import { loadPosts } from '../store/actions/post.actions';

export function UserDetails() {
    const posts = useSelector((storeState) => storeState.postModule.posts)
    console.log('postsssss:', posts)
    const currentUser = userService.getLoggedinUser()
    const [activeComponent, setActiveComponent] = useState(<UserPosts user={currentUser} posts={posts} />);
    const [activeTab, setActiveTab] = useState('UserPosts');

    useEffect(() => {
        if (!posts.length) {
            const fetchData = async () => {
                try {
                    await loadPosts()
                } catch (err) {
                    console.log('err:', err)
                }
            }
            fetchData()
        }
    }, [])

    useEffect(() => {
        setActiveComponent(getActiveComponent(activeTab, currentUser, posts));
    }, [activeTab]);

    const handleComponentChange = (componentName) => {
        setActiveTab(componentName);
    };

    const getActiveComponent = (componentName, user = { currentUser }, posts = {posts}) => {
        switch (componentName) {
            case 'UserPosts':
                return <UserPosts user={user} posts={posts} />;
            case 'UserPostsSaved':
                return <UserPostsSaved currentUser={user} posts={posts} />;
            case 'UserTagged':
                return <UserTagged />;
            default:
                return <UserPosts user={user} />;
        }
    }

    // if (!currentUser) {
    //     return (
    //         <span>loading...</span>
    //     )
    // }

    if(!posts.length) return <div></div>

    return (
        <section className="user-profile">
            <div className="profile-info">
                <img className="user-profile-avatar user-avatar" src={currentUser.imgUrl} alt={`${currentUser.fullname}'s avatar`} />
                <div className="user-details">

                    <div className="user-profile-btns">
                        <span>{currentUser.username}</span>
                        <span> <button className="follow-btn">Edit profile </button></span>
                        <span><button className="message-btn">View archive</button></span>
                        <span><SettingsIcon /></span>
                    </div>

                    <div className="user-stats">
                        <span className="user-num-posts">{currentUser.posts ? currentUser.posts.length : 'Loading...'} posts</span>
                        <span className="user-num-followers">{currentUser.followers ? Object.keys(currentUser.followers).length : 'Loading...'} followers</span>
                        <span className="user-num-following">{currentUser.following ? Object.keys(currentUser.following).length : 'Loading...'} following</span>
                    </div>
                    <div className="userprofile-description">
                    <div className="user-profile-fullname">
                            {currentUser.fullname}
                        </div>
                        <div className="user-profile-description">
                            {currentUser.description}

                        </div>
                    </div>
                </div>
            </div>

            <section className="user-posts-detail">
                <div className={`user-publications ${activeTab === 'UserPosts' ? 'active' : ''}`} onClick={() => handleComponentChange('UserPosts')}><TableIcon /> POSTS</div>
                <div className={`user-posts-saved ${activeTab === 'UserPostsSaved' ? 'active' : ''}`} onClick={() => handleComponentChange('UserPostsSaved')}><SaveIcon /> SAVED</div>
                <div className={`user-posts-tagged ${activeTab === 'UserTagged' ? 'active' : ''}`} onClick={() => handleComponentChange('UserTagged')}><TaggedIcon /> TAGGED</div>

            </section>
            <div className="active-component">
                {activeComponent}
            </div>
        </section>
    )
}
