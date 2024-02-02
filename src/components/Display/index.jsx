import PropTypes from 'prop-types';
import './Display.css';

// components: an array of renderable components of which to display as a list
const Display = ({ components = [] }) => {
	console.log(components);
	return (
		<section className="display">
			{ components.map((element) => element) }
		</section>
	);
};

Display.propTypes = {
	components: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Display;