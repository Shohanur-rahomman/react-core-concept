import React from 'react';
import Book from './Book';

const Library = ({books}) => {
    return (
        <div>
            <p>{books.length}</p>
           
            <ul>
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </ul>
        </div>
    );
};

export default Library;