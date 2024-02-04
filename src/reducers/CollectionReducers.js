export const selectCollections = (state, action) => {
	switch (action.type) {
		case 'select':
			// add selected property
		case 'unselect':
			// remove selected property
		case 'clearSelected':
			// remove selected property from all collections
		default:
			return state;
	}
}