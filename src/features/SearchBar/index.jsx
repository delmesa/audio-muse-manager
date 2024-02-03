import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = ({ onChange, placeholder }) => {
    // 
    return (
        <div className="search-bar">
            <input type="text" placeholder={placeholder} onChange={onChange}/>
        </div>
    );
}

SearchBar.propTypes = {
	onChange: PropTypes.func,
	placeholder: PropTypes.string
}

export default SearchBar;