import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './layouts/Layout/Layout.js';
import './index.css';
import { UserContextProvider } from './context/user.context.js';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import Enter from './pages/Enter/Enter.js';
import Favourite from './pages/Favourite/Favourite.js';
import Search from './pages/Search/Search.js';
import SearchError from './pages/SearchError/SearchError.js';
import axios from 'axios';
import Description from './pages/Description/Description.js';
import { RequireAuth } from './helpers/RequireAuth.js';
import LoginLayout from './layouts/LoginLayout/LoginLayout.js'

const router = createBrowserRouter([
	{
		path: '/auth',
		element: <LoginLayout/>,
		children: 
		[
			{
				path: '/auth',
				element: <Enter/>
			},
		]
	},
	{
		path: '/',
		element: <RequireAuth><Layout/></RequireAuth>,
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
				element: <Search/>,
				errorElement: <SearchError/>,

			},
			{
				path: '/*',
				element: <SearchError/>
			},
			{
				path: '/card/:id',
				element: <Description />,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					return defer({
						data: await axios.get(`https://search.imdbot.workers.dev/?tt=${params.id}`).then(data => data)
						})
					}
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
