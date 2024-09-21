import { useState } from 'react';
import DropDownArrow from '../assets/dropdown-arrow-svgrepo-com.svg'
import '../styles/Nav.css';


export const Nav = () => {

    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }


    return (
        <>
            <nav className="bg-slate-800 flex justify-evenly text-slate-100  shadow-xl z-10 sticky top-22 items-center">
                <div 
                    className='dropDown' 
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }
                >

                    <a className="dropBtn flex font-roboto font-bold hover:text-amber-500 hover:opacity-85" 
                        href="">

                        CATEGORIAS 

                        <img 
                            src={ DropDownArrow } 
                            alt="Flecha desplegable" className={`' ${isHovered ? 'transition-transform -rotate-90  w-5 mx-1' : 'transition-transform w-5 mx-1'}`} 
                        />

                    </a>

                    <ul className='dropDownContent'>
                        <li className="text-white font-roboto font-bold hover:text-amber-500 py-3 px-5">PERIFERICOS</li>
                    </ul>

                </div>
                <a className="font-roboto font-bold hover:text-amber-500 hover:opacity-85" href="">PRODUCTOS</a>
                <a className="font-roboto font-bold hover:text-amber-500 hover:opacity-85" href="">SOPORTE</a>
            </nav>
        </>
    );
}