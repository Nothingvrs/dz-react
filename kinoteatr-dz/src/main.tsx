import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './layouts/Layout/Layout.js';
import './index.css';
import { UserContextProvider } from './context/user.context.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Enter from './pages/Enter/Enter.js';
import Favourite from './pages/Favourite/Favourite.js';
import Search from './pages/Search/Search.js';
import SearchError from './pages/SearchError/SearchError.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/',
				element: <Enter/>
			},
			{
				path: '/favourite',
				element: <Favourite/>
			},
			{
				path: '/search',
				element: <Search/>
			},
			{
				path: '/*',
				element: <SearchError/>
			}
		]
	}
]);


createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<UserContextProvider>
			<RouterProvider router={router} />
		</UserContextProvider>
	</StrictMode>
);
