import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="text-center grid place-items-center">
            <div className='flex gap-8 mb-4'>
                <NavLink to="/" className='cursor-pointer'>/</NavLink>
                <NavLink to="/works" className='cursor-pointer'>works</NavLink>
                <NavLink to="/about" className='cursor-pointer'>about</NavLink>
            </div>
        </div>
    )
}

export default Nav;
