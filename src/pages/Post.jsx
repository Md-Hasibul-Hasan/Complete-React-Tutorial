import React from 'react';
import { Link } from 'react-router';

const Post = () => {
    const posts = [
        {id:1, title:'Post 1', content:'This is the content of post 1'},
        {id:2, title:'Post 2', content:'This is the content of post 2'},
        {id:3, title:'Post 3', content:'This is the content of post 3'},
    ]
    return (
        <div>
            <h1>Post Page</h1>
            <ul>
                {posts.map((item,idx)=>(
                    <Link key={idx} to={`/post/${item.id}`}>
                        <li>{item.title}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Post;

