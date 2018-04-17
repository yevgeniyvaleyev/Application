import React from 'react';

const Pill = ({ field, onClickReset }) => {

    return (
        <span className="badge badge-pill badge-secondary small-padding-wide">
            <span className="text"> {field} </span>
            <span onClick={onClickReset} className="icon-margin-left cursor-pointer">&times;</span>
        </span>
    );
};

export default Pill;