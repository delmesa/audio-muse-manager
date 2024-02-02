import PropTypes from 'prop-types';
import Icon from '@/components/Icon';
import './Collection.css';

const Collection = ({ link, onActivate }) => {
	return (
		<button className="collection" onClick={onActivate}>
			<Icon />
			<div>{link}</div>
		</button>
	);
};

Collection.propTypes = {
	link: PropTypes.string,
	onActivate: PropTypes.func 
}

export default Collection;