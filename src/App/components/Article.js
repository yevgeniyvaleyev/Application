import React from 'react';

const Article = ({ firstName, lastName, gender, nat }) => {

    return (
        <div className="article">
            <h4>{firstName} {lastName}</h4>
            <p>{gender}, {nat}</p>
        </div>
    );
};

export default Article;