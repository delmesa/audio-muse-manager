import PropTypes from 'prop-types';
import Display from '@/components/Display';
import Collection from '@/features/Collection';

const CollectionDisplay = ({ collections: displayedCollections }) => {
	return (
		<Display components={
			displayedCollections?.map((coll, index) => {
				return <Collection key={index} name={coll.name} link={coll.link} onClick={() => console.log('clicked')}/>;
			}) ?? []
		} /> 
	);
};

CollectionDisplay.propTypes = {
	collections: PropTypes.array
}

export default CollectionDisplay;