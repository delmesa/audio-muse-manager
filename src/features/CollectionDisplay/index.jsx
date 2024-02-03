import PropTypes from 'prop-types';
import Display from '@/components/Display';
import Collection from '@/features/Collection';

//TODO: useContext for current collection, then send Display filtered array
const CollectionDisplay = ({ collections }) => {
	return (
		<Display components={
			collections?.map((coll, index) => {
				return <Collection key={index} name={coll.name} link={coll.link} />;
			})
		} />
	);
};

CollectionDisplay.propTypes = {
	collections: PropTypes.array,
	filter: PropTypes.string
}

export default CollectionDisplay;