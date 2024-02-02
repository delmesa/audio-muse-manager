import PropTypes from 'prop-types';
import Display from '@/components/Display';
import Collection from '@/features/Collection';

//TODO: useContext for current collection, then send Display filtered array
const CollectionDisplay = ({ collections, filter }) => {
	const filteredCollections = (filter) ? filterArray(collections, filter) : collections;

	return (
		<Display components={
			filteredCollections?.map((coll, index) => {
				return <Collection key={index} link={coll.link} />;
			})
		} />
	);
};

CollectionDisplay.propTypes = {
	collections: PropTypes.array,
	filter: PropTypes.string
}

export default CollectionDisplay;