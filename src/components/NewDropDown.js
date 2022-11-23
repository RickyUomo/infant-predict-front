import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';

function NewDropDown() {
    return (
        <>
            <ul
                className="absolute bg-black h-screen w-full left-0 py-4 flex flex-col"
            >
                {MenuItems.map((item, index) => {
                    return (
                        <li className="mb-4 mx-6 py-2 px-4 rounded-xl hover:bg-blue-700 text-center" key={index}>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default NewDropDown;