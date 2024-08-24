import DropDownArrow from '../assets/dropdown-arrow-svgrepo-com.svg'
import '../styles/Nav.css';

export const Nav = () => {
    return (
        <>
            <nav className="bg-slate-800 flex justify-evenly text-slate-100 py-5 shadow-xl z-10 sticky top-31 items-center">
                <div className='dropDown'>
                    <a className="dropBtn flex font-roboto font-bold hover:text-amber-500 hover:opacity-85" href="">CATEGORIAS<img src={ DropDownArrow } alt="" className='w-5 mx-1' /></a>
                    <ul className='dropDownContent'>
                        <li className="text-white font-roboto font-bold hover:text-amber-500 p-5">PERIFERICOS</li>
                    </ul>
                </div>
                <a className="font-roboto font-bold hover:text-amber-500 hover:opacity-85" href="">PRODUCTOS</a>
                <a className="font-roboto font-bold hover:text-amber-500 hover:opacity-85" href="">SOPORTE</a>
            </nav>
        </>
    );
}