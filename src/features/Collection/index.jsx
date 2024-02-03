import PropTypes from 'prop-types';
import Icon from '@/components/Icon';
import './Collection.css';

const Collection = ({ name, link, onActivate }) => {
	return (
		<button className="collection" onClick={onActivate}>
			<Icon />
			<div>{name}</div>
		</button>
	);
};

Collection.propTypes = {
	name: PropTypes.string,
	link: PropTypes.string,
	onActivate: PropTypes.func 
}

export default Collection;