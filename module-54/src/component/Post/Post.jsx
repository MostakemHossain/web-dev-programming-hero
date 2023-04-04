import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id,title,body}=post
    const navigate= useNavigate()
    const handleButton=()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`/post/${id}`}> see More</Link>
            <Link to={`/post/${id}`}><button>See more</button></Link>
            <button onClick={handleButton}>wuth Button handler</button>
            
        </div>
    );
};

export default Post;