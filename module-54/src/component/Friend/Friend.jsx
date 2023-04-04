import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    
    const {name,id,username,email}=friend
    return (
        <div className='friend'>
            <h1>Name : {name}</h1>
            <p>UserName : {username}</p>
            <p>Email : {email}</p>
            <p><Link to={`/friend/${id}`}> see More Details</Link></p>
        </div>
    );
};

export default Friend;