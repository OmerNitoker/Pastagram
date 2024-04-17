import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { AddPost } from './AddPost';
import { SearchIcon } from './icons-cmps/SearchIcon';
import { ExploreIcon } from './icons-cmps/ExploreIcon';
import { ReelsIcon } from './icons-cmps/ReelsIcon';
import { MessagesIcon } from './icons-cmps/MessagesIcon';
import { NotificationsIcon } from './icons-cmps/NotificationsIcon';
import { CreateIcon } from './icons-cmps/CreateIcon';
import { MoreIcon } from './icons-cmps/MoreIcon';
import { HomeIcon } from './icons-cmps/HomeIcon';
import { InstagramLogo } from './icons-cmps/InstagramLogo';
import { InstaIcon } from './icons-cmps/InstaIcon';
import { userService } from '../services/user.service';

export function NavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const loggedinUser = userService.getLoggedinUser();
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function isLinkActive(path) {
        return location.pathname === path;
    }

    function onAddPost() {
        setIsModalOpen(true);
    }

    function onCloseModal() {
        setIsModalOpen(false);
    }

    return (
        <section className="nav-bar">
            <div className="narrow-top-bar"></div>
            <div className="insta-icon">
                <InstaIcon />
            </div>
            <div className="vista-logo">
                <InstagramLogo margin="1.5em" marginTop="40px" />
            </div>

            <ul className="nav-list">
                <li className={`nav-item home ${isLinkActive("/") ? 'active' : ''}`}>
                    <Link to="/" className="nav-link">
                        <HomeIcon marginRight="1em"/>
                        <span className='nav-name'>Home</span>
                    </Link>
                </li>
                <li className={`nav-item search ${isLinkActive("/search") ? 'active' : ''}`}>
                    <Link to="/search" className="nav-link">
                        <SearchIcon marginRight="1em"/>
                        <span className='nav-name'>Search</span>
                    </Link>
                </li>
                <li className={`nav-item explore ${isLinkActive("/explore") ? 'active' : ''}`}>
                    <Link to="/explore" className="nav-link">
                        <ExploreIcon marginRight="1em"/>
                        <span className='nav-name'>Explore</span>
                    </Link>
                </li>
                <li className={`nav-item reels ${isLinkActive("/reels") ? 'active' : ''}`}>
                    <Link to="/reels" className="nav-link">
                        <ReelsIcon  marginRight="1em"/>
                        <span className='nav-name'>Reels</span>
                    </Link>
                </li>
                <li className={`nav-item chat ${isLinkActive("/chat") ? 'active' : ''}`}>
                    <Link to="/chat" className="nav-link">
                        <MessagesIcon marginRight="1em"/>
                        <span className='nav-name'>Messages</span>
                    </Link>
                </li>
                <li className={`nav-item notifications ${isLinkActive("/notifications") ? 'active' : ''}`}>
                    <Link to="/notifications" className="nav-link">
                        <NotificationsIcon marginRight="1em"/>
                        <span className='nav-name'>Notifications</span>
                    </Link>
                </li>
                <li onClick={onAddPost} className={`nav-item creat ${isLinkActive("/add-post") ? 'active' : ''}`}>
                    <Link className="nav-link">
                        <CreateIcon marginRight="1em"/>
                        <span className='nav-name'>Create</span>
                    </Link>
                </li>
                <li className={`nav-item userDetails ${isLinkActive("/user") ? 'active' : ''}`}>
                    <Link to="/user" className="nav-link">
                        <img src={loggedinUser.imgUrl} className="user-avatar nav-img" alt="User avatar" />
                        <span className='nav-name'>Profile</span>
                    </Link>
                </li>
                <li className={`nav-item hamburger-menu ${isLinkActive("/more") ? 'active' : ''}`}>
                    <Link to="/more" className="nav-link">
                        <MoreIcon marginRight="1em"/>
                        <span className='nav-name'>More</span>
                    </Link>
                </li>
            </ul>
            {isModalOpen && <AddPost setIsModalOpen={setIsModalOpen} onCloseModal={onCloseModal} />}
        </section>
    );
}
