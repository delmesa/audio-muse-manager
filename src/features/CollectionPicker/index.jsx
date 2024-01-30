import PropTypes from 'prop-types';
import './CollectionPicker.css';
// import { useContext } from 'react';

import SearchBar from "@/features/SearchBar";
import CollectionDisplay from "@/features/CollectionDisplay";

const CollectionPicker = ({ id, library }) => {
    
    return (
        <section id={id} className="collection-picker">
            <section className="collection-search">
                <SearchBar placeholder="Filter collections..." />
                <CollectionDisplay />
            </section>
            <section className="selected-collections">
                <CollectionDisplay />
                <div>
                    <div className="filler"></div>
                    <button className="shuffle-button">
                        Shuffle
                    </button>
                </div>
            </section>
        </section>
    );
};

CollectionPicker.propTypes = {
	id: PropTypes.string.isRequired,
	library: PropTypes.arrayOf(PropTypes.object)
}

export default CollectionPicker;