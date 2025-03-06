import PropTypes from 'prop-types';


import ButtonNext  from '../../assets/SliderNext.svg';
import ButtonBack  from '../../assets/SliderBack.svg';
import styles from '../styles/SliderButton.module.css';

export const SliderButton = ( { direction } ) => {

    const isForward = direction === 'forward';

    const svgConditional = isForward ? ButtonBack : ButtonNext;

    return (
        <div className={` ${ styles.containerSlider } ${ isForward ? styles.btnBack : styles.btnForward }`} >
            <img className={styles.svgArrow} src={ svgConditional } alt={`Arrow button ${direction}`} />
        </div>
    );
}

SliderButton.propTypes = {
    direction : PropTypes.string,
}