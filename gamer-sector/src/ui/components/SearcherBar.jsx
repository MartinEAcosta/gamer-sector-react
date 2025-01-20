import { useState } from 'react';
import styles from '../styles/SearchBar.module.css'
import SearchIcon from '../../assets/search.svg';

export const SearcherBar = () => {

    const [inputValue, setInputValue] = useState("");

    const onInputChanged = ( { target } ) => {
        setInputValue( target.value );
    } 

    const onSumbit = ( e ) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <>
            <form action="GET" onSubmit={ onSumbit }>
                <search className={styles.searchBar}>
                    <input 
                        className={styles.inputWrite}
                        type="text" placeholder="Search..."
                        value={ inputValue }
                        onChange={ onInputChanged }
                    />

                    <button 
                        type="submit" 
                        className={styles.btnSumbit}>

                        <img 
                            src={ SearchIcon } alt="Search Button" 
                            className={styles.svgSumbit} 
                        />

                    </button>

                </search>
            </form>
        </>
    );

}
