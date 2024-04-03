import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <section className="nav-bar">
            <h1 className='logo'>Instagram</h1>

           
                <ul className="nav-list">
                    <li className="nav-item home">
                        <Link to="/" className="nav-link">
                            <i className="fa-solid fa-house"></i>
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
                            Chat
                        </Link>
                    </li>
                    <li className="nav-item notifications">
                        <Link to="/notifications" className="nav-link">
                            <i className="fa-regular fa-heart"></i>
                            Notifications
                        </Link>
                    </li>
                    <li className="nav-item creat">
                        <Link to="/creat" className="nav-link">
                            <i className="fa-regular fa-square-plus"></i>
                            Creat
                        </Link>
                    </li>
                    <li className="nav-item userDetails">
                        <Link to="/user" className="nav-link">
                            <i className="fa-regular fa-circle"></i>
                            Profil
                        </Link>
                    </li>
                    <li className="nav-item threads">
                        <Link to="/" className="nav-link">
                            <i className="fa-brands fa-threads"></i>
                            Threads
                        </Link>
                    </li>
                    <li className="nav-item plus">
                        <Link to="/" className="nav-link">
                            <i className="fa-solid fa-bars"></i>
                            Plus
                        </Link>
                    </li>
                </ul>
           
        </section>
    )
}
