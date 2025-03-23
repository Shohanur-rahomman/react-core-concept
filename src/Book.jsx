import React from 'react';

const Book = ({ book }) => {
    
    return (
        <div>
            <li>name :{book.name} price:{book.price }</li>
        </div>
    );
};

export default Book;