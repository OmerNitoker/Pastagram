import { UserPosts } from "../cmps/UserPosts";
import { UserPostsSaved } from "../cmps/UserPostsSaved";
import { UserTagged } from "../cmps/UserTagged";
import { useState } from "react";

export function UserDetails() {
    const [activeComponent, setActiveComponent] = useState(null);

    const userDemo = userService.getDemoUser();
    console.log("userDemo", userDemo)

    const handleComponentChange = (componentName) => {
        switch (componentName) {
            case 'UserPosts':
                setActiveComponent(<UserPosts />);
                break;
            case 'UserPostsSaved':
                setActiveComponent(<UserPostsSaved />);
                break;
            case 'UserTagged':
                setActiveComponent(<UserTagged />);
                break;
            default:
                setActiveComponent(null);
                break;
        }
    };


    return (
        <section className="user-profile">
            <div className="profile-info">
                <img className="user-profile-avatar" src={userDemo.imgUrl} alt={`${userDemo.fullname}'s avatar`} />
                <div className="user-details">

                    <div className="user-profile-btns">
                        <span><h2>{userDemo.username}</h2></span>
                        <span> <button className="follow-btn">Edit profile </button></span>
                        <span><button className="message-btn">View archive</button></span>
                        <span><i className="fa-solid fa-gear"></i></span>
                    </div>
                    <div className="user-stats">
                        <span className="user-num-posts">{userDemo.posts ? userDemo.posts.length : 'Loading...'} posts</span>
                        <span className="user-num-followers">{userDemo.followers ? Object.keys(userDemo.followers).length : 'Loading...'} followers</span>
                        <span className="user-num-following">{userDemo.following ? Object.keys(userDemo.following).length : 'Loading...'} following</span>
                    </div>
                    <div>{userDemo.fullname}</div>
                </div>
            </div>

            <section className="user-posts-detail">
                        <div className="user-publications" onClick={() => handleComponentChange('UserPosts')}><i className="fa-solid fa-table-cells"></i>Posts</div>
                        <div className="user-posts-saved" onClick={() => handleComponentChange('UserPostsSaved')}><i className="fa-regular fa-bookmark"></i>Saved</div>
                        <div className="user-posts-tagged" onClick={() => handleComponentChange('UserTagged')}><i className="fa-solid fa-clipboard-user"></i>Tagged</div>
                        {/* ajoutez d'autres divs ici si nécessaire */}
                    </section>
                    <div className="active-component">
                        {activeComponent}
                    </div>
        </section>
    )
}
