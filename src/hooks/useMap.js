import { useEffect, useState } from "react";

const useMap = (originalArray, mapFunction) => {
	const [mappedState, setMappedState] = useState(originalArray.map(mapFunction));
	
}

export default useMap;