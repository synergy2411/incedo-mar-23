import React from 'react';

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/auth">Auth</a>
                </li>
                <li>
                    <a href="/todos">Todos</a>
                </li>
                <li>
                    <a href="/expenses">Expenses</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
