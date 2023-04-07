import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import "./Posts.css";

const sortPost = (posts, isAscending) => {
    if (isAscending) {
        return posts.sort((a, b) => {
            if (a.title > b.title) {
                return 1
            } else if (b.title > a.title) {
                return -1
            } else {
                return 0
            }
        })
    } else {
        return posts.sort((a, b) => {
            if (a.title > b.title) {
                return -1
            } else if (b.title > a.title) {
                return 1
            } else {
                return 0
            }
        })
    }
}

const Posts = () => {
    const [posts, setPosts] = useState([])
    const location = useLocation();

    const query = new URLSearchParams(location.search);
    const isDeleted = query.get("delete")
    const isAdded = query.get("added")
    const isAscending = query.get("order") === 'asc'

    useEffect(() => {
        axios.get("http://localhost:9090/api/posts")
            .then(response => {
                setPosts(response.data)
                console.log("RESPONSE : ", response.data)
            }).catch(console.error)
    }, [isDeleted, isAdded])

    const navigate = useNavigate()
    const postSelectHandler = (postId) => {
        navigate(`/posts/${postId}`)
    }

    const sortedPost = sortPost(posts, isAscending);

    return (
        <div>
            <h3 className='text-center mb-3'>My Posts</h3>

            <div className='row mb-3'>
                <div className='col-4 offset-4'>
                    <div className='d-grid'>
                        <button className='btn btn-dark'
                            onClick={() => navigate(`/posts?order=${isAscending ? "desc" : "asc"}`)}>
                            Sort {isAscending ? 'Decending' : 'Ascending'} </button>
                    </div>
                </div>
                <div className="col-4">
                    <div className='d-grid'>
                        <button className='btn btn-warning'
                            onClick={() => navigate("/posts/add-post")}>Add Post</button>
                    </div>
                </div>
            </div>

            <div className='row'>
                {sortedPost.map(post => <div className='col-4' key={post.id}>
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
