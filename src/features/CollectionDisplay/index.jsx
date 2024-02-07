import PropTypes from 'prop-types';
import Display from '@/components/Display';
import Collection from '@/features/Collection';

const CollectionDisplay = ({ collections: displayedCollections, onClick }) => {
	return (
		<Display components={
			displayedCollections?.map((coll, index) => {
				return <Collection key={index} name={coll.name} link={coll.link} onClick={() => onClick(coll.uuid)}/>;
			}) ?? []
		} /> 
	);
};

CollectionDisplay.propTypes = {
	collections: PropTypes.array,
	onClick: PropTypes.func
}

export default CollectionDisplay;