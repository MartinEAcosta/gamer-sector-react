import { useState } from 'react';
import Logo from '../assets/joystick.svg';
import { SearcherBar } from './SearcherBAr';

export const Header = () => {

    // Provisorio para mostrar el iniciar sesión.
    const [isLogged, setIsLogged] = useState(false);

    return (
        <>
            <header className=" bg-gray-900 py-5 px-10 flex justify-between items-center z-10 sticky top-0">

                <div className="flex">
                    <img className="pr-2" src={ Logo } alt="Logo Gamer Sector" />
                    <a href='' className="text-amber-500 font-kanit font-bold text-xl w-4 hover:opacity-90 cursor-pointer"> 
                        <span className=' text-slate-50 '> GAMER </span> 
                        SECTOR
                    </a>
                </div>

                <div className='flex items-center'>
                    
                    <SearcherBar />

                    {
                        !isLogged 
                        && 
                        <a className="hover:text-slate-300 text-slate-100 font-roboto font-bold m-5 px-5 py-2 rounded-xl
                            " href="">
                                INICIAR SESIÓN
                        </a>
                    }
                    
                </div>
            </header>
        </>
    );
};