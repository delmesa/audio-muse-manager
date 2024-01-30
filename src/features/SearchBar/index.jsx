import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = ({ placeholder }) => {
    // 
    return (
        <div className="search-bar">
            <input type="text" placeholder={placeholder} />
        </div>
    );
}

SearchBar.propTypes = {
	placeholder: PropTypes.string
}

export default SearchBar;