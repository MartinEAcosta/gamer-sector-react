import { useState } from 'react';
import SearchIcon from '../assets/search.svg';

export const SearcherBar = () => {

    const [inputValue, setInputValue] = useState("");

    const onInputChanged = ( { target } ) => {
        setInputValue( target.value );
    } 

    return (
        <>
            <form action="GET">
                <search className="flex border text-slate-100 border-amber-500 rounded-xl items-center">
                    <input 
                        className="bg-transparent px-3.5 rounded-xl focus:outline-none" 
                        type="text" placeholder="Search..."
                        value={ inputValue }
                        onChange={ onInputChanged }
                    />

                    <button 
                        type="submit" 
                        className='hover:bg-slate-800 hover:rounded-r-xl h-10 px-2 border-l-amber-500 border-l'>

                        <img 
                            src={ SearchIcon } alt="Search Button" 
                            className=' h-8 mx-2' 
                        />

                    </button>
                    
                </search>
            </form>
        </>
    );

}
