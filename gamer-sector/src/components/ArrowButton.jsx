import PropTypes from 'prop-types';
import backArrow from "../assets/ArrowBack.svg"
import forwardArrow from "../assets/ArrowForward.svg";
import styles from '../styles/Arrow.module.css';

export const Arrow = ( { direction } ) => {
    // En caso de que la direction pasada via Props sea igual a forward
    const isForward =  direction === "forward";
    // Elige dependiendo del anterior condicional
    const svgConditional = isForward ? forwardArrow : backArrow;

    return (
        <div className={` ${ styles.btnArrow } ${ isForward ? styles.btnForward : styles.btnBack}`}>
            <img className={styles.svg} src={ svgConditional } alt={`Arrow button ${direction}`} />
        </div>
    )

}

Arrow.propTypes = {
    direction: PropTypes.string.isRequired,
}
