import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend= useLoaderData();
   const {id,name,phone,username}=friend
    return (
        <div>
           <h1>Friends details section id : {id}</h1>
           <p>{name}</p> 
           <p>{phone}</p>
           <p>{username}</p>


        </div>
    );
};

export default FriendDetails;