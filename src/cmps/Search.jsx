import { useEffect, useRef } from 'react';

export function Search({ toggleSidebar }) {
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                toggleSidebar();
            }
        };

        // Ajoute l'écouteur d'événements
        document.addEventListener('mousedown', handleClickOutside);

        // Supprime l'écouteur d'événements lors du démontage du composant
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleSidebar]);

    return (
        <div className="search-page" ref={searchRef}>
            <h1>SEARCH</h1>
            <input type="search" />
            <button className="close-btn" onClick={toggleSidebar}>Close</button>
        </div>
    )
}
