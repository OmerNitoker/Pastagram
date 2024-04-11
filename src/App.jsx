import React, { useEffect, useState } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HomePage } from './pages/HomePage';
import { store } from './store/store';
import { NavBar } from './cmps/NavBar';
import { UserDetails } from './pages/UserDetails';
import { Chat } from './pages/Chat';
import { Reels } from './pages/Reels';
import { Explore } from './pages/Explore';
import './assets/styles/main.scss';
import { Search } from './cmps/Search';
import { Notifications } from './cmps/Notifications';
import { Creat } from './cmps/Creat';

export function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Cacher le loader une fois que tout le contenu est chargé
        setIsLoading(false);
    }, []);

    return (
        <Provider store={store}>
            {isLoading ? (
                // Loader
                <div className="loader-overlay" id="loader">
                    <i className="loader-icon fa-brands fa-instagram"></i>
                </div>
            ) : (
                // Application
                <Router>
                    <section className="main-layout app">
                        <NavBar />
                        <main>
                            <Routes>
                                <Route element={<HomePage />} path="/" />
                                <Route element={<Explore />} path="/explore" />
                                <Route element={<Reels />} path="/reels" />
                                <Route element={<Chat />} path="/chat" />
                                <Route element={<UserDetails />} path="/user" />
                                <Route element={<Search />} path="/search" />
                                <Route element={<Notifications />} path="/notifications" />
                            </Routes>
                        </main>
                    </section>
                </Router>
            )}
        </Provider>
    );
}
