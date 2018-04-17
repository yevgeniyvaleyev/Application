import React from 'react';

const NatSelect = ({ onChangeFilterNat, handleRef }) => {
    const natList = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NL', 'NZ', 'TR', 'US'];

    return (
        <div className="col-4 dropdown">
            <select className="form-control form-control-sm" onChange={onChangeFilterNat} ref={select => handleRef(select)} >
                {natList.map((nat, index) => {
                    if (index === 0) {
                        return (<option key={index} value="">Select Nationality</option>)
                    } else {
                        return (<option key={index}>{nat}</option>)
                    }
                })}
            </select>
        </div>
    );
};

export default NatSelect;