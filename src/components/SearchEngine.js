import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { SearchEngineContext } from '../App';

const SearchEngine = () => {

    const [tagToSearch, setTagToSearch] = useState('');

    const searchContext = useContext(SearchEngineContext);

    const handleFormChange = (e) => {
        e.persist();
        setTagToSearch(e.target.value)
    };

    const handleSearchClick = (e) => {
        e.preventDefault();
        searchContext.setHashTag(tagToSearch);
        searchContext.setIsModalVisible(true)
    }

    return (
        <div className="search-engine-box">
            <form className="search-form">
                <div className="input-box">
                    <label htmlFor="search-engine" className="hash">#</label>
                    <input id="search-engine" onChange={ handleFormChange } value={ tagToSearch } type="text" placeholder="Enter some tag..." />
                </div>
                <button onClick={ handleSearchClick } className="search-btn">Search</button>
            </form>
        </div>
    )
}

export default SearchEngine;