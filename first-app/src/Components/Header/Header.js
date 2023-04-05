import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const { token } = useSelector(store => store.userReducer)
    return (
        <nav>
            <ul className='nav nav-tabs'>
                {!token && <li className='nav-item'>
                    <NavLink className="nav-link" to="/auth">Auth</NavLink>
                </li>}
                <li className='nav-item'>
                    <NavLink className="nav-link" to="/todos">Todos</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className="nav-link" to="/expenses">Expenses</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
