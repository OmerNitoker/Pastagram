import { useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { AddPost } from './AddPost';

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
            <h1 className='logo'>Instagram</h1>


            <ul className="nav-list">
                <li className="nav-item home">
                    <Link to="/" className="nav-link">
                        {/* <i className="fa-solid fa-house"></i> */}
                        {/* <HomeIcon /> */}
                        <img src="../assets/img/instagram.svg"/>
                        Home
                    </Link>
                </li>
                <li className="nav-item search">
                    <Link to="/search" className="nav-link">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        Search
                    </Link>
                </li>
                <li className="nav-item explore">
                    <Link to="/explore" className="nav-link">
                        <i className="fa-regular fa-compass"></i>
                        Explore
                    </Link>
                </li>
                <li className="nav-item reels">
                    <Link to="/reels" className="nav-link">
                        <i className="fa-regular fa-square-caret-right"></i>
                        Reels
                    </Link>
                </li>
                <li className="nav-item chat">
                    <Link to="/chat" className="nav-link">
                        <i className="fa-brands fa-facebook-messenger"></i>
                        Messages
                    </Link>
                </li>
                <li className="nav-item notifications">
                    <Link to="/notifications" className="nav-link">
                        <i className="fa-regular fa-heart"></i>
                        Notifications
                    </Link>
                </li>
                <li onClick={onAddPost} className="nav-item creat">
                    <Link className="nav-link">
                        <i className="fa-regular fa-square-plus"></i>
                        Create
                    </Link>
                </li>
                <li className="nav-item userDetails">
                    <Link to="/user" className="nav-link">
                        {/* <i className="fa-regular fa-circle"></i> */}
                        <img src={loggedinUser.imgUrl} className="user-avatar nav-img" />
                        Profile
                    </Link>
                </li>
                <li className="nav-item threads">
                    <Link to="/" className="nav-link">
                        <i className="fa-brands fa-threads"></i>
                        Threads
                    </Link>
                </li>
                <li className="nav-item hamburger-menu">
                    <Link to="/" className="nav-link">
                        <i className="fa-solid fa-bars"></i>
                        More
                    </Link>
                </li>
            </ul>
            {isModalOpen && <AddPost setIsModalOpen={setIsModalOpen} onCloseModal={onCloseModal} />}
        </section>
    )
}
