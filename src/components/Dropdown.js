import React from 'react'
import { Link } from 'react-router-dom';

export default function Dropdown({ isOpen, toggle }) {
    return (
        <div
            className={
                isOpen
                    ? 'grid grid-rows-4 p-4 text-center items-center bg-yellow-500'
                    : 'hidden'
            }
            onClick={toggle}
        >
            
            <Link to='/' className='pb-4 font-bold hover:text-white'>
                Home
            </Link>
            <Link to='/tool' className='font-bold hover:text-white'>
                Tool
            </Link>
            <Link to='/data' className='pt-4 font-bold hover:text-white'>
                Data
            </Link>
        </div>
    )
}
