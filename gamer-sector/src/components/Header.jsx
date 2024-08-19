import Logo from '../assets/joystick.svg';

export const Header = () => {
    return (
        <>
            <header className=" bg-gray-900 py-10 px-10 flex justify-between items-center z-10 sticky top-0">
                <div className="flex">
                    <img className="pr-2" src={ Logo } alt="logo-gamer-sector" />
                    <a href='' className="text-amber-500 font-kanit font-bold text-xl w-4 hover:opacity-90 cursor-pointer"> 
                        <span className=' text-white '> GAMER </span> 
                        SECTOR
                    </a>
                </div>
                <search className="border text-white border-amber-500 rounded-xl">
                    <input className="h-10 w-60 bg-transparent px-3.5 rounded-xl " 
                        type="text" placeholder="Search..."/>
                    <button type="submit">
                        {/* btn search */}
                    </button>
                </search>
            </header>
        </>
    );
};