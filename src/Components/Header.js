import React from 'react';

const Header = ({ search, onInputChange, onSearchClick }) => {
    return (
        <div className="header">
            <div className="jumbotron">
                <h1 className="display-3 text-center">Foodiessss</h1>
                <div className="input-group w-50 mx-auto mt-5">
                    <input type="text" className="form-control" placeholder="Search your Recipe" value={search} onChange={onInputChange} />
                    <div className="input-group-append">
                        <button className="search__btn btn " onClick={onSearchClick}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
