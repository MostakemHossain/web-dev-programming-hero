import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const data= useLoaderData();
    const {id,title,body}=data

    const navigate= useNavigate();
    const handleGoBack=()=>{
        navigate(-1)
    }


    return (
        <div>
            <p>Details about your post id :{id}</p>
            <p>{title}</p>
            <p>{body}</p>

            <button onClick={handleGoBack}>
                Go Back
            </button>
        </div>
    );
};

export default PostDetail;