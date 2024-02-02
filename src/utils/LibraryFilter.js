export const parseString = (string) => {
	// check if string starts with ##hide
	const willExclude = false;
	// check if string starts with ##regex
	const willUseRegex = false;

	const filter = {}
	// filter.type = "collection"; // will be read from string
	filter.search = string.trim();
	// filter.comparator = ;
	filter.exclude = willExclude;
	filter.useRegex = willUseRegex;

	return filter;
}

export const filterArray = (items, itemFilter) => {
	if (!Array.isArray(items)) {
		console.error("Invalid argument #1: must be an array");
		return {};
	}
	if (typeof itemFilter !== "string" || typeof itemFilter !== "object") {
		console.error("Filter must be either a string or an object.");
		return {};
	}
	if (typeof itemFilter === "string") {
		itemFilter = parseString(itemFilter);
	}

	const filteredList = items.filter(item => {
		const comparator = itemFilter.comparator
			? (item[itemFilter.comparator])
			: (item.name || item.title);

		if (comparator === null) {
			console.error(`item ${item} missing comparator (Object.name || Object.title)`);
			return false;
		}

		if (itemFilter.useRegex) {
			return itemFilter.exclude ^ comparator.match(
				(itemFilter.search)
			);
		} else {
			return itemFilter.exclude ^ comparator.toLocaleLowerCase().match(
				(itemFilter.search.toLocaleLowerCase())
			);
		}
	})

	return filteredList;
}

export default filterArray;