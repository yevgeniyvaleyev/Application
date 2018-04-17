import React from 'react';

const SearchField = ({ onClickFilterByName }) => {
    return (
        <div className="row">
            <div className="col-8 offset-2">
                <div className="form-group">
                <input
                    type="text"
                    placeholder="Search"
                    className="searchfield form-control text-center"
                    onKeyUp={onClickFilterByName}
                />
                </div>
            </div>
        </div>
    );
};

export default SearchField;