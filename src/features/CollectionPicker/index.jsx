import PropTypes from 'prop-types';
import { useState } from 'react';
import { filterArray } from '@/utils/LibraryFilter.js';
import './CollectionPicker.css';

import SearchBar from "@/features/SearchBar";
import CollectionDisplay from "@/features/CollectionDisplay";

// // for testing collections only
const generateCollections = () => {
	const arr = [];
	for (let i = 0; i < 20; i++) {
		arr.push({ name: `Collection #${i+1}`, link: `Collection #${i+1}`});
	}
	return arr;
}

const CollectionPicker = ({ id }) => {
	const [userFilter, setUserFilter] = useState("");
	
    const collections = generateCollections();
	const filteredCollections = filterArray(collections, userFilter); // TODO: memoize?

	const handleSearchInput = (event) => {
		setUserFilter(event.target.value);
	}

	const getDisplay = () => {
		if (collections.length === 0) {
			return <p className="no-results">
				You do not currently have any collections.
			</p>
		} else if (filteredCollections.length === 0) {
			return <p className="no-results">
				No results
			</p>
		}
		return <CollectionDisplay collections={filteredCollections} />
	}

    return (
        <section id={id} className="collection-picker">
            <section className="collection-search">
                <SearchBar placeholder="Filter collections..." onChange={handleSearchInput}/>
				{ getDisplay() }
            </section>
            <section className="selected-collections">
                <CollectionDisplay collections={[]}/>
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
	collections: PropTypes.arrayOf(PropTypes.object)
}

export default CollectionPicker;