import React from 'react';
import './App.css'

const Singer = ({singer}) => {
    return (
        <div className='singer'>
            <p>name :{singer.name} </p>
            <p>age : { singer.age}</p>
        </div>
    );
};

export default Singer;