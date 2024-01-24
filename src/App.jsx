import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import Error from './Error';
import Session from './routes/Session';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />
	},
	{
		path: "session",
		element: <Session />
	}
]);

function App() {
	return (
		<div id="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
