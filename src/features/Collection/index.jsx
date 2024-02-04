import PropTypes from 'prop-types';
import Icon from '@/components/Icon';
import './Collection.css';

const Collection = ({ name, link, onClick }) => {
	return (
		<button className="collection" onClick={onClick}>
			<Icon />
			<div>{name}</div>
		</button>
	);
};

Collection.propTypes = {
	name: PropTypes.string,
	link: PropTypes.string,
	onClick: PropTypes.func 
}

export default Collection;