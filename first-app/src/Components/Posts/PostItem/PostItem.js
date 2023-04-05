import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./PostItem.css";

const PostItem = () => {
    const { postId } = useParams();
    const [post, setPost] = useState()

    useEffect(() => {
        axios.get(`http://localhost:3030/posts/${postId}`)
            .then(response => setPost(response.data))
            .catch(console.error)
    }, [postId])

    if (!post) {
        return <p>Loading...</p>
    }
    return (
        <div className='backdrop'>
            <div className='msg-dialog'>
                <div className='card'>
                    <div className='card-header'>
                        <h6 className='text-center'>{post.title.toUpperCase()}</h6>
                    </div>
                    <div className='card-body'>
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PostItem;
