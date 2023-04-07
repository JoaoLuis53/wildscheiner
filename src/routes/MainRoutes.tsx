import { useRoutes, Routes, Route } from 'react-router-dom';
import { Admin } from '../pages/Admin';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Partners } from '../pages/Partners';
import { WhoWeAre } from '../pages/WhoWeAre';

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/about', element: <WhoWeAre /> },
        { path: '/partners', element: <Partners /> },
        { path: '/administer', element: <Admin /> },
        { path: '*', element: <NotFound /> },

    ]);
}