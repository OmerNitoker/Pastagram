import { useState } from 'react';

export function Search({ toggleSidebar }) {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        // Recherche des utilisateurs dans le localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const results = users.filter(user =>
            user.fullname.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setSearchResults(results);
    };



    return (
        <div className="search-page">
            <h1>SEARCH</h1>
            <input
                type="search"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Rechercher par prénom..."
                className="search-input" // Ajout de la classe "search-input"
            />

            <div className="delete-all-search">
                <h2>Recently</h2>
                <button>Delete all</button>
            </div>

            <ul className="search-list"> {/* Renommer la classe de ul */}
                {searchResults.map(user => (
                    <li key={user._id} className="search-item"> {/* Renommer la classe de li */}
                        <img className="user-image" src={user.imgUrl} alt="" />
                        <div className="search-user-names">
                            <div className="search-user-username">
                                {user.username} </div>
                            <div className="search-user-fullname">
                                {user.fullname}
                            </div>

                        </div>
                        {console.log("user", user)}
                        <i class="fa-solid fa-x"></i>
                    </li>
                ))}
            </ul>
        </div>
    );

}
