import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import "./Posts.css";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const location = useLocation();

    const query = new URLSearchParams(location.search);
    const isDeleted = query.get("delete")

    useEffect(() => {
        axios.get("http://localhost:3030/posts")
            .then(response => {
                setPosts(response.data)
            }).catch(console.error)
    }, [isDeleted])

    const navigate = useNavigate()
    const postSelectHandler = (postId) => {
        navigate(`/posts/${postId}`)
    }
    return (
        <div>
            <h3 className='text-center'>My Posts</h3>
            <div className='row'>
                {posts.map(post => <div className='col-4' key={post.id}>
                    <div className='card sel-post' onClick={() => postSelectHandler(post.id)}>
                        <div className='card-header'>
                            <h6 className='text-center'>{post.title.toUpperCase()}</h6>
                        </div>
                    </div>
                </div>)}
            </div>
            <Outlet />
        </div>
    );
}

export default Posts;
