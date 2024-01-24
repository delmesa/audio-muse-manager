import PropTypes from 'prop-types';

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    onSubmit: PropTypes.func
}

const Button = ({ className, text, onSubmit }) => {
    return (
        <button className={className} onSubmit={onSubmit}>
            {text}
        </button>
    )
}

export default Button;