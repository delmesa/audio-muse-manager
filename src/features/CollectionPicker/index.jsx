import PropTypes from 'prop-types';
import { useState } from 'react';
import { filterArray } from '@/utils/LibraryFilter.js';
import { v4 as uuidv4 } from 'uuid';
import './CollectionPicker.css';

import SearchBar from "@/features/SearchBar";
import CollectionDisplay from "@/features/CollectionDisplay";

// // for testing collections only
const generateCollections = () => {
	const arr = [];
	for (let i = 0; i < 20; i++) {
		arr.push({ name: `Collection #${i+1}`, link: `Collection #${i+1}`, uuid: uuidv4()/* , selected: ((i + 1) % 3 === 0) ? true : null */});
	}
	return arr;
}
const collections = generateCollections();

const CollectionPicker = ({ id }) => {
	const [userFilter, setUserFilter] = useState("");
		
	const [unselectedCollections, selectedCollections] = collections.reduce((mainArray, coll) => {
		const isSelected = coll.selected ? 1 : 0;
		if (mainArray[isSelected] == null) {
			mainArray[isSelected] = [];
		}
		mainArray[isSelected].push(coll);
		return mainArray;
	}, [])
	const  filteredUnselectedCollections = filterArray(unselectedCollections, userFilter);

	const handleSearchInput = (event) => {
		setUserFilter(event.target.value);
	}

	const getDisplay = () => {
		if (collections.length === 0) {
			return <p className="no-results">
				You do not currently have any collections.
			</p>
		} else if (filteredUnselectedCollections.length === 0) {
			return <p className="no-results">
				No results
			</p>
		}
		return <CollectionDisplay collections={filteredUnselectedCollections} />
	}

	const submitCollections = () => {
		console.log("submitted collections");
	}

    return (
        <section id={id} className="collection-picker">
            <section className="collection-search">
                <SearchBar placeholder="Filter collections..." onChange={handleSearchInput}/>
				{ getDisplay() }
            </section>
            <section className="selected-collections">
                <div>
                    <div className="filler"></div>
                    <button className="shuffle-button main-level-button" onClick={submitCollections}>
                        Shuffle
                    </button>
                </div>
                <CollectionDisplay collections={selectedCollections} />
            </section>
        </section>
    );
};

CollectionPicker.propTypes = {
	id: PropTypes.string.isRequired,
	collections: PropTypes.arrayOf(PropTypes.object)
}

export default CollectionPicker;