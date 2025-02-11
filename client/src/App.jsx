import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Blog, Landing, Error } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'blog', element: <Blog /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
