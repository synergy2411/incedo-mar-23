import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AddPost.css";

const AddPost = () => {
    const titleInputRef = useRef()
    const bodyInputRef = useRef()

    const navigate = useNavigate()

    const addPostHandler = async (event) => {
        event.preventDefault()
        let post = {
            title: titleInputRef.current.value,
            body: bodyInputRef.current.value
        }
        await axios.post("http://localhost:3030/posts", post, {
            Headers: {
                "Content-Type": "application/json"
            }
        })
        navigate("/posts?added=true")
    }
    return (
        <div className='backdrop'>
            <div className='msg-dialog'>
                <div className='card'>
                    <div className='card-header'>
                        <h6 className='text-center'>Add New Post Form</h6>
                    </div>
                    <div className='card-body'>
                        <form>
                            {/* title */}
                            <div className='form-group mb-3'>
                                <label>Title:</label>
                                <input type="text" className='form-control' ref={titleInputRef} />
                            </div>
                            {/* body */}
                            <div className='form-group mb-3'>
                                <label>Body:</label>
                                <input type="text" className='form-control' ref={bodyInputRef} />
                            </div>
                            {/* buttons */}
                            <div className='form-group'>
                                <button className='btn btn-success' onClick={addPostHandler}>Add Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddPost;
