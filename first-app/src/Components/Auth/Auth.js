import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin, userRegister } from '../../store/reducers/user-slice';

const Auth = () => {

    const { loading, messageLogin, messageRegister, error, userEmail, token } = useSelector(store => store.userReducer)

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         navigate("/expenses")
    //     }
    // }, [navigate, token]);


    const registerClickHandler = (event) => {
        event.preventDefault()
        dispatch(userRegister({ email, password }))
        navigate("/expenses")
    }

    const loginClickHandler = event => {
        event.preventDefault();
        dispatch(userLogin({ email, password }))
        setTimeout(() => {
            navigate("/expenses")
        }, 1000)

    }


    if (token) {
        localStorage.setItem("token", token)
    }
    return (
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='text-center'>Login / Register Form</h5>
                        {loading && <p>Loading....</p>}
                        {error && error}
                        {messageRegister.length > 0 && <p>{userEmail} is registerd successfully</p>}
                        {messageLogin.length > 0 && <p>{userEmail} is Logged-in successfully</p>}
                        <form>
                            {/* email */}
                            <div className='form-group mb-3'>
                                <label>Email : </label>
                                <input type="email" className='form-control'
                                    value={email} onChange={event => setEmail(event.target.value)} />
                            </div>
                            {/* password */}
                            <div className='form-group mb-3'>
                                <label>Password : </label>
                                <input type="password" className='form-control'
                                    value={password} onChange={event => setPassword(event.target.value)} />
                            </div>
                            {/* buttons */}
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='d-grid'>
                                            <button className='btn btn-primary'
                                                onClick={loginClickHandler}>Login</button>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='d-grid'>
                                            <button className='btn btn-secondary'
                                                onClick={registerClickHandler}>Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
