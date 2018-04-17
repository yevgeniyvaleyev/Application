import React from 'react';

const GenderSelect = ({ onChangeFilterGender, handleRef }) => {
    return (
        <div className="col-4 offset-2 dropdown">
            <select className="form-control form-control-sm" onChange={onChangeFilterGender} ref={select => handleRef(select)} >
                <option value="">Select Gender</option>
                <option>Female</option>
                <option>Male</option>
            </select>
        </div>
    );
};

export default GenderSelect;