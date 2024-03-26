import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <Link to="/">
                <h1>Logo</h1>
            </Link>

            <span>
                <button>Home</button>

                <Link to='/info'>
                    <button>Info</button>
                </Link>

                <Link to="/contact">
                    <button>Contact</button>
                </Link>
            </span>
        </div>
    )
}

export default Navbar
