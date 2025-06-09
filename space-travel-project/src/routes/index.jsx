import { createBrowserRouter, Route, createRoutesFromElements, Navigate} from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Planets from '../pages/Planets';
import Spacecrafts from '../pages/Spacecrafts';
import SpacecraftDetails from '../pages/SpacecraftDetails';

// Layouts
import AppLayout from '../layouts/AppLayout';
import BuildSpacecraft from '../pages/BuildSpacecraft';

const appRouter = createBrowserRouter (
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="spacecrafts" element={<Spacecrafts />} />
            <Route path='spacecrafts/:slug' element={<SpacecraftDetails />} />
            <Route path="planets" element={<Planets />} />
            <Route path="buildspacecraft" element={<BuildSpacecraft />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
    )
)

export default appRouter;