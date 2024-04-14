import { useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
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

// import { ReactComponent as HomeIcon} from '../assets/img/home.svg';

export function NavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const loggedinUser = useSelector(storeState => storeState.userModule.loggedinUser)

    
    function onAddPost() {
        setIsModalOpen(true)
    }

    function onCloseModal() {
        setIsModalOpen(false)
    }

    return (
        <section className="nav-bar">
            {/* <h1 className='logo'>Instagram</h1> */}
            <InstagramLogo margin="1em" marginTop="35px" />


            <ul className="nav-list">
                <li className="nav-item home">
                    <Link to="/" className="nav-link">
                        {/* <i className="fa-solid fa-house"></i> */}
                        <HomeIcon marginRight="1em"/>
                        Home
                    </Link>
                </li>
                <li className="nav-item search">
                    <Link to="/search" className="nav-link">
                        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                        <SearchIcon marginRight="1em"/>
                        Search
                    </Link>
                </li>
                <li className="nav-item explore">
                    <Link to="/explore" className="nav-link">
                        {/* <i className="fa-regular fa-compass"></i> */}
                        <ExploreIcon marginRight="1em"/>
                        Explore
                    </Link>
                </li>
                <li className="nav-item reels">
                    <Link to="/reels" className="nav-link">
                        {/* <i className="fa-regular fa-square-caret-right"></i> */}
                        <ReelsIcon  marginRight="1em"/>
                        Reels
                    </Link>
                </li>
                <li className="nav-item chat">
                    <Link to="/chat" className="nav-link">
                        {/* <i className="fa-brands fa-facebook-messenger"></i> */}
                        <MessagesIcon marginRight="1em"/>
                        Messages
                    </Link>
                </li>
                <li className="nav-item notifications">
                    <Link to="/notifications" className="nav-link">
                        {/* <i className="fa-regular fa-heart"></i> */}
                        <NotificationsIcon marginRight="1em"/>
                        Notifications
                    </Link>
                </li>
                <li onClick={onAddPost} className="nav-item creat">
                    <Link className="nav-link">
                        {/* <i className="fa-regular fa-square-plus"></i> */}
                        <CreateIcon marginRight="1em"/>
                        Create
                    </Link>
                </li>
                <li className="nav-item userDetails">
                    <Link to="/user" className="nav-link">
                        <i className="fa-regular fa-circle"></i>
                        {/* <img src={loggedinUser.imgUrl} className="user-avatar nav-img" /> */}
                        Profile
                    </Link>
                </li>
                <li className="nav-item hamburger-menu">
                    <Link to="/" className="nav-link">
                        {/* <i className="fa-solid fa-bars"></i> */}
                        <MoreIcon marginRight="1em"/>
                        More
                    </Link>
                </li>
            </ul>
            {isModalOpen && <AddPost setIsModalOpen={setIsModalOpen} onCloseModal={onCloseModal} />}
        </section>
    )
}
