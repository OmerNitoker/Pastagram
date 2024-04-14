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
            />
            <ul>
                {searchResults.map(user => (
                    <li key={user._id}>{user.fullname}</li>
                ))}
            </ul>
        </div>
    );
}
