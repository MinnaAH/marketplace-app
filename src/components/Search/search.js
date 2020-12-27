import React from 'react';
import './search.scss';

function Search({setSearchText}) {
    const handleChange = (event) => {
        setSearchText(event.target.value);
    }
    
    return (
            <input className="search"
            placeholder="Search"
            type="text" 
            onChange={handleChange}/>
    )
}

export default Search;