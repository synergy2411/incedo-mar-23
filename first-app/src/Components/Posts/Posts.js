import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3030/posts")
            .then(response => {
                setPosts(response.data)
            }).catch(console.error)
    }, [])

    return (
        <div>
            <h3 className='text-center'>My Posts</h3>
            <div className='row'>
                {posts.map(post => <div className='col-4' key={post.id}>
                    <div className='card'>
                        <div className='card-header'>
                            <h6 className='text-center'>{post.title.toUpperCase()}</h6>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
}

export default Posts;
