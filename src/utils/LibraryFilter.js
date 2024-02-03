export const parseString = (string) => {
	// check if string starts with ##regex
	let willUseRegex = false;
	// check if string starts with ##hide
	let willExclude = false;

	// only allow one or the other; both cannot be set
	if (string.startsWith("##regex ")) {
		willUseRegex = true;
		string = string.slice(8);
	} else if (string.startsWith("##hide ")) {
		willExclude = true;
		string = string.slice(7);
	}

	const filter = {}
	// filter.type = "collection"; // will be read from string
	filter.search = string.trim();
	// filter.comparator = ;
	filter.useRegex = willUseRegex;
	filter.exclude = willExclude;

	return filter;
}

export const filterArray = (items, itemFilter) => {
	if (!Array.isArray(items)) {
		console.error("Invalid argument #1: must be an array");
		return {};
	}
	if (typeof itemFilter !== "string" && typeof itemFilter !== "object") {
		console.error("Filter must be either a string or an object; Got: " + (typeof itemFilter));
		return {};
	}
	if (typeof itemFilter === "string") { // if the filter is passed as a string, convert to object
		itemFilter = parseString(itemFilter);
	}

	const filteredList = items.filter(item => {
		const comparator = ( // filter-defined object of `item` to use for comparison
			itemFilter.comparator 
			? (item[itemFilter.comparator]) // use user-defined comparator; ...
			: (item.name || item.title) // ...otherwise use `name` or `title` property by default
		);

		if (comparator === null) {
			console.error(`item ${item} missing comparator (Object.name || Object.title)`);
			return false;
		}

		if (itemFilter.useRegex) {
			return /* itemFilter.exclude ^ */ Boolean(comparator.match(
				(itemFilter.search)
			));
		} else {
			return itemFilter.exclude ^ Boolean(comparator.toLocaleLowerCase().includes(
				(itemFilter.search.toLocaleLowerCase())
			));
		}
	})

	return filteredList;
}

// TODO: Good example for testing?

export default filterArray;