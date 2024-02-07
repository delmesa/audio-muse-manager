import { v4 as uuidv4 } from 'uuid';

const generateCollections = () => {
	const arr = [];
	for (let i = 0; i < 20; i++) {
		arr.push({ name: `Collection #${i+1}`, link: `Collection #${i+1}`, uuid: uuidv4()/* , selected: ((i + 1) % 3 === 0) ? true : null */});
	}
	return arr;
}

export const getUserLibrary = () => {
	return generateCollections();
}
