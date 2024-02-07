import PropTypes from 'prop-types';
import { useContext, useEffect, useState, useCallback } from 'react';
import { filterArray } from '@/utils/LibraryFilter.js';
import LibraryContext from '@/context/LibraryContext.js';
import './CollectionPicker.css';

import SearchBar from "@/features/SearchBar";
import CollectionDisplay from "@/features/CollectionDisplay";

const CollectionPicker = ({ id }) => {
	const library = useContext(LibraryContext); // consider making copy of array for the functions to manipulate?
	const [collections, setCollections] = useState(library);
	const [userFilter, setUserFilter] = useState("");
	
	const [selectedCollections, setSelectedCollections] = useState([]);
	const [filteredCollections, setFilteredCollections] = useState(filterArray(collections, userFilter));

	useEffect(() => {
		setFilteredCollections(filterArray(collections, userFilter));
	}, [userFilter, collections])

	//TODO: move to custom hook
	const onClickedCollection = useCallback((collectionId) => {
		const indexOfClicked = collections.findIndex((element) => element.uuid === collectionId);
		if (!(indexOfClicked > -1)) return;

		const clickedCollection = collections[indexOfClicked];

		setCollections((prevState) => {
			const newState = prevState.toSpliced(indexOfClicked, 1);
			console.log("collections:");
			console.log(newState);
			return newState;
		});
		setSelectedCollections((prevState) => {
			const newState = [...prevState];
			newState.push(clickedCollection);
			console.log("selected:");
			console.log(newState);
			return newState;
		});
	}, [collections])

	const handleSearchInput = (event) => {
		setUserFilter(event.target.value);
	};

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
		return <CollectionDisplay collections={filteredCollections} onClick={onClickedCollection} />
	};

	const submitCollections = () => {
		console.log("submitted collections");
	};

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
};

export default CollectionPicker;