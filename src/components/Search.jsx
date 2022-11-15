import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'
const Search = ({ handleSeacrhNotes }) => {
    return (
        <div className="search">
            <AiOutlineSearch className="search-icon" size='1.3em' />
            <input
                type='text'
                placeholder='Search'
                onChange={(event) => handleSeacrhNotes(event.target.value)} />
        </div>
    )
}

export default Search;