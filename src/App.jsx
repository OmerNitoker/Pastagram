import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';

import { HomePage } from './pages/HomePage';
import { NavBar } from './cmps/NavBar';
import { UserDetails } from './pages/UserDetails';
import { Chat } from './pages/Chat';
import { Reels } from './pages/Reels';
import { Explore } from './pages/Explore';
import { Search } from './cmps/Search';
import { Notifications } from './cmps/Notifications';

import { store } from './store/store';
import './assets/styles/main.scss';
// import { loginDemo } from './store/actions/user.actions';
import { PostDetails } from './cmps/PostDetails';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { userService } from './services/user.service';
import { LoginSignup } from './cmps/LoginSignup';

export function App() {

    const location = useLocation()
    const previousLocation = location.state?.previousLocation
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Cacher le loader une fois que tout le contenu est chargé
        setIsLoading(false);
    }, []);

    // useEffect(() => {
    //     const setLoginDemo = async () => {
    //         try {
    //             await loginDemo()
    //         } catch (err) {
    //             console.log('err:', err)
    //             throw err
    //         }
    //     }
    //     setLoginDemo()
    // }, [])

    async function loginUser(credentials) {
        try {
            await userService.login(credentials)
            setIsLoggedIn(true)
            navigate('/')
        }
        catch (err) {
            console.log('Could not log in:', err)
            throw err
        }
    }

    async function signupUser(credentials) {
        try {
            await userService.signup(credentials)
            setIsLoggedIn(true)
            navigate('/')
        }
        catch (err) {
            console.log('Could not sign up:', err)
            throw err
        }
    }

    if (isLoading) return (
        <div className="loader-overlay" id="loader">
            <i className="loader-icon fa-brands fa-instagram"></i>
        </div>
    )


    return (
        <Provider store={store}>


            <section className="main-layout app">
                < NavBar />
                <main>
                    <Routes location={previousLocation || location}>
                        <Route element={<HomePage />} path="/" />
                        <Route element={<Explore />} path="/explore" />
                        <Route element={<Reels />} path="/reels" />
                        <Route element={<Chat />} path="/chat" />
                        <Route element={<UserDetails />} path="/user" />
                        <Route element={<Search />} path="/search" />
                        <Route element={<Notifications />} path="/notifications" />
                        <Route element={<LoginSignup loginUser={loginUser} signupUser={signupUser} />} path="/login" />
                        {/* <Route element={<Login />} path="/login" />  
                            <Route element={<Signup />} path="/signup" />   */}
                    </Routes>
                    {previousLocation && (
                        <Routes>
                            <Route path="/post/:postId" element={<PostDetails lastPath={previousLocation.pathname} />} />
                        </Routes>
                    )}
                </main>
            </section>

        </Provider >
    );
}
