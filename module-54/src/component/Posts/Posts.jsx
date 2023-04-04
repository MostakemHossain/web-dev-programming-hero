import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const Posts=useLoaderData();
    
    return (
        <div>
            <h1>All post are here {Posts.length}</h1>

            <div>
                {
                    Posts.map(post => <Post
                    key={post.id}
                    post={post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;