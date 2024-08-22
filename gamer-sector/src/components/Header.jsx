import Logo from '../assets/joystick.svg';
import SearchIcon from '../assets/search.svg';

export const Header = () => {


    return (
        <>
            <header className=" bg-gray-900 py-10 px-10 flex justify-between items-center z-10 sticky top-0">

                <div className="flex">
                    <img className="pr-2" src={ Logo } alt="Logo Gamer Sector" />
                    <a href='' className="text-amber-500 font-kanit font-bold text-xl w-4 hover:opacity-90 cursor-pointer"> 
                        <span className=' text-white '> GAMER </span> 
                        SECTOR
                    </a>
                </div>

                <form action="GET">
                    <search className="flex border text-white border-amber-500 rounded-xl items-center">
                        <input className=" bg-transparent px-3.5 rounded-xl focus:outline-none " 
                            type="text" placeholder="Search..."/>
                        <button type="submit" className='h-10 px-2 border-l-amber-500 border-l'>
                            <img src={ SearchIcon } alt="Search Button" className='h-8 mx-2' />
                        </button>
                    </search>
                </form>
                
            </header>
        </>
    );
};