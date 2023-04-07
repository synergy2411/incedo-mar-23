import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./PostItem.css";

const PostItem = () => {
    const { postId } = useParams();
    const [post, setPost] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:9090/api/posts/${postId}`)
            .then(response => setPost(response.data))
            .catch(console.error)
    }, [postId])

    const deleteClickHandler = async () => {
        await axios.delete(`http://localhost:9090/api/posts/${post.id}`);
        navigate("/posts?delete=true")
    }

    return (
        <div className='backdrop'>
            <div className='msg-dialog'>
                {!post && <p>Loading...</p>}
                {post && <div className='card'>
                    <div className='card-header'>
                        <h6 className='text-center'>{post.title.toUpperCase()}</h6>
                    </div>
                    <div className='card-body'>
                        <p>{post.body}</p>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='d-grid'>
                                    <button className='btn btn-dark'
                                        onClick={() => navigate("/posts")}>Close</button>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='d-grid'>
                                    <button className='btn btn-danger'
                                        onClick={deleteClickHandler}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );

}

export default PostItem;
