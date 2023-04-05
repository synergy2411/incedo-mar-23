import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { onLogout } from '../../store/reducers/user-slice';

const Header = () => {
    const { token } = useSelector(store => store.userReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutClickHandler = () => {
        dispatch(onLogout())
        setTimeout(() => {
            localStorage.removeItem("token")
            navigate("/auth")
        }, 1500)
    }
    return (
        <>
            <div className='row'>
                <div className='col-9'>
                    <nav>
                        <ul className='nav nav-tabs'>
                            {!token && <li className='nav-item'>
                                <NavLink className="nav-link" to="/auth">Auth</NavLink>
                            </li>}
                            <li className='nav-item'>
                                <NavLink className="nav-link" to="/todos">Todos</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className="nav-link" to="/posts">Posts</NavLink>
                            </li>
                            {token && <li className='nav-item'>
                                <NavLink className="nav-link" to="/expenses">Expenses</NavLink>
                            </li>}
                        </ul>
                    </nav>
                </div>
                {token && <div className='col-3'>
                    <div className='d-grid'>
                        <button className='btn btn-outline-danger btn-sm'
                            onClick={logoutClickHandler}>Logout</button>
                    </div>
                </div>}
            </div>

        </>
    );
}

export default Header;
