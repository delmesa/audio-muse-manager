import PropTypes from 'prop-types';
import { useState } from 'react';
import { filterArray } from '@/utils/LibraryFilter.js';
import './CollectionPicker.css';

import SearchBar from "@/features/SearchBar";
import CollectionDisplay from "@/features/CollectionDisplay";

const CollectionPicker = ({ id }) => {
	const [userFilter, setUserFilter] = useState("");
    const collections = [];
	const filteredCollections = filterArray(collections, userFilter); // TODO: memoize?
	// const filteredCollections = (userFilter) ? filterArray(collections, userFilter) : collections;

	// // test collections
	for (let i = 0; i < 20; i++) {
		collections.push({ link: `Collection #${i+1}`});
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
		return <CollectionDisplay collections={collections} />
	}

    return (
        <section id={id} className="collection-picker">
            <section className="collection-search">
                <SearchBar placeholder="Filter collections..." />
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