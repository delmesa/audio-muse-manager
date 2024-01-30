import PropTypes from 'prop-types';
import Display from '@/components/Display';

//TODO: useContext for current collection, then send Display filtered array
const CollectionDisplay = ({ filter }) => {
	return (
		<Display components={[]} />
	);
};

CollectionDisplay.propTypes = {
	filter: PropTypes.string
}

export default CollectionDisplay;