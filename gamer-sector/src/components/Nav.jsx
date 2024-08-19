import DropDownArrow from '../assets/dropdown-arrow-svgrepo-com.svg'

export const Nav = () => {
    return (
        <>
            <nav className="bg-slate-800 flex justify-evenly text-slate-100 py-5 shadow-xl z-10 sticky top-31">
                <a className="font-roboto font-bold hover:text-amber-500 hover:opacity-85 flex" href="">CATEGORIAS <img src={ DropDownArrow } alt="" className='w-5 mx-1' /> </a>
                <a className="font-roboto font-bold hover:text-amber-500 hover:opacity-85" href="">PRODUCTOS</a>
                <a className="font-roboto font-bold hover:text-amber-500 hover:opacity-85" href="">SOPORTE</a>
            </nav>
        </>
    );
}