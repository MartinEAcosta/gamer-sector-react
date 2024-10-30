import PropTypes from 'prop-types';
import backArrow from "../assets/ArrowBack.svg"
import forwardArrow from "../assets/ArrowForward.svg";

export const Arrow = ( { direction } ) => {
    // En caso de que la direction pasada via Props sea igual a forward
    const isForward =  direction === "forward";
    // Elige dependiendo del anterior condicional
    const svgConditional = isForward ? forwardArrow : backArrow;
    // Estilado personal de cada flecha
    const tailwindProp = isForward ? "-right-5" : "-left-5";

    return (
        <div className={`cursor-pointer transition-transform ease-in-out hover:scale-105 delay-200 flex ${ tailwindProp } absolute justify-center self-center bg-slate-50 rounded-full h-14 w-12 shadow-2xl`}>
            <img className="m-auto" src={ svgConditional } alt="" />
        </div>
    )

}

Arrow.propTypes = {
    direction: PropTypes.string.isRequired,
}
