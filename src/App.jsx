import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';

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
import { loginDemo } from './store/actions/user.actions';
import { PostDetails } from './cmps/PostDetails';

export function App() {
    const location = useLocation()
    const previousLocation = location.state?.previousLocation
    

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Cacher le loader une fois que tout le contenu est chargé
        setIsLoading(false);
    }, []);

    useEffect(() => {
        const setLoginDemo = async () => {
            try {
                await loginDemo()
            } catch (err) {
                console.log('err:', err)
                throw err
            }
        }
        setLoginDemo()
    }, [])
    return (
        <Provider store={store}>
            {isLoading ? (
                // Loader
                <div className="loader-overlay" id="loader">
                    <i className="loader-icon fa-brands fa-instagram"></i>
                </div>
            ) : (
                <section className="main-layout app">
                    <NavBar />
                    <main>
                        <Routes location={previousLocation || location}>
                            <Route element={<HomePage />} path="/" />
                            <Route element={<Explore />} path="/explore" />
                            <Route element={<Reels />} path="/reels" />
                            <Route element={<Chat />} path="/chat" />
                            <Route element={<UserDetails />} path="/user" />
                            <Route element={<Search />} path="/search" />
                            <Route element={<Notifications />} path="/notifications" />
                        </Routes>
                        {previousLocation && (
                            <Routes>
                                <Route path="/post/:postId" element={<PostDetails lastPath={previousLocation.pathname} />} />
                            </Routes>
                        )}
                    </main>
                </section>
            )
            }
        </Provider >
    );
}
