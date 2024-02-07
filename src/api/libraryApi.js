import { v4 as uuidv4 } from 'uuid';

const generateCollections = () => {
	const arr = [];
	for (let i = 0; i < 20; i++) {
		const collName = `Collection #${(i+1).toString().padStart(2, '0')}`;
		arr.push({ name: collName, link: collName, uuid: uuidv4()});
	}
	return arr;
}

export const getUserLibrary = () => {
	return generateCollections();
}
