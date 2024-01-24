// import React from "react";

import MainMenu from '@/features/MainMenu';
import MiniSession from '@/features/MiniSession';

const Home = () => {
    return (
        <>
			<MainMenu />
			<MiniSession /> {/* Mini-session rendering should be dependent upon media query */}
		</>
    )
}

export default Home;