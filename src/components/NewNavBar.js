import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewDropDown from './NewDropDown';

const NewNavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className='bg-black text-2xl text-white md:flex md:justify-center py-4'>
                <div
                    className='md:hidden cursor-pointer ml-4 inline-block'
                    onClick={handleClick}
                >
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    {click && <NewDropDown />}
                </div>
                <ul className="hidden md:flex">
                    <li>
                        <Link to='/' className="py-2 px-4 hover:bg-blue-700 rounded-xl">Home</Link>
                    </li>
                    <li>
                        <Link to="/tool" className="py-2 px-4 hover:bg-blue-700 rounded-xl">Tool</Link>
                    </li>
                    <li>
                        <Link to='/data' className="py-2 px-4 hover:bg-blue-700 rounded-xl">Data</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default NewNavBar;