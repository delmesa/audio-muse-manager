import PropTypes from 'prop-types';
import './ExternalLinkInput.css';

const ExternalLinkInput = ({ id, onSubmit=(()=>{}), placeholder }) => {
    return (
        <form id={id} className="external-link-input" onSubmit={onSubmit}>
            <input type="text" required placeholder={placeholder} />
            <button className="main-level-button" type="submit">Add</button>
        </form>
    )
}

ExternalLinkInput.propTypes = {
	id: PropTypes.string.isRequired,
	onSubmit: PropTypes.func,
	placeholder: PropTypes.string
}

export default ExternalLinkInput;