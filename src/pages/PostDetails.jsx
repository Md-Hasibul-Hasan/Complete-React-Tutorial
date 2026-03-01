import React from 'react';
import { Link, useParams } from 'react-router';

const PostDetails = () => {
    const posts = [
        {id:1, title:'Post 1', content:'This is the content of post 1'},
        {id:2, title:'Post 2', content:'This is the content of post 2'},
        {id:3, title:'Post 3', content:'This is the content of post 3'},
    ]
    const {id} = useParams();
    const details = posts.find((item)=> item.id === parseInt(id));
    return (
        <div>
            <h1>Post Details Page</h1>

            {details ? (
                <div>
                    <h2>{details.title}</h2>
                    <p>{details.content}</p>
                    <button> <Link to="/post">Back to Posts</Link></button>
                </div>
            ) : (
                <p>Post not found</p>
            )}

        </div>
    );
};

export default PostDetails;