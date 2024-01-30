import PropTypes from 'prop-types';
import './Display.css';

// components: an array of renderable components of which to display as a list
const Display = ({ components = [] }) => {
	return (
		<section className="display">
			{ components.map((element, index) => {
				return <div key={index}>{element}</div>;
			}) }
		</section>
	);
};

Display.propTypes = {
	components: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Display;